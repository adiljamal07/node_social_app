import { Injectable } from '@nestjs/common';

import { Share } from '../shares/share.entity' ;
import { ShareDto } from '../dto/share.dto' ;
import {User} from "../users/user.entity";
@Injectable()
export class SharesService {
    async create(shareDto: ShareDto) {
        const share = Share.create(shareDto) ;
        await share.save() ;
    }

    async userShares(id: number) {
        return await User.find({ where: {
                id: id,
            },
            relations: ["shares", "shares.post"],
        });
    }
}
