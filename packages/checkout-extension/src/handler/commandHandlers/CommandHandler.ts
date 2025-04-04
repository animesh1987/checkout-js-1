import { CheckoutService, Extension, ExtensionCommandMap } from '@bigcommerce/checkout-sdk';
import React from 'react';

import { ExtensionAction } from '../../ExtensionProvider';

export interface CommandHandlerProps {
    checkoutService: CheckoutService;
    dispatch: React.Dispatch<ExtensionAction>;
    extension: Extension;
}

export interface CommandHandler<T extends keyof ExtensionCommandMap> {
    commandType: T;
    handler: (command: ExtensionCommandMap[T]) => Promise<void> | void;
}
