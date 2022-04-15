import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateDateColumn, UpdateResult } from 'typeorm';
import { FeedPost } from '../models/post.interface';
import { FeedService } from '../services/feed.service';

@Controller('feed')
export class FeedController {
    constructor(private feedService: FeedService){}

    @Post()
    create(@Body() post: FeedPost): Observable<FeedPost> {
        return this.feedService.createPost(post)
    }

    @Get()
    getAll(): Observable<FeedPost[]> {
        return this.feedService.findAllPosts()
    }

    @Put(':id')
    update(
        @Body() post: FeedPost, 
        @Param('id') id: number
    ): Observable<UpdateResult> {
        return this.feedService.updatePost(post, id)
    }

    @Delete(':id')
    delete(@Param('id') id: number): Observable<DeleteResult> {
        return this.feedService.deletePost(id)
    }
}
