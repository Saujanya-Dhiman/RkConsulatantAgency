import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request) {
  try {
    const data = await request.json();
    console.log("New Inquiry Received:", data);
    
    // Simulate database saving by writing to a local JSON file in the project directory
    const logDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
    
    const logPath = path.join(logDir, 'inquiries.json');
    let inquiries = [];
    
    if (fs.existsSync(logPath)) {
      try {
        const fileContent = fs.readFileSync(logPath, 'utf8');
        inquiries = JSON.parse(fileContent);
      } catch (e) {
        inquiries = [];
      }
    }
    
    inquiries.push({
      ...data,
      timestamp: new Date().toISOString()
    });
    
    fs.writeFileSync(logPath, JSON.stringify(inquiries, null, 2), 'utf8');
    
    return NextResponse.json({ success: true, message: "Inquiry saved successfully" });
  } catch (error) {
    console.error("Inquiry API Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ status: "Inquiry API is active" });
}
