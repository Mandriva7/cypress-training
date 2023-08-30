
export class ItemPage {
    private itemClick: string;
    constructor() {
      this.itemClick = "#item_1_title_link > .inventory_item_name";
    }
    public ClickItem(): void {
      cy.get(this.itemClick).click();
    }
}
