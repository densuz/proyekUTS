'use strict';

module.exports = function (app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampilsparepart')
        .get(jsonku.tampildatasparepart);

    app.route('/tampilmontir')
        .get(jsonku.tampildatamontir);

    app.route('/tampilsparepart/:id')
        .get(jsonku.tampildatasparepartid);

    app.route('/tampilmontir/:id')
        .get(jsonku.tampildatamontirid);

    app.route('/tampilservice')
        .get(jsonku.tampilservice);

    app.route('/tambahuser')
        .post(jsonku.tambahuser);

    app.route('/tambahmontir')
        .post(jsonku.tambahmontir);

    app.route('/addsparepart')
        .post(jsonku.addsparepart);

    app.route('/addlevel')
        .post(jsonku.addlevel);

    app.route('/addservice')
        .post(jsonku.addservice);

    // ROUTES UNTUK EDIT
    app.route('/editmontir')
        .put(jsonku.editmontir);

    app.route('/editsparepart')
        .put(jsonku.editsparepart);

    app.route('/edituser')
        .put(jsonku.edituser);

    app.route('/editlevel')
        .put(jsonku.editlevel);

    app.route('/editservice')
        .put(jsonku.editservice);


    //ROUTES UNTUK HAPUS
    app.route('/hapusmontir')
        .delete(jsonku.hapusMontir);

    app.route('/deletesparepart')
        .delete(jsonku.deletesparepart)

    app.route('/deleteuser')
        .delete(jsonku.deleteuser);

    app.route('/deletelevel')
        .delete(jsonku.deletelevel);

    app.route('/deleteservice')
        .delete(jsonku.deleteservice);
}