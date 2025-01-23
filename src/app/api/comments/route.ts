import { client } from '@/sanity/lib/client';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, comment, postId } = body;

    const doc = {
      _type: 'comment',
      post: {
        _type: 'reference',
        _ref: postId
      },
      name,
      email,
      comment,
      _createdAt: new Date().toISOString()
    };

    const response = await client.create(doc);
    
    return NextResponse.json(response);
  } catch (error) {
    console.error('Error creating comment:', error);
    return NextResponse.json(
      { message: 'Error creating comment' },
      { status: 500 }
    );
  }
} 