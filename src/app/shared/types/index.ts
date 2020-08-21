import { Links } from '@shared/enums/links.enum';
import { Breakpoints } from '@shared/enums/breakpoints.enum';

export type LinksCollection = Links.CLIENT_SIDE | Links.SERVER_SIDE | Links.MISC;

export type Breakpoint = Breakpoints.LTSM | Breakpoints.LTMD | Breakpoints.LTLG | Breakpoints.LTXL;
