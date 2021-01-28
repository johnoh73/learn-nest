import { IsNumber, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDTO } from './create-movie.dto';

//partial type으로 하면 전부다 필수 값이 아니게 된다
export class UpdateMovieDTO extends PartialType(CreateMovieDTO) {}

/*{
  @IsString()
  readonly title?: string;

  @IsNumber()
  readonly year?: number;

  @IsString({ each: true })
  readonly genres?: string[];
}
*/
