export class PageVo {
  constructor(public pageIndex: number,
              public pageSize: number,
              public totalCount: number = 0,
              public pageSizeOptions?: number[]) {
    if (!this.pageSizeOptions) {
      this.pageSizeOptions = [5, 15, 30, 60, 90];
    }
  }
  /*
  *  contructor(public A:number) 라고 하면 A:number 이라고 선안하지 않아도.. this.A = A라고 안해도 됨
  * */
}
