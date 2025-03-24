import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(): Promise<NextResponse> {
  try {
    const filePath = path.join(process.cwd(), 'src/app/api/reviews/reviews.json');
    const data = fs.readFileSync(filePath, { encoding: 'utf8' });
    const reviews = JSON.parse(data);
    const encoder = new TextEncoder();

    const stream = new ReadableStream({
      start(controller) {
        let index = 0;

        function push() {
          if (index < reviews.length) {
            // chopping it into smaller chunks to show streaming behavior
            const chunk = JSON.stringify(reviews[index]);
            controller.enqueue(encoder.encode((index === 0 ? "[" : ",") + chunk));
            index++;
            setTimeout(push, 500); // 1/2 second delay between chunks
          } else {
            controller.enqueue(encoder.encode("]"));
            controller.close();
          }
        }

        push();
      }
    });

    return new NextResponse(stream, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", 
      }
    });

  } catch (error) {
    console.error("Error reading or streaming file:", error);
    return new NextResponse(JSON.stringify({ error: 'Failed to read reviews' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}