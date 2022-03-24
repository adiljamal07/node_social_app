import {Body, Controller, Get, HttpStatus, Param, Post} from '@nestjs/common';
import { SharesService } from './shares.service';
import {ShareDto} from "../dto/share.dto";

@Controller('shares')
export class SharesController {
  constructor(private readonly sharesService: SharesService) {}

  @Post()
  create(@Body() shareDto: ShareDto) {
    const share = this.sharesService.create(shareDto);
    return {
      statusCode: HttpStatus.OK,
      message: 'Share successfully',
    };
  }

  @Get(':id')
  userShare(@Param('id') id: number) {
      return this.sharesService.userShares(id) ;
  }

}
