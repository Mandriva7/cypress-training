
class Index {
    private itemSelected: string;
    constructor() {
      this.itemSelected = "#item_1_title_link > .inventory_item_name";
    }
    public SelectrProduct(): void {
      cy.get(this.itemSelected).select;
    }
}

  export { Index };
