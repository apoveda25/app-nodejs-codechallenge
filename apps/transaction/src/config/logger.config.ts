import { CORRELATION_ID_HEADER } from '@app/shared';
import { ConfigService } from '@nestjs/config';
import { IncomingMessage } from 'http';

export const loggerConfig = async (configService: ConfigService) => {
  const isDevelopment =
    configService.getOrThrow('ENVIRONMENT') === 'development';

  return {
    pinoHttp: {
      transport: isDevelopment
        ? {
            target: 'pino-pretty',
            options: { messageKey: 'message' },
          }
        : undefined,
      messageKey: 'message',
      customProps: (req: IncomingMessage) => ({
        correlationId: req.headers[CORRELATION_ID_HEADER],
      }),
      autoLogging: false,
      serializers: {
        req: () => undefined,
        res: () => undefined,
      },
    },
  };
};
