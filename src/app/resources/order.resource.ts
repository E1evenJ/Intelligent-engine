import { Injectable } from '@angular/core';
import { ResourceParams, ResourceAction, ResourceMethod } from 'ngx-resource';
import { RestClient } from 'app/services/rest-client.service';
import { RequestMethod } from '@angular/http';
import { Result } from 'app/beans/result';
import { Order } from 'app/beans/order';

@Injectable()
@ResourceParams({
    url: '/order_pay'
})
export class OrderResource extends RestClient {

    @ResourceAction({
        method: RequestMethod.Post,
    })
    postOrder: ResourceMethod<Order, Result>;

}