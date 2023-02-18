import "reflect-metadata";
import { ValidationPipe } from '@nestjs/common/pipes';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import "reflect-metadata"

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

    app.useGlobalPipes(new ValidationPipe());

    const options = new DocumentBuilder()
        .setTitle('Ashramam')
        .setDescription('Ashramam API')
        .setVersion('1.0')
        .addTag('auth')
        .addBearerAuth(
            { type: 'http', scheme: 'bearer', bearerFormat: 'jwt' },
            'access-token',
        )
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);
  await app.listen(9000);
}
bootstrap();
