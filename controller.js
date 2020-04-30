'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("Aplikasi Rest API WORKING!", res)
};

//menampilkan data sparepart dan montir
exports.tampildatasparepart = function (req, res) {
    connection.query('SELECT * FROM t_sparepart', function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

exports.tampildatamontir = function (req, res) {
    connection.query('SELECT * FROM t_montir', function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

//menampilkan data sparepart dan montir berdasarkan id
exports.tampildatasparepartid = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM t_sparepart WHERE id_sparepart = ?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};

//menampilkan data sparepart 
exports.tampildatasparepart = function (req, res) {
    connection.query('SELECT * FROM t_sparepart', function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};
//Menampilkan data Montir 
exports.tampildatamontir = function (req, res) {
    connection.query('SELECT * FROM t_montir', function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

//Tampilkan data sparepart berdasarkan id
exports.tampildatasparepartid = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM t_sparepart WHERE id_sparepart = ?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};
//Tampilkan data Montir berdasarkan id
exports.tampildatamontirid = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM t_montir WHERE id_montir = ?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};

//Menampilkan Data Service 
exports.tampilservice = function (req, res) {

    connection.query('SELECT t_user.username, t_service.tgl_service, t_montir.Nama_montir, t_sparepart.nama_sparepart,t_sparepart.harga_sparepart, t_service.jumlah_sparepart, t_service.jam_service, t_montir.harga_perjam, t_service.total_service FROM t_service JOIN t_user JOIN t_sparepart JOIN t_montir WHERE t_service.id_user = t_user.id_user AND t_service.id_sparepart = t_sparepart.id_sparepart AND t_service.id_montir = t_montir.id_montir ORDER BY t_user.id_user ',
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res)
            }
        });
};

//menampilkan data service total
exports.tampildatamontir = function (req, res) {
    connection.query('SELECT * FROM t_montir', function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

//menambahkan data User
exports.tambahuser = function (req, res) {
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    var level = req.body.level;
    var tanggal_daftar = new Date();

    connection.query('INSERT INTO t_user (username, email, password, level, tanggal_daftar) VALUES(?,?,?,?,?)',
        [username, email, password, level, tanggal_daftar],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data ke tabel t_User", res)
            }
        });
};

//menambahkan data service
exports.addservice = function (req, res) {
    var tgl_service = new Date();
    var id_user = req.body.id_user;
    var id_montir = req.body.id_montir;
    var jumlah_sparepart = req.body.jumlah_sparepart;
    var id_sparepart = req.body.id_sparepart;
    var jam_service = req.body.jam_service;
    var total_service = req.body.total_service;

    connection.query('INSERT INTO t_service (tgl_service, id_user, id_montir, jumlah_sparepart, id_sparepart, jam_service, total_service) VALUES(?,?,?,?,?,?,?)',
        [tgl_service, id_user, id_montir, jumlah_sparepart, id_sparepart, jam_service, total_service],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data ke tabel service", res)
            }
        });
};

//Tampilkan Data Service  yang di Join
exports.tampilservice = function (req, res) {

    connection.query('SELECT t_user.username, t_service.tgl_service, t_montir.Nama_montir, t_sparepart.nama_sparepart,t_sparepart.harga_sparepart, t_service.jumlah_sparepart, t_service.jam_service, t_montir.harga_perjam, t_service.total_service FROM t_service JOIN t_user JOIN t_sparepart JOIN t_montir WHERE t_service.id_user = t_user.id_user AND t_service.id_sparepart = t_sparepart.id_sparepart AND t_service.id_montir = t_montir.id_montir ORDER BY t_user.id_user ',
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res)
            }
        });
};

//menambahkan data montir
exports.tambahmontir = function (req, res) {
    var nama_montir = req.body.nama_montir;
    var harga_perjam = req.body.harga_perjam;


    connection.query('INSERT INTO t_montir (nama_montir,harga_perjam) VALUES(?,?)',
        [nama_montir, harga_perjam],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data", res)
            }
        });
};

//menambahkan data Sparepart
exports.addsparepart = function (req, res) {
    var nama_sparepart = req.body.nama_sparepart;
    var harga_sparepart = req.body.harga_sparepart;
    var satuan = req.body.satuan;


    connection.query('INSERT INTO t_sparepart (nama_sparepart,harga_sparepart,satuan) VALUES(?,?,?)',
        [nama_sparepart, harga_sparepart, satuan],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data", res)
            }
        });
};

//menambahkan data level
exports.addlevel = function (req, res) {
    var nama_level = req.body.nama_level;


    connection.query('INSERT INTO t_level (nama_level) VALUES(?)',
        [nama_level],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data ke tabel Level", res)
            }
        });
};

//edit Data montir berdasarkan id
exports.editmontir = function (req, res) {
    var id_montir = req.body.id_montir;
    var nama_montir = req.body.nama_montir;
    var harga_perjam = req.body.harga_perjam;

    connection.query('UPDATE t_montir SET nama_montir=?, harga_perjam=? WHERE id_montir=?', [nama_montir, harga_perjam, id_montir],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Ubah Data", res)
            }
        });
};

//edit data Sparepart
exports.editsparepart = function (req, res) {
    var id_sparepart = req.body.id_sparepart;
    var nama_sparepart = req.body.nama_sparepart;
    var harga_sparepart = req.body.harga_sparepart;
    var satuan = req.body.satuan;


    connection.query('UPDATE t_sparepart SET nama_sparepart=?, harga_sparepart=?, satuan=? WHERE id_sparepart=?',
        [nama_sparepart, harga_sparepart, satuan, id_sparepart],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Mengubah Data di tabel Sparepart", res)
            }
        });
};

//Edit data User
exports.edituser = function (req, res) {
    var id_user = req.body.id_user;
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    var level = req.body.level;
    var tanggal_daftar = new Date();


    connection.query('UPDATE t_user SET username=?, email=?, password=?, level=?, tanggal_daftar=? WHERE id_user=?',
        [username, email, password, level, tanggal_daftar, id_user],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Mengubah Data di tabel user!", res)
            }
        });
};

//Edit data level
exports.editlevel = function (req, res) {
    var id_level = req.body.id_level;
    var nama_level = req.body.nama_level;

    connection.query('UPDATE t_level SET nama_level=? WHERE id_level=?',
        [nama_level, id_level],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Mengubah Data di tabel level", res)
            }
        });
};

//menambahkan data service
exports.editservice = function (req, res) {
    var id_service = req.body.id_service;
    var tgl_service = new Date();
    var id_user = req.body.id_user;
    var id_montir = req.body.id_montir;
    var jumlah_sparepart = req.body.jumlah_sparepart;
    var id_sparepart = req.body.id_sparepart;
    var jam_service = req.body.jam_service;
    var total_service = req.body.total_service;


    connection.query('UPDATE t_service SET tgl_service=?, id_user=?, id_montir=?, jumlah_sparepart=?, id_sparepart=?, jam_service=?, total_service=? WHERE id_service=?',
        [tgl_service, id_user, id_montir, jumlah_sparepart, id_sparepart, jam_service, total_service, id_service],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Mengubah Data di tabel service", res)
            }
        });
};

//Delete data montir 
exports.hapusMontir = function (req, res) {
    var id = req.body.id_montir;

    connection.query('DELETE FROM t_montir WHERE id_montir=?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Hapus Data di tabel t_montir", res)
            }
        });
};

//Delete data Sparepart 
exports.deletesparepart = function (req, res) {
    var id = req.body.id_sparepart;
    connection.query('DELETE FROM t_sparepart WHERE id_sparepart=?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Hapus Data di tabel t_sparepart", res)
            }
        });
};

//Delete data User 
exports.deleteuser = function (req, res) {
    var id = req.body.id_user;
    connection.query('DELETE FROM t_user WHERE id_user=?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Hapus Data di tabel t_user", res)
            }
        });
};

//Delete data Level
exports.deletelevel = function (req, res) {
    var id = req.body.id_level;

    connection.query('DELETE FROM t_level WHERE id_level=?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Hapus Data di tabel t_level", res)
            }
        });
};

//Delete data service
exports.deleteservice = function (req, res) {
    var id = req.body.id_service;

    connection.query('DELETE FROM t_service WHERE id_service=?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Hapus Data di tabel t_service", res)
            }
        });
};