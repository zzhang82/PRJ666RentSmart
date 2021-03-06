import { Injectable } from '@angular/core';
// import * as fs from "fs"
//import { ListComponent } from './KijijiList.component';
//import { Http,Headers,Response,RequestOptions } from '@angular/http';
import 'rxjs/Rx';
//import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
//from the scrable apis
//https://www.npmjs.com/package/kijiji-scraper


@Injectable()
export class KijijiList{
    title: String;
    description: String;
    date: Date;
    image: String;
    images: String[];
    attributes: Object;    
    url: String;
    summary: {
        locationID : BigInteger;
        CategoryID: BigInteger;
    }
    Keywords: String;
    minPrice: Number;
    maxPrice: Number;
    sortByName: string;
    minResults: number;
    maxResults: number;
    //min and max result for the sorting algrothims
    //so later days we can use pagenation on this part for better runtimes
}

//Ad.Get(url[, callback])