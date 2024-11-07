import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';


@Injectable()
export class FileService {
    create(file: Express.Multer.File){
       
        try{
            const fileExt = file.originalname.split('.').pop();
            const filePath = path.resolve('src', 'static')
            const fileName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('') + '.' + fileExt
            const fileSize = file.size / 1024 / 1024;
            if(fileSize > 2){
                throw new HttpException('img more than 2 mb', HttpStatus.FORBIDDEN);
            }
            if(!fs.existsSync(filePath)){
                fs.mkdirSync(filePath, {recursive: true})
            }
            fs.writeFileSync(path.resolve(filePath, fileName), file.buffer)
            return fileName
        }
        catch(e){
            throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
