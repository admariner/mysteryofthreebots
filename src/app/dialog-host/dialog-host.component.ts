/**
 *  Copyright 2020 Google LLC
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import { Component, ViewChild, ElementRef } from '@angular/core';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-dialog-host',
  templateUrl: './dialog-host.component.html',
  styleUrls: ['./dialog-host.component.scss']
})
export class DialogHostComponent {
  @ViewChild('backdrop', {static: false}) backdrop: ElementRef;

  constructor(private readonly dialogService: DialogService) { }


  handleBackdropClick(event: any) {
    if (event.target === this.backdrop.nativeElement) {
      this.dialogService.close();
    }
  }

  handleCloseClick() {
    this.dialogService.close();
  }
}
