
class ItemPage {
    private itemClick: string;
    constructor() {
      this.itemClick = "#item_1_title_link";
    }
    public ClickItem(): void {
      cy.get(this.itemClick).click;
    }
}
  export { ItemPage };
