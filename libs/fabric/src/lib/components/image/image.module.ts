// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { registerElement } from '@angular-react/core';
import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Image } from 'office-ui-fabric-react';
import { FabImageComponent } from './image.component';

const components = [FabImageComponent];

@NgModule({
  imports: [CommonModule],
  declarations: components,
  exports: components,
  schemas: [NO_ERRORS_SCHEMA],
})
export class FabImageModule {
  constructor() {
    // Add any React elements to the registry (used by the renderer).
    registerElement('Image', () => Image);
  }
}
