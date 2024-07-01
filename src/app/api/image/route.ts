import { NextRequest, NextResponse } from 'next/server';
import formidable from 'formidable';
import path from 'path';
import fs from 'fs/promises';

export const config = {
  api: {
    bodyParser: false,
  },
};

const readFile = (
  req: NextRequest,
  saveLocally?: boolean
): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
  const options: formidable.Options = {};
  if (saveLocally) {
    options.uploadDir = path.join(process.cwd(), 'public/uploaded-images');
    options.filename = (name, ext, path, form) => {
      return Date.now().toString() + '_' + path.originalFilename;
    };
  }
  options.maxFieldsSize = 4000 * 1024 * 1024;
  const form = formidable(options);
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) {
        reject(err);
      }
      resolve({ fields, files });
    });
  });
};

export async function POST(req: NextRequest) {
  // try {
  //   await fs.readdir(path.join(process.cwd(), 'public', 'uploaded-images'));
  // } catch (error) {
  //   await fs.mkdir(path.join(process.cwd(), 'public', 'uploaded-images'));
  // }

  return console.log(req.body);

  // try {
  //   const { fields, files } = await readFile(req, true);
  //   return NextResponse.json({ done: 'ok', fields, files });
  // } catch (error) {
  //   return NextResponse.json({ error: 'Failed to upload file', details: error.message }, { status: 500 });
  // }
}