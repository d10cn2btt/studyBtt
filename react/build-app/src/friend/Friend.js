import React from 'react';
import {ListFriend} from './ListFriend';
import {AddFriend} from './AddFriend';

export class Friend extends React.Component {
    constructor() {
        super();
        this.state = {
            title: 'Add new friend',
            friends: [
                'Duong Qua',
                'Tieu Long Nu',
                'Quach Tinh'
            ]
        }
    }

    handleAdd(friend) {
        this.setState({
            friends: this.state.friends.concat(friend)
        })
    }

    tra_tien_em_anh_oi() {
        return new Promise(function(resolve, reject) {
            let tien_tra = 10000;
            console.log('Tra tien : ' + tien_tra);

            resolve(tien_tra);
            reject('Lit me. Deo tra day thi sao !!')
        });
    }

    nhau_an_mung(tien_ve) {
        let tien_sau_nhau = tien_ve - 1000;
        console.log('Tien sau nhau :' + tien_sau_nhau);

        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                console.log("NHAU xong r");
                resolve(tien_sau_nhau);
            }, 1000);
        });

        return Promise.resolve(tien_sau_nhau);
    }

    mat_xa(tien_thua_sau_nhau) {
        let tien_sau_matxa = tien_thua_sau_nhau - 2000;
        console.log('Tien sau matxa : ' + tien_sau_matxa);

        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(tien_sau_matxa), 3000);
        })
    }

    phich_nhau(tien_thua_sau_mx) {
        return Promise.reject('het cmn tien r');
        // let tien_sau_phich = tien_thua_sau_mx - 3000;
        //
        // console.log('Tien sau khi PHICH : ' + tien_sau_phich);
        // return tien_sau_phich;
    }

    ve_nha(tien_thua_sau_phich) {
        console.log('Tien mang ve nha :' + tien_thua_sau_phich);
    }

    mainPromise() {
        this.tra_tien_em_anh_oi()
            .then(tien_ve => this.nhau_an_mung(tien_ve))
            .then(tien_thua_sau_nhau => this.mat_xa(tien_thua_sau_nhau))
            .then(tien_thua_sau_mx => this.phich_nhau(tien_thua_sau_mx))
            .then(tien_thua_sau_phich => this.ve_nha(tien_thua_sau_phich))
            .catch(function(message) {
                console.log(message);
            })
    }

    render() {
        return (
            <div>
                {this.mainPromise()}
                <h2>{this.state.title}</h2>
                <AddFriend addFriend={(i) => this.handleAdd(i)} />
                <ListFriend friends={this.state.friends} />
            </div>
        );
    }
}