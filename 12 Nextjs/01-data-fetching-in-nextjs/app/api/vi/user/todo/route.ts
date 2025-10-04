import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({
        id: 1,
        userId: 1,
        title: "Todo Title",
        completed: false
    })
}

export function POST() {
    return NextResponse.json({
        message: "This is a POST request"
    })
};

export function PUT(){
    return NextResponse.json({
        message: "This is a PUT request"
    })
}