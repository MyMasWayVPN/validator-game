import QRCode from 'qrcode';

// Helper function to generate CRC16
function toCRC16(str) {
  function charCodeAt(str, i) {
    let get = str.substr(i, 1);
    return get.charCodeAt();
  }

  let crc = 0xFFFF;
  let strlen = str.length;
  for (let c = 0; c < strlen; c++) {
    crc ^= charCodeAt(str, c) << 8;
    for (let i = 0; i < 8; i++) {
      if (crc & 0x8000) {
        crc = (crc << 1) ^ 0x1021;
      } else {
        crc = crc << 1;
      }
    }
  }
  hex = crc & 0xFFFF;
  hex = hex.toString(16);
  hex = hex.toUpperCase();
  if (hex.length === 3) {
    hex = "0" + hex;
  }
  return hex;
}

// QRIS dynamic generation function
function qrisDinamis(nominal, qris) {
  let qris2 = qris.slice(0, -4);
  let replaceQris = qris2.replace("010211", "010212");
  let pecahQris = replaceQris.split("5802ID");
  let uang = "54" + ("0" + nominal.length).slice(-2) + nominal + "5802ID";

  let output = pecahQris[0] + uang + pecahQris[1] + toCRC16(pecahQris[0] + uang + pecahQris[1]);
  return output;
}

// API handler function
export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { nominal, qris } = req.query;

    if (!nominal || !qris) {
      return res.status(400).json({ error: 'Missing required query parameters: nominal and qris' });
    }

    try {
      const qrCodeData = qrisDinamis(nominal, qris);
      
      // Generate QR code as a Data URL
      const qrImage = await QRCode.toDataURL(qrCodeData, { margin: 2, scale: 10 });

      // Send the QR code image in the response
      res.setHeader('Content-Type', 'image/png');
      res.send(Buffer.from(qrImage.split(',')[1], 'base64'));
    } catch (error) {
      res.status(500).json({ error: 'Error generating QR code' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
