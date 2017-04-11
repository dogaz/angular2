function Item(purchase, price, ears, done) {
    this.purchase = purchase;
    this.price = price;
    this.ears = ears;
    this.done = done;
}

var AppComponent = ng.core.Component({
    selector: 'my-app',
    template:  `<div class="page-header">
        <h1> Список евреев </h1>
    </div>
    <div class="panel">
        <div class="form-inline">
        
            <div class="form-group">
                <div class="col-md-8">
                    <input class="form-control" [(ngModel)]="text" placeholder = "Ф.И.О." />
                </div>
            </div>
            
            <div class="form-group">
                <div class="col-md-8">
                    <input class="form-control" [(ngModel)]="text2" placeholder = "ears" />
                </div>
            </div>
           
            <div class="form-group">
                <div class="col-md-6">
                    <input type="number" class="form-control" [(ngModel)]="price" placeholder="Лет" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-offset-2 col-md-8">
                    <button class="btn btn-default" (click)="addItem(text,text2,price)">Добавить</button>
                </div>
            </div>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>ФИО</th>
                    <th>Ears</th>
                    <th>Возраст</th>
                    <th>Был в Израиле</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let item of items">
                    <td>{{item.purchase}}</td>
                    <td>{{item.price}}</td>
                    <td>{{item.ears}}</td>
                    <td><input type="checkbox" [(ngModel)]="item.done" /></td>
                </tr>
            </tbody>
        </table>
    </div>`
})
    .Class({
        constructor: function() {

            this.items= [
              
            ];
        }
    });

AppComponent.prototype.addItem = function (text, price, text2) {
    if (text == null || text == undefined || text.trim() == "")
        return;
    
    if (price == null || price == undefined)
        return;

    this.items.push(new Item(text, price, text2));
};