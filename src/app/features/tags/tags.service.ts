import { Injectable } from '@angular/core';

@Injectable()

export class TagTree {
    id: string;
    text: string;
    expanded?: boolean;
    selected?: boolean;
    price?: string;
    items?: TagTree[];
  }

const tags: TagTree[] = [
    {
      id: '1_1_1',
      text: 'Status',
      items: [
        {
          id: '1_1_1_1',
          text: 'Seen',
          price: 'Message has been read'
        },
        {
          id: '1_1_1_2',
          text: 'Answered',
          price: 'Message has been answered'
        },
        {
          id: '1_1_1_3',
          text: 'Flagged',
          price: 'Message is "flagged" for urgent/special attention'
        },
        {
          id: '1_1_1_4',
          text: 'Deleted',
          price: 'Message is "deleted" for removal by later EXPUNGE'
        },
        {
          id: '1_1_1_5',
          text: 'Draft',
          price: 'Message has not completed composition (marked as a draft).'
        }
      ]
    },
    {
      id: '2_1_1',
      text: 'Status',
      items: [
        {
          id: '2_1_1_1',
          text: 'Seen',
          price: 'Message has been read'
        },
        {
          id: '2_1_1_2',
          text: 'Answered',
          price: 'Message has been answered'
        },
        {
          id: '2_1_1_3',
          text: 'Flagged',
          price: 'Message is "flagged" for urgent/special attention'
        },
        {
          id: '2_1_1_4',
          text: 'Deleted',
          price: 'Message is "deleted" for removal by later EXPUNGE'
        },
        {
          id: '2_1_1_5',
          text: 'Draft',
          price: 'Message has not completed composition (marked as a draft).'
        }
      ]
    }
  ];

@Injectable()
  export class TagsService {
    getTagTree(): TagTree[] {
      return tags;
    }
  }
