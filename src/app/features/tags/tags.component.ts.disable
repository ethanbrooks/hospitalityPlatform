import { Component } from '@angular/core';
import { TagsService, TagTree } from './tags.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
  providers: [TagsService]
})

export class TagsComponent {

  tags: TagTree[];
  checkedItems: TagTree[] = [];

  constructor(serviceTags: TagsService) {

    this.tags = serviceTags.getTagTree();

  }
}
