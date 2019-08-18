const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });
const fs = require('fs');
const uuidv4 = require('uuid-v4');
const { Storage } = require('@google-cloud/storage');

const storage = new Storage({
  projectId: 'instaclone2-37e57',
  keyFilename: 'instaclone2-firebase.json',
});

exports.helloWorld = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    try {
      fs.writeFileSync('/tmp/imageToSave.jpg', request.body.image, 'base64');

      const bucket = storage.bucket('instaclone2-37e57.appspot.com');

      const uuid = uuidv4();

      bucket.upload(
        '/tmp/imageToSave.jpg',
        {
          uploadType: 'media',
          destination: `/posts/${uuid}.jpg`,
          metadata: {
            metadata: {
              contentType: 'image/jpeg',
              firebaseStorageDownloadTokens: uuid,
            },
          },
        },
        (err, file) => {
          if (err) {
            console.log(err);
            return response.status(500).json({ error: err });
          }
          const filename = encodeURIComponent(file.name);
          const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${filename}?alt=media&token=${uuid}`;

          return response.status(201).json({ imageUrl });
        }
      );
    } catch (err) {
      console.log(err);
      return response.status(500).json({ error: err });
    }
  });
});
