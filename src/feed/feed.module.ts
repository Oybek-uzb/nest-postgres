import { Module } from '@nestjs/common';
import { FeedService } from './services/feed.service';

@Module({
  providers: [FeedService]
})
export class FeedModule {}
