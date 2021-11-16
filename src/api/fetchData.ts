import axios from 'axios';
import { Site, Test } from './types';

export default class PostService {
  static async getTests(): Promise<Test[]> {
    const response = await axios.get('http://localhost:3100/tests');
    return response?.data;
  }

  static async getSites(): Promise<Site[]> {
    const response = await axios.get('http://localhost:3100/sites');
    return response.data;
  }

  static async getSitesById(id: number | string) {
    const response = await axios.get(`http://localhost:3100/sites/${id}`);
    return response.data;
  }

  static async getTestsById(id: number | string) {
    const response = await axios.get(`http://localhost:3100/tests/${id}`);
    return response.data;
  }
}
