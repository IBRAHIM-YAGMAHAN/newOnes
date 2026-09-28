import { GenelDataDto } from "./genelDataDto";

export class GridParams {
    page: number = 1;
    pageSize: number = 10;
    sortColumns: string[] = [];
    sortDirections: string[] = [];
    searchColumns: string[] = [];
    searchValues: string[] = [];
    fakulteYoMyoEnstituId: number = 0;
    birimId: number = 0;
    mezuniyetYil: number = 0;
    secilenOgrenimTipArray: string[] = [];
    secilenCalismaDurumu: string = '';
    secilenFotografDurumu: string = '';
}

