(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
angular.module('calcApp', [])
    .controller('CalculatorController', function () {
        var calc = this;
        calc.actClasses = ["KNIGHT", "LANCER", "ARCHER", "WIZARD"];
        calc.unitData = [];
        calc.unit = function () {
            this.lv = 1;
            this.atk = 0;
            this.actClass = 0;
            this.attackCnt = 0;
            this.damage = [];
        };
        calc.totalDamage = { min: 0, max: 0, avg: 0 };
        calc.RefreshTotalDamage= function() {
            calc.totalDamage = { min: 0, max: 0, avg: 0 };
            angular.forEach(calc.unitData, function (u) {
                angular.forEach(u.damage, function(d) {
                    angular.forEach(calc.totalDamage, function (o, i) {
                        calc.totalDamage[i] += d[i];
                    });
                });
            });
        }
        var GlobalDefines = {
            BattleCriticalHitRate: [2, 1, 7, 10],
            BattleAttackCountScale: [1.0, 0.6, 0.5, 0.4, 0.4, 0.4, 0.4, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3]
        };
        //calc.damage = [];
        calc.execAttack = function () {
            var combo = 0;
            var pt = calc.enable6ptChecked ? 6 : 4;
            for (var i = 0; i < pt; i++) {
                var charaData = calc.unitData[i];
                if (!charaData) {
                    continue;
                }
                charaData.damage.length = 0;
                var num1 = charaData.atk + 0;   //todo
                var num2 = num1 * 0 + 0;   //todo
                var num3 = 0;   //todo
                var weakAttr = 0;   //todo
                var week = false;   //todo
                var num4 = 0;   //todo
                var num7 = charaData.lv / 800.0 * 100.0;    //magic number
                var totalNumInQuest = 0;   //todo
                var num8 = 0;   //todo
                var num9 = GlobalDefines.BattleCriticalHitRate[charaData.actClass];
                var num10 = num7 + num9 + totalNumInQuest + 0 + num8;   //todo
                var num11 = Math.pow(num1, 0.95) + num2 + 0;   //todo
                var killerNumber = 0;   //todo
                var num12 = 0 + 0 + 0 + 0 + 0;   //todo
                var num13 = 0 + 0;   //todo
                var num14 = num13 * 0.01;
                var num15 = 0;   //todo
                for (var j = 0; j < charaData.attackCnt; j++) {
                    combo++;
                    var num5Group = { min: 1, max: 2, avg: num10 > 100 ? 2 : num10 / 100.0 + 1 };
                    var result = { combo: combo, unit: i, min: 0, max: 0, avg: 0 };
                    angular.forEach(num5Group, function (o, i) {
                        var num5 = num5Group[i];
                        var num6 = (num11 * num5 + killerNumber) + num3 + num4;
                        num6 -= 0;   //todo
                        num6 = num6 < 0 ? 0 : num6;   //todo
                        var num16 = 0;   //todo
                        if (false) {   //todo
                            num16 = 1;
                        } else {
                            var index2 = Math.max(j, 0);
                            index2 = index2 >= 8 ? 8 : index2;    //magic number
                            num16 = GlobalDefines.BattleAttackCountScale[index2] + num14;
                            num16 = num16 > 1.0 ? 1.0 : num16;
                        }
                        var num17 = Math.floor(num6 * num16);
                        switch (i) {
                        case "max":
                            num17 += Math.floor(num1 * 10 * 0.00999999977648258);    //magic number
                            break;
                        case "avg":
                            num17 += Math.floor(num1 * 10 / 2 * 0.00999999977648258);    //magic number
                            break;
                        default:
                            break;
                        }
                        if (false) {
                            //todo
                        }
                        if (false) {
                            //todo
                        }
                        result[i] = num17 * 100 / 100;   //todo
                    });
                    charaData.damage[j] = result;
                }
            }
            calc.RefreshTotalDamage();
        };
        calc.init = function () {
            for (var i = 0; i < 6; i++) {
                calc.unitData.push(new calc.unit());
            }
        };
        calc.init();
    });
},{}]},{},[1]);
