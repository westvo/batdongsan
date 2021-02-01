import { Injectable } from '@nestjs/common';

@Injectable()
export class PostService {
    all() {
        return [{
            id: 1, name: 'post1', content: 'post content 1'
        },
        {
            id: 2, name: 'post2', content: 'post content 2'
        },
        {
            id: 4, name: 'post2', content: 'post content 2'
        }]
    }
}
