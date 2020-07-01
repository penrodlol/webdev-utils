import { ILink } from './link.interface'

export interface ILinkListNode {
    parent: string;
    children: ILink[];
    hidden: boolean;
}
