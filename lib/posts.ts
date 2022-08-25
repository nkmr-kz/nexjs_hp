import fetch from 'node-fetch';
import { Post } from '../pages/api/posts';

const apiUrl = "http://localhost:3000/api/posts";

export const getAllPosts = async (): Promise<Post[]> => {
    const response = await fetch(apiUrl);
    return await response.json() as Post[];
}

export const getAllPostIds = async (): Promise<string[]> => {
    const response = await fetch(apiUrl) ;
    const posts = await response.json() as Post[];
    return posts.map(post => String(post.id));
}

export const getPost = async (id: number): Promise<Post> => {
    const response = await fetch(`${apiUrl}/${id}`);
    return await response.json() as Post;
}