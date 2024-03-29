/*!
 * ------------------------------------------- START OF THIRD PARTY NOTICE -----------------------------------------
 * 
 * This file is based on or incorporates material from the projects listed below (Third Party IP). The original copyright notice and the license under which Microsoft received such Third Party IP, are set forth below. Such licenses and notices are provided for informational purposes only. Microsoft licenses the Third Party IP to you under the licensing terms for the Microsoft product. Microsoft reserves all other rights not expressly granted under this agreement, whether by implication, estoppel or otherwise.
 * 
 *   json2.js (2016-05-01)
 *   https://github.com/douglascrockford/JSON-js
 *   License: Public Domain
 * 
 * Provided for Informational Purposes Only
 * 
 * ----------------------------------------------- END OF THIRD PARTY NOTICE ------------------------------------------
 */
! function (e) {
    function n(n) {
        for (var t, i, o = n[0], r = n[1], s = 0, c = []; s < o.length; s++) i = o[s], Object.prototype.hasOwnProperty.call(a, i) && a[i] && c.push(a[i][0]), a[i] = 0;
        for (t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);
        for (d && d(n); c.length;) c.shift()()
    }
    var t, i = {},
        a = {
            22: 0
        };

    function o(n) {
        if (i[n]) return i[n].exports;
        var t = i[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(t.exports, t, t.exports, o), t.l = !0, t.exports
    }
    Function.prototype.bind || (t = Array.prototype.slice, Function.prototype.bind = function (e) {
            if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
            var n = t.call(arguments, 1),
                i = n.length,
                a = this,
                o = function () {},
                r = function () {
                    return n.length = i, n.push.apply(n, arguments), a.apply(o.prototype.isPrototypeOf(this) ? this : e, n)
                };
            return this.prototype && (o.prototype = this.prototype), r.prototype = new o, r
        }), document.head = document.head || document.getElementsByTagName("head")[0],
        function () {
            function e(n) {
                var t = this,
                    i = 0,
                    a = null,
                    o = [];

                function r() {
                    if (o.length > 0) {
                        var e = o.slice();
                        o = [], setTimeout((function () {
                            for (var n = 0, t = e.length; n < t; ++n) e[n]()
                        }), 0)
                    }
                }

                function s(e) {
                    0 === i && (a = e, i = 1, r())
                }

                function c(e) {
                    0 === i && (a = e, i = 2, r())
                }
                t.then = function (n, t) {
                        return new e((function (s, c) {
                            ! function (n, t, s, c) {
                                o.push((function () {
                                    var o;
                                    try {
                                        o = 1 === i ? "function" == typeof n ? n(a) : a : "function" == typeof t ? t(a) : a
                                    } catch (r) {
                                        return void c(r)
                                    }
                                    o instanceof e ? o.then(s, c) : 2 === i && "function" != typeof t ? c(o) : s(o)
                                })), 0 !== i && r()
                            }(n, t, s, c)
                        }))
                    }, t["catch"] = function (e) {
                        return t.then(null, e)
                    },
                    function () {
                        if ("function" != typeof n) throw new TypeError("Promise: argument is not a Function object");
                        try {
                            n(s, c)
                        } catch (e) {
                            c(e)
                        }
                    }()
            }

            function n(e, n, t, i, a) {
                return function (o) {
                    e[n] = i ? o : a ? {
                        status: "fulfilled",
                        value: o
                    } : {
                        status: "rejected",
                        reason: o
                    }, t()
                }
            }

            function t(t, i) {
                return t && t.length ? new e((function (a, o) {
                    for (var r = [], s = 0, c = 0, d = t.length; c < d; ++c) {
                        var l = t[c];
                        if (l instanceof e) {
                            s++;
                            var u = function () {
                                0 == --s && a(r)
                            };
                            i ? l.then(n(r, c, u, i), o) : l.then(n(r, c, u, i, !0), n(r, c, u, i, !1))
                        } else r[c] = l
                    }
                    0 === s && setTimeout((function () {
                        a(r)
                    }), 0)
                })) : e.resolve([])
            }

            function i(e, n) {
                return function () {
                    e(n)
                }
            }
            e.all = function (e) {
                return t(e, !0)
            }, e.allSettled = function (e) {
                return t(e, !1)
            }, e.race = function (n) {
                return new e((function (t, a) {
                    if (n && n.length)
                        for (var o = 0, r = n.length; o < r; ++o) {
                            var s = n[o];
                            s instanceof e ? s.then(t, a) : setTimeout(i(t, s), 0)
                        }
                }))
            }, e.reject = function (n) {
                return new e((function (e, t) {
                    t(n)
                }))
            }, e.resolve = function (n) {
                return n instanceof e ? n : n && "function" == typeof n.then ? new e((function (e, t) {
                    n.then(e, t)
                })) : new e((function (e) {
                    e(n)
                }))
            }, window.Promise || (window.Promise = e), window.Promise.all || (window.Promise.all = e.all), window.Promise.allSettled || (window.Promise.allSettled = e.allSettled), window.Promise.race || (window.Promise.race = e.race), window.Promise.reject || (window.Promise.reject = e.reject), window.Promise.resolve || (window.Promise.resolve = e.resolve)
        }(), o.e = function (e) {
            var n = [],
                t = a[e];
            if (0 !== t)
                if (t) n.push(t[2]);
                else {
                    var i = new Promise((function (n, i) {
                        t = a[e] = [n, i]
                    }));
                    n.push(t[2] = i);
                    var r = window.ServerData,
                        s = r && r.loader && r.loader.cdnRoots || [],
                        c = r && r.slMaxRetry ? r.slMaxRetry : s.length - 1,
                        d = new Error;
                    var l = function u(n, t) {
                        var i, o = document.createElement("script");
                        o.charset = "utf-8", o.timeout = 120;
                        var r = document.querySelector("script[nonce]");
                        if (r) {
                            var l = r.nonce || r.getAttribute("nonce");
                            o.setAttribute("nonce", l)
                        }
                        o.src = n, i = function (i) {
                            o.onerror = o.onload = null, clearTimeout(p);
                            var r = a[e];
                            if (0 !== r)
                                if (r)
                                    if (c <= 0 || t === c) {
                                        var l = i && ("load" === i.type ? "missing" : i.type),
                                            f = i && i.target && i.target.src;
                                        d.message = "Loading chunk " + e + " failed after " + (c + 1) + " tries.\n(" + l + ": " + f + ")", d.name = "ChunkLoadError", d.type = l, d.request = f, r[1](d), a[e] = undefined
                                    } else {
                                        var g = u(function (e, n) {
                                            if (!n) return e;
                                            for (var t = 0; t < n.length; t++)
                                                if (0 == e.indexOf(n[t])) return n[(t + 1) % n.length] + e.substring(n[t].length);
                                            return e
                                        }(n, s), t + 1);
                                        document.head.appendChild(g)
                                    }
                            else a[e] = undefined
                        };
                        var p = setTimeout((function () {
                            i({
                                type: "timeout",
                                target: o
                            })
                        }), 12e4);
                        return o.onerror = o.onload = i, o
                    }(function (e) {
                        return o.p + "content/js/asyncchunk/convergedlogin_p" + ({
                            0: "aadfedconflict",
                            1: "alt",
                            2: "clienttracing",
                            3: "confirmrecoveryusername",
                            4: "confirmsend",
                            5: "confirmsignup",
                            6: "credentialpicker",
                            7: "customizationloader",
                            8: "estslogin_accesspass",
                            9: "estslogin_remoteloginpoll",
                            10: "estslogin_searchorganization",
                            11: "estslogin_signupusername",
                            12: "estslogin_tenantdisambiguation",
                            13: "fedconflict",
                            14: "fedlink",
                            15: "fetchsessionsprogress",
                            16: "fido",
                            17: "idpdisambiguation",
                            18: "idpredirect",
                            19: "idpredirectspeedbump",
                            20: "learnmore",
                            21: "learnmoreofflineaccount",
                            23: "onetimecode",
                            24: "password",
                            25: "phonedisambiguation",
                            26: "pop",
                            27: "proofconfirmation",
                            28: "prooffedconflict",
                            29: "remoteconnectcanaryvalidation",
                            30: "remoteconnectlocation",
                            31: "remotengc",
                            32: "resetpasswordsplitter",
                            33: "tiles",
                            34: "verticalsplittemplate",
                            35: "viewagreement",
                            36: "webnativebridge"
                        } [e] || e) + "_" + {
                            0: "b5d21186748a95b6e361",
                            1: "21aee7d60e2b22093532",
                            2: "11e58e95027c4d83899d",
                            3: "9c6feb85c7cdf1e0ad67",
                            4: "8fa21d431c5ed4d94b92",
                            5: "f7c152a836193a2722ff",
                            6: "b8c350204f30b9e78a16",
                            7: "c7601e7826dd06a1ff90",
                            8: "6410af74408efcf8b399",
                            9: "a3a85a50cad2232adb9f",
                            10: "999719f5430fe70efd5e",
                            11: "6766ce31a04a2e990c0f",
                            12: "0571bf8b5476fadf7080",
                            13: "bf22a0c42a180458abf1",
                            14: "3fbd28d95d5e934e55ca",
                            15: "d27b3553ec5b3e57cb52",
                            16: "55bd97f7310ca9762574",
                            17: "83988a4f5fc26f85fb43",
                            18: "e1f369ca1a83681c402e",
                            19: "036a37140088a8221299",
                            20: "d85bfc3d76c6df6bd094",
                            21: "d0693fbe1c98c54ae79e",
                            23: "86c77e9688761f84fbb6",
                            24: "e83b0acb5883108a1d11",
                            25: "eba13cafd9adbb35f862",
                            26: "0aa565a80d5f29f7b0b8",
                            27: "52435e3779ca04f6f554",
                            28: "a03fb5f7d8a187b8004d",
                            29: "c8a8c2a7f850cff0d9c5",
                            30: "0fd7226e2a08da6e389c",
                            31: "f4985be13c8b081c9309",
                            32: "f984364aa0eecc2032fd",
                            33: "0ccb53e5ab05c54a13a8",
                            34: "832f7b26ae828d5e8538",
                            35: "b2912328d13e2911b92e",
                            36: "809cdc5592b02fca0fe2"
                        } [e] + ".js"
                    }(e), 0);
                    document.head.appendChild(l)
                } return Promise.all(n)
        }, o.m = e, o.c = i, o.d = function (e, n, t) {
            o.o(e, n) || Object.defineProperty(e, n, {
                enumerable: !0,
                get: t
            })
        }, o.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, o.t = function (e, n) {
            if (1 & n && (e = o(e)), 8 & n) return e;
            if (4 & n && "object" == typeof e && e && e.__esModule) return e;
            var t = Object.create(null);
            if (o.r(t), Object.defineProperty(t, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & n && "string" != typeof e)
                for (var i in e) o.d(t, i, function (n) {
                    return e[n]
                }.bind(null, i));
            return t
        }, o.n = function (e) {
            var n = e && e.__esModule ? function () {
                return e["default"]
            } : function () {
                return e
            };
            return o.d(n, "a", n), n
        }, o.o = function (e, n) {
            return Object.prototype.hasOwnProperty.call(e, n)
        }, o.p = "", o.oe = function (e) {
            throw console.error(e), e
        };
    var r = window.webpackJsonp = window.webpackJsonp || [],
        s = r.push.bind(r);
    r.push = n, r = r.slice();
    for (var c = 0; c < r.length; c++) n(r[c]);
    var d = s;
    o(o.s = 59)
}([function (e, n) {
    n.UsernameMaxLength = 113, n.SATOTPV1Length = 6, n.SATOTPLength = 8, n.PhoneNumberConfirmationLength = 4, n.OneTimeCodeDefaultLength = 16, n.OneTimeCodeMaxLength = 7, n.PCExperienceQS = "pcexp", n.PCExperienceDisabled = n.PCExperienceQS + "=false", n.NotPreferredCredentialQs = "npc", n.AnimationTimeout = 700, n.PageSummaryVersion = 1, n.GuidTemplate = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx", n.Regex = {
        PhoneNumberValidation: /^[0-9 ()[\].\-#*/+]+$/
    }, n.ProofUpRedirectLandingView = {
        AccountCompromised: 1,
        RiskySession: 2
    }, n.LoginMode = {
        None: 0,
        Login: 1,
        ForceCredType: 3,
        LWAConsent: 4,
        GenericError: 5,
        ForceSignin: 6,
        OTS: 7,
        HIP_Login: 8,
        HIP_Lockout: 9,
        InviteBlocked: 10,
        SwitchUser: 11,
        LWADelegation: 12,
        ServiceBlocked: 13,
        IDPFailed: 14,
        StrongAuthOTC: 16,
        StrongAuthMobileOTC: 25,
        Finish: 27,
        LoginWizard_Login: 28,
        StrongAuthWABOTC: 30,
        LoginWizard_HIP_Login: 32,
        LoginWizard_Finish: 34,
        LoginMobile: 36,
        ForceSigninMobile: 37,
        GenericErrorMobile: 38,
        LoginHost: 39,
        ForceSigninHost: 40,
        GenericErrorHost: 42,
        StrongAuthHostOTC: 43,
        HIP_LoginHost: 45,
        HIP_LoginMobile: 46,
        HIP_LockoutHost: 47,
        HIP_LockoutMobile: 48,
        SwitchUserHost: 49,
        LoginXbox_Login: 50,
        HIP_LoginXbox: 51,
        FinishXbox: 52,
        IfExistsXbox: 53,
        StartIfExistsXbox: 54,
        StrongAuthXboxOTC: 55,
        LoginWPWiz_Login: 56,
        LoginWPWiz_HIP_Login: 57,
        LoginWPWiz_Finish: 58,
        StrongAuthWizOTC: 59,
        StrongAuthWPWizOTC: 60,
        FinishWPWiz: 61,
        SwitchUserMobile: 62,
        LoginWPWiz_PhoneSignIn: 63,
        LoginWPWiz_HIP_PhoneSignIn: 64,
        Login_PhoneSignIn: 65,
        Login_HIP_PhoneSignIn: 66,
        LoginHost_PhoneSignIn: 67,
        LoginHost_HIP_PhoneSignIn: 68,
        LoginMobile_PhoneSignIn: 69,
        LoginMobile_HIP_PhoneSignIn: 70,
        LoginWizard_PhoneSignIn: 71,
        LoginWizard_HIP_PhoneSignIn: 72,
        LoginXbox_PhoneSignIn: 73,
        LoginXbox_HIP_PhoneSignIn: 74,
        LoginWin10: 75,
        HIP_LoginWin10: 76,
        FinishWin10: 77,
        FinishBlockedWin10: 78,
        LoginWin10_PhoneSignIn: 79,
        HIP_LoginWin10_PhoneSignIn: 80,
        FinishWin10_TokenBroker: 81,
        SwitchUserWin10: 82,
        ForceSignInXbox: 88,
        LoginClientSDK_Login: 92,
        LoginClientSDK_HIP_Login: 93,
        LoginClientSDK_Finish: 94,
        StrongAuthClientSDKOTC: 95,
        FinishClientSDK: 96,
        LoginClientSDK_PhoneSignIn: 97,
        LoginClientSDK_HIP_PhoneSignIn: 98,
        Win10InclusiveOOBE_Finish: 99,
        Win10InclusiveOOBE_FinishBlocked: 100,
        Tiles: 102,
        RemoteConnect: 103,
        FedConflict: 105,
        Win10Host_Login: 106,
        Win10Host_Login_PhoneSignin: 107,
        Win10Host_Finish: 108,
        Win10Host_StrongAuth: 109,
        Win10Host_HIP_Login: 110,
        Fido: 111,
        Win10Host_HIP_Login_PhoneSignIn: 112,
        FedLink: 113,
        UserCredentialPolicyBlocked: 114,
        BindFailed: 115,
        Win10HostOOBE_HIP_Login: 116,
        Win10HostOOBE_HIP_Login_PhoneSignIn: 117,
        AadFedConflict: 118,
        ProofFedConflict: 119,
        FedBoundLink: 120,
        FetchSessionsProgress: 121,
        Win10Host_TransferLogin: 122,
        TransferLogin: 123,
        Signup: 124,
        CredentialPicker: 129
    }, n.LoginBody = {
        Login_OTC: 5
    }, n.SessionPullFlags = {
        Msa: 1,
        Dsso: 2
    }, n.PaginatedState = {
        Previous: -1,
        Unknown: 0,
        Username: 1,
        Password: 2,
        OneTimeCode: 3,
        RemoteNGC: 4,
        PhoneDisambiguation: 5,
        LwaConsent: 6,
        IdpDisambiguation: 7,
        IdpRedirect: 8,
        ViewAgreement: 10,
        LearnMore: 11,
        Tiles: 12,
        ConfirmSend: 13,
        RemoteConnectCode: 14,
        RemoteLoginPolling: 15,
        BindRedirect: 16,
        TermsOfUse: 17,
        DesktopSsoProgress: 18,
        ResetPasswordSplitter: 19,
        Kmsi: 20,
        CheckPasswordType: 21,
        ChangePassword: 22,
        Fido: 23,
        CredentialPicker: 24,
        Consent: 25,
        Error: 26,
        ConfirmSignup: 27,
        ConfirmRecoverUsername: 28,
        ConfirmConsentSelection: 29,
        FedConflict: 30,
        ProofUpRedirect: 32,
        ProofUpRedirectLanding: 33,
        ConditionalAccessInstallBroker: 34,
        ConditionalAccessWorkplaceJoin: 35,
        ConditionalAccessError: 36,
        CreateFido: 37,
        FedLink: 38,
        FedLinkComplete: 40,
        IdpRedirectSpeedbump: 41,
        TransferLogin: 42,
        Cmsi: 43,
        ProofConfirmation: 44,
        MessagePrompt: 45,
        FinishError: 46,
        Hip: 48,
        LearnMoreOfflineAccount: 49,
        TenantDisambiguation: 50,
        AadFedConflict: 51,
        RemoteConnectCanaryValidation: 52,
        PartnerCanaryValidation: 53,
        ProofFedConflict: 54,
        FetchSessionsProgress: 55,
        AccessPass: 56,
        SignupUsername: 57,
        ReportSuspiciousApp: 58,
        MoreInfo: 59,
        AuthenticatorAddAccountView: 60,
        SignupCredentialPicker: 61,
        LoginError: 62,
        SearchOrganization: 63,
        Ptca: 64,
        GuestConsent: 65,
        RemoteConnectLocation: 66,
        AttributeCollection: 67,
        RdpDevicePrompt: 68,
        GuestConsentConnect: 69,
        SeeHowDataIsManaged: 70,
        SecurityDefaultsUpsell: 71,
        SecurityDefaultsUpsellOptOut: 72,
        SecurityDefaultsUpsellAutoEnabled: 73,
        WebNativeBridge: 74,
        TransferLoginChallengePin: 75,
        RecoveryCredentialPicker: 76,
        OneTimeCodeRecovery: 77,
        PhoneLinkLearnMore: 78,
        PhoneLinkSupport: 79
    }, n.PostType = {
        Password: 11,
        Federation: 13,
        SHA1: 15,
        StrongAuth: 18,
        StrongAuthTOTP: 19,
        LWAConsent: 30,
        PasswordInline: 20,
        RemoteNGC: 21,
        SessionApproval: 22,
        NGC: 23,
        OtcNoPassword: 24,
        RemoteConnect_NativePlatform: 25,
        OTC: 27,
        Kmsi: 28,
        TransferTokenOTC: 31
    }, n.UserProperty = {
        USERNAME: "login",
        ERROR_CODE: "HR",
        ERR_MSG: "ErrorMessage",
        EXT_ERROR: "ExtErr",
        ERR_URL: "ErrUrl",
        DATOKEN: "DAToken",
        DA_SESKEY: "DASessionKey",
        DA_START: "DAStartTime",
        DA_EXPIRE: "DAExpires",
        STS_ILFT: "STSInlineFlowToken",
        SIGNINNAME: "SigninName",
        FIRST_NAME: "LastName",
        LAST_NAME: "FirstName",
        TILE_URL: "TileUrl",
        CID: "CID",
        PUID: "PUID"
    }, n.Error = {
        S_OK: "0",
        InvalidRealmDiscLogin: 10,
        UsernameInvalid: 1e3,
        PasswordEmpty: 1001,
        HIPEmpty: 1002,
        AltEmailInvalid: 1005,
        PhoneInvalid: 1006,
        SAContainsName: 1007,
        OTCEmpty: 1009,
        OTCInvalid: 1010,
        NotEnoughProofs: 1013,
        PhoneEmpty: 1015,
        FedUser: 1016,
        FedUserConflict: 1017,
        FedUserInviteBlocked: 1018,
        EmptyFields: 1020,
        PhoneHasSpecialChars: 1021,
        AutoVerifyNoCodeSent: 1022,
        ProofConfirmationEmpty: 1023,
        ProofConfirmationInvalid: 1024,
        TOTPInvalid: 1025,
        SessionNotApproved: 1026,
        PhoneNumberInvalid: 1027,
        PhoneFormattingInvalid: 1028,
        PollingTimedOut: 1029,
        SendNotificationFailed: 1030,
        Server_MessageOnly: 9999,
        PP_E_DB_MEMBERDOESNOTEXIST: "CFFFFC15",
        PP_E_EXCLUDED: "80041010",
        PP_E_MEMBER_LOCKED: "80041011",
        PP_E_BAD_PASSWORD: "80041012",
        PP_E_MISSING_MEMBERNAME: "80041031",
        PP_E_MISSING_PASSWORD: "80041032",
        PP_E_FEDERATION_INLINELOGIN_DISALLOWED: "800478AC",
        PP_E_PE_RULEFALSE: "8004490C",
        PP_E_MOBILECREDS_PHONENUMBER_BLANK: "80045801",
        PP_E_MOBILECREDS_PHONENUMBER_TOOSHORT: "80045806",
        PP_E_MOBILECREDS_PHONENUMBER_TOOLONG: "80045807",
        PP_E_MOBILECREDS_PHONENUMBER_INVALID: "80045800",
        PP_E_NAME_BLANK: "80041100",
        PP_E_EMAIL_INCOMPLETE: "8004110D",
        PP_E_EMAIL_INVALID: "8004110B",
        PP_E_NAME_TOO_SHORT: "80041101",
        PP_E_NAME_INVALID: "80041103",
        PP_E_INVALIDARG: "80048388",
        PP_E_SA_TOOSHORT: "80041120",
        PP_E_SA_TOOLONG: "80041121",
        PP_E_INVALID_PHONENUMBER: "8004113F",
        PP_E_SECRETQ_CONTAINS_SECRETA: "80041165",
        PP_E_SECRETA_CONTAINS_SECRETQ: "8004117D",
        PP_E_SA_CONTAINS_MEMBERNAME: "8004116A",
        PP_E_STRONGPROCESS_ALTEMAILSAMEASMAILBOX: "80049C2D",
        PP_E_EMAIL_RIGHT_TOO_LONG: "8004110C",
        PP_E_NAME_TOO_LONG: "80041102",
        PP_E_ALIAS_AUTH_NOTPERMITTED: "8004788B",
        PP_E_TOTP_INVALID: "80049C34",
        PP_E_OLD_SKYPE_PASSWORD: "80043557",
        PP_E_OTT_DATA_INVALID: "8004348F",
        PP_E_OTT_ALREADY_CONSUMED: "80043490",
        PP_E_OTT_INVALID_PURPOSE: "80043496",
        PP_E_PPSA_RPT_NOTOADDRESS: "80048120",
        PP_E_STRONGPROCESS_BADDEVICENAME: "80049C22",
        PP_E_INLINELOGIN_INVALID_SMS: "800434E1",
        PP_E_INLINELOGIN_INVALID_ALT: "800434E2",
        PP_E_PREVIOUS_PASSWORD: "80041013",
        PP_E_HIP_VALIDATION_WRONG: "80045505",
        PP_E_HIP_VALIDATION_ERROR_FATAL: "80045537",
        PP_E_HIP_VALIDATION_ERROR_UNAUTHENTICATED: "80045538",
        PP_E_HIP_VALIDATION_ERROR_OTHER: "80045539",
        PP_E_SQ_CONTAINS_PASSWORD: "8004341E",
        PP_E_SA_CONTAINS_PASSWORD: "8004341C",
        PP_E_SA_CONTAINED_IN_PASSWORD: "8004341D",
        PP_E_LIBPHONENUMBERINTEROP_NUMBERPARSE_EXCEPTION: "80043510",
        PP_E_STRONGPROCESS_EMAIL_HAS_MOBILE_DOMAIN: "80049C33",
        PP_E_STRONGPROCESS_MXALIAS_NOTALLOWED: "80049C23",
        PP_E_INVALID_MEMBERNAME: "80041034",
        PP_E_SA_TOO_MANY_CACHE_SESSIONS: "8004A00C",
        PP_E_INTERFACE_DISABLED: "80043448",
        PP_E_ASSOCIATE_DUPLICATE_ACCOUNT: "80043534",
        PP_E_OAUTH_REMOTE_CONNECT_USER_CODE_MISSING_OR_INVALID: "800478C7",
        PP_E_LOGIN_NOPA_USER_PASSWORD_REQUIRED: "800478CE",
        PP_E_IDP_LINKEDIN_BINDING_NOT_ALLOWED: "800478D5",
        PP_E_IDP_GOOGLE_BINDING_NOT_ALLOWED: "800478D6",
        PP_E_IDP_GITHUB_BINDING_NOT_ALLOWED: "800478D7",
        PP_E_IDP_BINDING_EXISTS_SAMSUNG: "8004453E"
    }, n.EstsError = {
        UserAccountSelectionInvalid: "16001",
        UserUnauthorized: "50020",
        UserUnauthorizedApiVersionNotSupported: "500201",
        UserUnauthorizedMsaGuestUsersNotSupported: "500202",
        UserAccountNotFound: "50034",
        UserAccountDeleted: "500341",
        UserAccountNotFoundNotConfiguredForRemoteNgc: "500342",
        UserAccountNotFoundFailedToCreateRemoteSignIn: "500343",
        UserAccountNotFoundForFidoSignIn: "500344",
        IdsLocked: "50053",
        InvalidPasswordLastPasswordUsed: "50054",
        InvalidPasswordExpiredPassword: "50055",
        InvalidPasswordNullPassword: "50056",
        UserDisabled: "50057",
        GuestUserDisabled: "500571",
        FlowTokenExpired: "50089",
        InvalidUserNameOrPassword: "50126",
        InvalidDomainName: "50128",
        ProtectedKeyMisuse: "50141",
        MissingCustomSigningKey: "50146",
        IdpLoopDetected: "50174",
        InvalidOneTimePasscode: "50181",
        ExpiredOneTimePasscode: "50182",
        OneTimePasscodeCacheError: "50183",
        OneTimePasscodeEntryNotExist: "50184",
        InvalidPassword: "50193",
        InvalidOneTimePasscodeOTPNotGiven: "501811",
        InvalidGrantDeviceNotFound: "700003",
        SsoArtifactExpiredDueToConditionalAccess: "70044",
        SsoArtifactExpiredDueToConditionalAccessReAuth: "70046",
        InvalidTenantName: "90002",
        InvalidTenantNameEmptyGuidIdentifier: "900021",
        InvalidTenantNameEmptyIdentifier: "900022",
        InvalidTenantNameFormat: "900023",
        PhoneSignInBlockedByUserCredentialPolicy: "130500",
        AccessPassBlockedByPolicy: "130502",
        InvalidAccessPass: "130503",
        AccessPassExpired: "130504",
        AccessPassAlreadyUsed: "130505",
        PublicIdentifierSasBeginCallRetriableError: "131001",
        PublicIdentifierAuthUserNotAllowedByPolicy: "131010",
        PublicIdentifierSasBeginCallNonRetriableError: "131002",
        PublicIdentifierSasEndCallRetriableError: "131003",
        PublicIdentifierSasEndCallNonRetriableError: "131004",
        DeviceIsDisabled: "135011",
        FidoBlockedByPolicy: "135016",
        BlockedAdalVersion: "220300",
        BlockedClientId: "220400",
        InvalidCredentialDueToMfaClassification: "54009",
        ProofupBlockedDueToMfaClassification: "54010",
        UserVoiceAuthFailedCallWentToVoicemail: "UserVoiceAuthFailedCallWentToVoicemail",
        UserVoiceAuthFailedInvalidPhoneInput: "UserVoiceAuthFailedInvalidPhoneInput",
        UserVoiceAuthFailedPhoneHungUp: "UserVoiceAuthFailedPhoneHungUp",
        UserVoiceAuthFailedInvalidPhoneNumber: "UserVoiceAuthFailedInvalidPhoneNumber",
        UserVoiceAuthFailedInvalidExtension: "UserVoiceAuthFailedInvalidExtension",
        InvalidFormat: "InvalidFormat",
        UserAuthFailedDuplicateRequest: "UserAuthFailedDuplicateRequest",
        UserVoiceAuthFailedPhoneUnreachable: "UserVoiceAuthFailedPhoneUnreachable",
        UserVoiceAuthFailedProviderCouldntSendCall: "UserVoiceAuthFailedProviderCouldntSendCall",
        User2WaySMSAuthFailedProviderCouldntSendSMS: "User2WaySMSAuthFailedProviderCouldntSendSMS",
        SMSAuthFailedProviderCouldntSendSMS: "SMSAuthFailedProviderCouldntSendSMS",
        User2WaySMSAuthFailedNoResponseTimeout: "User2WaySMSAuthFailedNoResponseTimeout",
        SMSAuthFailedNoResponseTimeout: "SMSAuthFailedNoResponseTimeout",
        SMSAuthFailedWrongCodeEntered: "SMSAuthFailedWrongCodeEntered",
        IncorrectOTP: "IncorrectOTP",
        OathCodeIncorrect: "OathCodeIncorrect",
        OathCodeDuplicate: "OathCodeDuplicate",
        OathCodeOld: "OathCodeOld",
        ProofDataNotFound: "ProofDataNotFound",
        OathCodeCorrectButDeviceNotAllowed: "OathCodeCorrectButDeviceNotAllowed",
        OathCodeFailedMaxAllowedRetryReached: "OathCodeFailedMaxAllowedRetryReached",
        InvalidSession: "InvalidSession",
        PhoneAppNoResponse: "PhoneAppNoResponse",
        User2WaySMSAuthFailedWrongCodeEntered: "User2WaySMSAuthFailedWrongCodeEntered",
        PhoneAppInvalidResult: "PhoneAppInvalidResult",
        PhoneAppDenied: "PhoneAppDenied",
        PhoneAppTokenChanged: "PhoneAppTokenChanged",
        SMSAuthFailedMaxAllowedCodeRetryReached: "SMSAuthFailedMaxAllowedCodeRetryReached",
        PhoneAppFraudReported: "PhoneAppFraudReported",
        FraudCodeEntered: "FraudCodeEntered",
        UserIsBlocked: "UserIsBlocked",
        PhoneAppEntropyIncorrect: "PhoneAppEntropyIncorrect",
        VoiceOTPAuthFailedWrongCodeEntered: "VoiceOTPAuthFailedWrongCodeEntered",
        VoiceOTPAuthFailedMaxAllowedCodeRetryReached: "VoiceOTPAuthFailedMaxAllowedCodeRetryReached",
        AccessPassBlockedByPolicyTfa: "AccessPassBlockedByPolicy",
        InvalidAccessPassTfa: "InvalidAccessPass",
        AccessPassExpiredTfa: "AccessPassExpired",
        AccessPassAlreadyUsedTfa: "AccessPassAlreadyUsed",
        AppLockRequiredButNotUsed: "AppLockRequiredButNotUsed",
        IncompatibleAppVersion: "IncompatibleAppVersion",
        FlowTokenExpiredTfa: "FlowTokenExpired",
        ApplicationUsedIsNotAnApprovedAppRequiredByConditionalAccess: "530021",
        BlockedByConditionalAccess: "53003",
        BlockedByConditionalAccessForRemoteDeviceFlow: "530033",
        BrokerAppNotInstalled: "50127",
        BrokerAppNotInstalledDeviceAuthenticationFailed: "501271",
        DeviceIsNotWorkplaceJoined: "50129",
        DeviceIsNotWorkplaceJoinedForMamApp: "501291",
        DeviceNotCompliant: "53000",
        DeviceNotCompliantBrowserNotSupported: "530001",
        DeviceNotCompliantDeviceCompliantRequired: "530002",
        DeviceNotCompliantDeviceManagementRequired: "530003",
        DeviceNotDomainJoined: "53001",
        DeviceNotDomainJoinedBrowserNotSupported: "530011",
        ProofUpBlockedDueToRisk: "53004",
        ProofUpBlockedDueToUserRisk: "53011",
        RemediateCompliantApp: "53009",
        RemediateDeviceStateManagedBrowserRequired: "530081",
        RemediateDeviceStateWorkplaceJoinRequired: "530082",
        AuthenticatorAppRegistrationRequiredInterrupt: "50203",
        UserStrongAuthEnrollmentRequiredInterrupt: "50072",
        UserStrongAuthClientAuthNRequiredInterrupt: "50074",
        RequiredDeviceStateNotSupported: "9001011",
        AdminConsentRequired: "90094",
        AdminConsentRequiredRequestAccess: "90095",
        CertificateValidationBlockedByPolicy: "500186",
        TenantDoesNotSupportNativeCredentialRecovery: "500207",
        UserDoesNotSupportNativeCredentialRecovery: "500208",
        CredentialDoesNotSupportNativeRecovery: "500209"
    }, n.Fido = {
        MaxUserPromptLength: 99,
        FinishStates: {
            Success: 0,
            Cancel: 1,
            Error: 2,
            NotSupported: 3
        },
        UnexpectedErrorCode: 9999,
        EdgeErrorCodes: {
            SyntaxError: 3,
            NotFoundError: 8,
            NotSupportedError: 9,
            InvalidAccessError: 15,
            AbortError: 20
        }
    }, n.IfExistsResult = {
        Unknown: -1,
        Exists: 0,
        NotExist: 1,
        Throttled: 2,
        Error: 4,
        ExistsInOtherMicrosoftIDP: 5,
        ExistsBothIDPs: 6
    }, n.ThrottleStatus = {
        NotThrottled: 0,
        AadThrottled: 1,
        MsaThrottled: 2
    }, n.DomainType = {
        Unknown: 1,
        Consumer: 2,
        Managed: 3,
        Federated: 4,
        CloudFederated: 5
    }, n.CredentialType = {
        None: 0,
        Password: 1,
        RemoteNGC: 2,
        OneTimeCode: 3,
        Federation: 4,
        CloudFederation: 5,
        OtherMicrosoftIdpFederation: 6,
        Fido: 7,
        GitHub: 8,
        PublicIdentifierCode: 9,
        LinkedIn: 10,
        RemoteLogin: 11,
        Google: 12,
        AccessPass: 13,
        Facebook: 14,
        Certificate: 15,
        OfflineAccount: 16,
        NoPreferredCredential: 1e3
    }, n.RemoteNgcType = {
        PushNotification: 1,
        ListSessions: 3
    }, n.SessionPollingType = {
        Image: 1,
        Json: 2
    }, n.AgreementType = {
        Privacy: "privacy",
        Tou: "tou",
        Impressum: "impressum",
        A11yConforme: "a11yConforme"
    }, n.ApiErrorCodes = {
        GeneralError: 6e3,
        AuthFailure: 6001,
        InvalidArgs: 6002,
        Generic: 8e3,
        Timeout: 8001,
        Aborted: 8002
    }, n.DefaultRequestTimeout = 3e4, PROOF = {
        Type: {
            Email: 1,
            AltEmail: 2,
            SMS: 3,
            DeviceId: 4,
            CSS: 5,
            SQSA: 6,
            Certificate: 7,
            HIP: 8,
            Birthday: 9,
            TOTPAuthenticator: 10,
            RecoveryCode: 11,
            StrongTicket: 13,
            TOTPAuthenticatorV2: 14,
            TwoWayVoice: 15,
            TwoWaySMS: 16,
            FidoKey: 17,
            AccessPass: 18,
            TransferToken: 19,
            VerifiableCredentialsHackathon: 20,
            Voice: -3
        }
    }, n.ContentType = {
        Json: "application/json; charset=utf-8",
        FormUrlEncoded: "application/x-www-form-urlencoded"
    }, n.BindProvider = {
        LinkedIn: 0,
        GitHub: 1,
        Google: 2,
        Samsung: 3,
        Facebook: 4
    }, n.PromotedAltCredFlags = {
        None: 0,
        GitHub: 1,
        LinkedIn: 2
    }, n.EnvironmentName = {
        Internal: 1,
        TestSlice: 2,
        FirstSlice: 3
    }, n.AnimationState = {
        Begin: 0,
        End: -1,
        RenderNewView: 1,
        AnimateNewView: 2
    }, n.AnimationName = {
        None: 0,
        SlideOutNext: 1,
        SlideInNext: 2,
        SlideOutBack: 3,
        SlideInBack: 4
    }, n.DialogId = {
        None: 0,
        FidoHelp: 1,
        GitHubHelp: 2,
        ConsentAppInfo: 3
    }, n.KeyCode = {
        Tab: 9,
        Enter: 13,
        Escape: 27,
        Space: 32,
        PageUp: 33,
        PageDown: 34,
        End: 35,
        Home: 36,
        ArrowUp: 38,
        ArrowDown: 40,
        WinKeyLeft: 91,
        F6: 117,
        GamePadB: 196
    }, n.ProofOfPossession = {
        AuthenticatorKey: "cpa",
        CanaryTokenKey: "canary",
        MethodHint: "cpa_method_hint"
    }, n.UpgradeMigrationUXId = {
        Invalid: 0,
        Mojang: 1
    }, n.TransferLoginStringsVariant = {
        Default: 0,
        Mmx: 1,
        MmxPhoneFirst: 2,
        AppNameOnly: 3,
        AppNameAndUsername: 4,
        MmxGe: 5
    }, n.LayoutTemplateType = {
        Lightbox: 0,
        VerticalSplit: 1
    }, n.StringCustomizationPageId = {
        ConditionalAccess: 0,
        AttributeCollection: 1,
        MessagePage: 2,
        ProofUpPage: 3,
        ErrorPage: 4
    }, n.ProofUpRedirectViewType = {
        DefaultProofUpRedirectView: 0,
        AuthAppProofUpRedirectView: 1
    }, n.ConfirmationInputDisplayType = {
        None: 0,
        Retype: 1,
        RetypeWithReveal: 2
    }, n.SecurityDefaultsUpsellAction = {
        None: 0,
        Upsell: 1,
        AutoEnable: 2,
        AutoEnableAfterPrompt: 3,
        ReevaluateLegacy: 4,
        AutoEnabledNotify: 5
    }
}, function (e, n, t) {
    var i = t(25),
        a = t(3),
        o = t(5),
        r = t(9),
        s = a.Object,
        c = a.String,
        d = a.Array,
        l = window,
        u = null,
        p = {},
        f = {},
        g = {},
        m = null,
        b = null,
        v = null,
        h = null,
        _ = null,
        w = null,
        S = null,
        C = null,
        x = !!l.ServerData.bB,
        y = !!l.ServerData.fDetectMultiHighContrastThemes,
        k = null;
    n.HttpCode = {
        Ok: 200,
        NotModified: 304,
        Timeout: 408,
        ClientClosedRequest: 499
    };
    var T = n.Helper = {
            isIEOlderThan: function (e) {
                if (p[e] === undefined) {
                    var n = T.getIEVersion();
                    p[e] = n && n < e + 1
                }
                return p[e]
            },
            isEdge: function () {
                if (null === u) {
                    u = !1;
                    var e = T.getWindowsVersion();
                    if (null !== e && e >= 10) {
                        var n = T.getIEVersion();
                        u = null !== n && n >= 12
                    }
                }
                return u
            },
            isChrome: function () {
                return null === m && (m = navigator.userAgent.toLowerCase().indexOf("chrome") > -1), m
            },
            isFirefoxNewerThan: function (e) {
                if (f[e] === undefined) {
                    var n = T.getFirefoxVersion();
                    f[e] = n && n > e
                }
                return f[e]
            },
            isChromeNewerThan: function (e) {
                if (g[e] === undefined) {
                    var n = T.getChromeVersion();
                    g[e] = n && n > e
                }
                return g[e]
            },
            isIOSSafari: function () {
                if (null === b) {
                    var e = l.navigator.userAgent.toLowerCase();
                    b = /safari/.test(e) && /iphone|ipod|ipad/.test(e) && !l.MSStream
                }
                return b
            },
            isIOSUIWebView: function () {
                if (null === v) {
                    var e = l.navigator.userAgent.toLowerCase();
                    v = !1 === /safari/.test(e) && /iphone|ipod|ipad/.test(e) && !l.MSStream
                }
                return v
            },
            isQtCarBrowser: function () {
                return null === h && (h = navigator.userAgent.toLowerCase().indexOf("qtcarbrowser") > -1), h
            },
            isEdgeClientBrowser: function () {
                return null === _ && (_ = navigator.userAgent.toLowerCase().indexOf("edgeclient/") > -1), _
            },
            isOnTouchStartEventSupported: function () {
                return "ontouchstart" in document.documentElement
            },
            getIEVersion: function () {
                var e = l.navigator.userAgent,
                    n = e.indexOf("MSIE ");
                if (n > 0) return parseInt(e.substring(n + 5, e.indexOf(".", n)), 10);
                if (e.indexOf("Trident/") > 0) {
                    var t = e.indexOf("rv:");
                    return parseInt(e.substring(t + 3, e.indexOf(".", t)), 10)
                }
                var i = e.indexOf("Edge/");
                return i > 0 ? parseInt(e.substring(i + 5, e.indexOf(".", i)), 10) : null
            },
            getFirefoxVersion: function () {
                var e = l.navigator.userAgent.match(/(firefox(?=\/))\/?\s*(\d+)/i);
                return e && 3 === e.length && "firefox" === e[1].toLowerCase() ? parseInt(e[2]) : null
            },
            getChromeVersion: function () {
                var e = l.navigator.userAgent.match(/(chrome(?=\/))\/?\s*(\d+)/i);
                return e && 3 === e.length && "chrome" === e[1].toLowerCase() ? parseInt(e[2]) : null
            },
            getWindowsVersion: function () {
                return null !== new RegExp("Windows NT ([0-9]{1,}[.0-9]{0,})").exec(navigator.userAgent) ? parseFloat(RegExp.$1) : null
            },
            htmlEscape: function (e) {
                if (!e) return "";
                var n = document.createElement("textarea");
                return n.innerText = e, n.innerHTML
            },
            htmlUnescape: function (e) {
                if (!e) return "";
                if (e.match(/<[^<>]+>/)) return e;
                var n = document.createElement("textarea");
                return n.innerHTML = e, n.value
            },
            getStackSize: function (e) {
                var n = 0,
                    t = null == e;
                try {
                    ! function i() {
                        n++, (t || n <= e) && i()
                    }()
                } catch (i) {}
                return n
            },
            getAnimationEndEventName: function () {
                var e = document.createElement("div"),
                    n = {
                        animation: "animationend",
                        OAnimation: "oAnimationEnd",
                        MozAnimation: "animationend",
                        WebkitAnimation: "webkitAnimationEnd"
                    };
                for (var t in n)
                    if (e.style[t] !== undefined) return n[t];
                return ""
            },
            isStackSizeGreaterThan: function (e) {
                return e = e || 0, T.getStackSize(e) > e
            },
            isSvgImgSupported: function () {
                return null === k && (k = document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")), k
            },
            isPlaceholderAttributeAllowed: function (e) {
                return null === S && (S = T.isChromeNewerThan(16) || T.isEdge() || T.isFirefoxNewerThan(14) || e && T.isIOSUIWebView() || T.isIOSSafari() || T.isQtCarBrowser()), S
            },
            isCSSAnimationSupported: function () {
                var e = !1,
                    n = document.createElement("div");
                (e = n.style.animationName !== undefined) || (e = !!d.first(["Webkit", "Moz", "O"], (function (e) {
                    return n.style[e + "AnimationName"] !== undefined
                })));
                return e
            },
            isStyleSupported: function (e) {
                return e in document.documentElement.style
            },
            isCORSSupported: function () {
                return l.XDomainRequest || l.XMLHttpRequest && "withCredentials" in new XMLHttpRequest
            },
            isHistorySupported: function () {
                if (null === C) {
                    if (C = l.history && l.history.pushState && "undefined" != typeof l.history.state && "undefined" != typeof l.onpopstate) try {
                        l.history.replaceState("__history_test", ""), ("__history_test" !== l.history.state || T.isEdgeClientBrowser()) && (C = !1)
                    } catch (e) {
                        C = !1
                    }
                }
                return C
            },
            isFidoSupportedAsync: function (e) {
                return l.navigator.credentials !== undefined && l.navigator.credentials.create !== undefined && l.navigator.credentials.get !== undefined && l.PublicKeyCredential !== undefined && l.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable !== undefined ? l.PublicKeyCredential.isExternalCTAP2SecurityKeySupported ? r.newPromiseWithTimeout(l.PublicKeyCredential.isExternalCTAP2SecurityKeySupported, i.PromiseTimeout, !1) : o.resolve(e) : o.resolve(!1)
            },
            isChangingInputTypeSupported: function () {
                return !T.isIEOlderThan(9)
            },
            isHighContrast: function () {
                if (null === w) {
                    var e = document.createElement("span");
                    e.style.borderLeftColor = "red", e.style.borderRightColor = "blue", e.style.position = "absolute", e.style.top = "-999px", document.body.appendChild(e);
                    var n = T.getComputedStyle(e);
                    w = n.borderLeftColor === n.borderRightColor, document.body.removeChild(e)
                }
                return w
            },
            getHighContrastTheme: function () {
                if (T.isHighContrast()) {
                    var e = document.getElementsByTagName("body")[0],
                        n = T.getComputedStyle(e);
                    if (n.backgroundColor) {
                        var t = n.backgroundColor.toLowerCase().replace(new RegExp(" ", "g"), "");
                        if ("rgb(0,0,0)" === t || "#000000" === t || "#000" === t || y && ("rgb(32,32,32)" === t || "#202020" === t || ("rgb(45,50,54)" === t || "#2d3236" === t))) return "black";
                        if ("rgb(255,255,255)" === t || "#ffffff" === t || "#fff" === t || y && ("rgb(255,250,239)" === t || "#fffaef" === t)) return "white"
                    }
                }
            },
            getComputedStyle: function (e) {
                return document.defaultView && document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(e, null) : e.currentStyle ? e.currentStyle : {}
            },
            history: {
                pushState: function (e, n) {
                    T.isHistorySupported() && l.history.pushState(e, n)
                },
                replaceState: function (e, n) {
                    T.isHistorySupported() && l.history.replaceState(e, n)
                }
            },
            addEventListener: function (e, n, t, i) {
                e.addEventListener ? e.addEventListener(n, t, i) : e.attachEvent && e.attachEvent("on" + n, t)
            },
            removeEventListener: function (e, n, t, i) {
                e.removeEventListener ? e.removeEventListener(n, t, i) : e.detachEvent && e.detachEvent("on" + n, t)
            },
            getEventTarget: function (e) {
                return e ? e.target ? e.target : e.srcElement ? e.srcElement : null : null
            }
        },
        P = n.QueryString = {
            parse: function (e) {
                var n = e,
                    t = null,
                    i = null;
                if (e) {
                    var a = e.indexOf("?"),
                        o = e.indexOf("#"); - 1 !== o && (-1 === a || o < a) ? (n = e.substring(0, o), i = c.doubleSplit(e.substring(o + 1), "&", "=")) : -1 !== a && -1 === o ? (n = e.substring(0, a), t = c.doubleSplit(e.substring(a + 1), "&", "=")) : -1 !== a && -1 !== o && (n = e.substring(0, a), t = c.doubleSplit(e.substring(a + 1, o), "&", "="), i = c.doubleSplit(e.substring(o + 1), "&", "="))
                }
                return {
                    originAndPath: n,
                    query: t,
                    fragment: i
                }
            },
            join: function (e) {
                var n = e.originAndPath || "";
                return e.query && (n += "?" + s.join(e.query, "&", "=")), e.fragment && (n += "#" + s.join(e.fragment, "&", "=")), n
            },
            appendCurrentQueryParameterIfNotExist: function (e) {
                var n = P.parse(window.location.href);
                return s.forEach(n.query, (function (n, t) {
                    e = P.addIfNotExist(e, n, t)
                })), e
            },
            append: function (e, n) {
                var t = P.parse(e),
                    i = c.doubleSplit(n, "&", "=");
                return t.query = t.query || {}, s.forEach(i, (function (e, n) {
                    t.query[e] = n || null
                })), P.join(t)
            },
            addIfNotExist: function (e, n, t) {
                t = t || "";
                var i = P.parse(e);
                return null === s.findOwnProperty(i.query || {}, n, !0) && (i.query = i.query || {}, i.query[n.toLowerCase()] = t), P.join(i)
            },
            add: function (e, n) {
                var t = P.parse(e);
                return e && n && n.length && (t.query = t.query || {}, d.forEach(n, (function (e) {
                    t.query[e[0]] = e[1]
                }))), P.join(t)
            },
            appendOrReplace: function (e, n, t, i) {
                var a = P.parse(e);
                a.query = a.query || {};
                var o = s.findOwnProperty(a.query, n, !0);
                o && delete a.query[o], a.query[n.toLowerCase()] = t;
                var r = P.join(a);
                return i && r.length > i ? e : r
            },
            remove: function (e, n) {
                var t = P.parse(e);
                t.query = t.query || {};
                var i = s.findOwnProperty(t.query, n, !0);
                return i && delete t.query[i], P.join(t)
            },
            extract: function (e, n) {
                n || "" === n || (n = document.location.search);
                var t = P.parse(n);
                t.query = t.query || {};
                var i = s.findOwnProperty(t.query, e, !0);
                return i ? t.query[i] : ""
            },
            appendOrReplaceFromCurrentUrl: function (e, n) {
                var t = P.extract(n);
                return t ? P.appendOrReplace(e, n, t) : e
            },
            stripQueryStringAndFragment: function (e) {
                return P.parse(e).originAndPath
            }
        },
        D = n.Cookies = {
            expireDate: "Thu, 30-Oct-1980 16:00:00 GMT",
            persistTTLDays: 390,
            cookieSafeRegex: /^[\u0021\u0023-\u002B\u002D-\u003A\u003C-\u005B\u005D-\u007E]+$/,
            enabled: function () {
                var e = "G" + (new Date).getTime();
                D.write("CkTst", e);
                var n = !!D.getCookie("CkTst");
                return D.remove("CkTst"), n
            },
            getCookie: function (e) {
                var n = c.doubleSplit(document.cookie, ";", "=", !1, c.trim);
                return n[e] ? n[e] : null
            },
            getObject: function (e) {
                var n = D.getCookie(e) || "";
                return c.doubleSplit(n, "&", "=")
            },
            remove: function (e, n, t) {
                var i = n || document.location.hostname,
                    a = i.split("."),
                    o = a.length,
                    r = a[o - 2] + "." + a[o - 1],
                    s = t || "/",
                    d = "https:" === document.location.protocol,
                    l = d ? ";secure" : "",
                    u = D.getDefaultSameSiteAttribute(d);
                document.cookie = c.format("{0}= ;domain=.{1};path={2};expires={3}{4}{5}", e, r, s, D.expireDate, l, u), document.cookie = c.format("{0}= ;domain=.{1};path={2};expires={3}{4}{5}", e, i, s, D.expireDate, l, u)
            },
            write: function (e, n, t, i, a, o, r, s) {
                var c = o ? "." : "",
                    d = document.domain.split(".");
                a && d.splice(0, Math.max(0, d.length - 2));
                var l = c + d.join(".");
                D.writeWithExpiration(e, n, t, i ? D.getPersistDate() : null, l, r, s)
            },
            writeWithExpiration: function (e, n, t, i, a, o, r) {
                if ("" === n) D.remove(e, a);
                else {
                    "object" == typeof n && (n = s.join(n, "&", "="));
                    var d, l = i ? ";expires=" + i : "",
                        u = a ? ";domain=" + a : "",
                        p = o || "/",
                        f = t ? ";secure" : "";
                    d = r && "none" !== r.toLowerCase() ? ";SameSite=" + r : D.getDefaultSameSiteAttribute(t);
                    var g = c.format("{0}={1}{2};path={3}{4}{5}{6}", e, n, u, p, l, f, d);
                    document.cookie = g
                }
            },
            isCookieSafeValue: function (e) {
                return D.cookieSafeRegex.test(e)
            },
            getDefaultSameSiteAttribute: function (e) {
                return e && x ? ";SameSite=None" : ""
            },
            getPersistDate: function () {
                var e = new Date;
                return e.setDate(e.getDate() + D.persistTTLDays), e.toUTCString()
            }
        }
}, function (e, n, t) {
    var i = window,
        a = i.document.documentMode,
        o = i.navigator;
    ! function () {
        var n = null,
            r = o.userAgent,
            s = null,
            c = r.match(/MSIE ([^ ]+)/);
        if (c && (n = parseInt(c[1])), "function" == typeof i.Symbol && r.match(/AppleWebKit\/601/) && (i.Symbol = null), n && a && n !== a && Object.defineProperty) try {
            Object.defineProperty(o, "userAgent", {
                get: function () {
                    return s
                }
            }), s = r.replace(/MSIE [^ ]+/, "MSIE " + a + ".0"), e.exports = t(18), s = r
        } catch (d) {
            e.exports = t(18)
        } else e.exports = t(18)
    }()
}, function (e, n, t) {
    var i = t(2),
        a = t(12),
        o = t(62),
        r = window,
        s = n.Object = {
            clone: function (e) {
                var n = {};
                return e && (n = a.parse(a.stringify(e))), n
            },
            join: function (e, n, t) {
                var i = "";
                return e && s.forEach(e, (function (e, a) {
                    i && (i += n), i += e + t + (a || "")
                })), i
            },
            forEach: function (e, n) {
                i.utils.objectForEach(e, n)
            },
            findOwnProperty: function (e, n, t) {
                var i;
                for (var a in t && (i = n.toLowerCase()), e)
                    if (e.hasOwnProperty(a) && (a === n || t && a.toLowerCase() === i)) return a;
                return null
            },
            extend: i.utils.extend
        },
        c = n.String = {
            trim: function (e) {
                return e.replace(/^\s+|\s+$/g, "")
            },
            find: function (e, n, t, i) {
                return e ? t ? e.toLowerCase().indexOf(n.toLowerCase(), i) : e.indexOf(n, i) : -1
            },
            format: o.format,
            doubleSplit: function (e, n, t, i, a) {
                var o = {};
                return e && d.forEach(e.split(n), (function (e) {
                    if (e) {
                        var n = e.split(t),
                            r = n[0];
                        a && (r = a(r)), 1 === n.length ? o[r] = null : o[r] = i ? n.slice(1) : n.slice(1).join(t)
                    }
                })), o
            },
            isEmailAddress: function (e) {
                if ((e = c.trim(e)).charAt(0) > "~" || -1 !== e.indexOf(" ")) return !1;
                var n = e.indexOf("@");
                if (-1 === n || -1 === e.indexOf(".", n)) return !1;
                var t = e.split("@");
                if (t.length > 2 || t[0].length < 1 || t[1].length < 2) return !1;
                if (r.ServerData.aZ) {
                    var i = new RegExp(/^[\x21-\x7E]+$/);
                    return !!e.match(i)
                }
                return !0
            },
            isPhoneNumber: function (e) {
                var n = e.replace(/\D+/g, "");
                return n.length >= 4 && n.length <= 50
            },
            isSkypeName: function (e) {
                e = c.trim(e);
                var n = new RegExp(/^[a-zA-Z][a-zA-Z0-9.,\-_:']{0,128}$/);
                return !!e.match(n)
            },
            extractDomain: function (e, n, t) {
                if (!c.isEmailAddress(e)) return e;
                var i = c.trim(e).split("@")[1];
                return e = t ? "@" : "", n ? e + i.slice(0, i.lastIndexOf(".") + 1) : e + i
            },
            extractDomainFromUrl: function (e) {
                if (e) {
                    var n = document.createElement("a");
                    return n.href = e, n.hostname
                }
                return ""
            },
            extractOriginFromUrl: function (e) {
                if (e) {
                    var n = document.createElement("a");
                    n.href = e;
                    var t = n.origin;
                    return t || (t = n.protocol + "//" + n.hostname + (n.port ? ":" + n.port : "")), t
                }
                return ""
            },
            doOriginsMatch: function (e, n) {
                var t = c.extractOriginFromUrl(e);
                return c.extractOriginFromUrl(n) === t
            },
            capFirst: function (e) {
                return e.charAt(0).toUpperCase() + e.slice(1)
            },
            cleanseUsername: function (e, n) {
                if (!e) return "";
                if (e = c.trim(e).toLowerCase(), !c.isEmailAddress(e) && !c.isSkypeName(e) && c.isPhoneNumber(e)) {
                    var t = "";
                    return n && "+" === e.charAt(0) && (t = "+"), t + e.replace(/\D+/g, "")
                }
                return e
            },
            maskString: function (e, n) {
                if (!e) return "";
                if (e.length <= 2 * n) return e;
                var t = e.length - 2 * n,
                    i = Array(t + 1).join("*");
                return e.substring(0, n) + i + e.substring(n + t)
            }
        },
        d = n.Array = {
            first: i.utils.arrayFirst,
            forEach: i.utils.arrayForEach,
            map: i.utils.arrayMap,
            removeItem: i.utils.arrayRemoveItem,
            arrayFilter: i.utils.arrayFilter,
            findIndex: function (e, n) {
                if (e && "object" == typeof e && e.length)
                    for (var t = 0; t < e.length; t++)
                        if (n(e[t])) return t;
                return -1
            }
        };
    n.DateTime = {
        getCurrentTime: function () {
            return (new Date).getTime()
        },
        getUTCString: function () {
            return Date.prototype.toISOString ? (new Date).toISOString() : (new Date).toUTCString()
        }
    }, n.ErrorData = function (e, n) {
        var t = this;
        t.errorText = e, t.remediationText = n, t.toString = function () {
            return t.errorText
        }
    }
}, function (e, n, t) {
    var i = t(2);
    n.create = function (e) {
        var n, t = !1;

        function a() {
            return t = !0, a.eventArgs(Array.prototype.slice.call(arguments)), n
        }
        return a.eventArgs = i.observable().extend({
            notify: "always"
        }), a.tracingOptions = e, a.subscribe = function (e) {
            a.eventArgs.subscribe((function (t) {
                n = e(t)
            })), t && (n = e(a.eventArgs.peek()))
        }, a
    }, n.isComponentEvent = function (e) {
        return e && i.isObservable(e.eventArgs)
    }
}, function (e, n, t) {
    var i = window;
    e.exports = i.Promise
}, function (e, n) {
    n.Tokens = {
        Username: "#~#MemberName_LS#~#"
    }, n.Fed = {
        DomainToken: "#~#partnerdomain#~#",
        FedDomain: "#~#FederatedDomainName_LS#~#",
        Partner: "#~#FederatedPartnerName_LS#~#"
    }, n.LoginOption = {
        DoNotRemember: 0,
        RememberPWD: 1,
        NothingChecked: 3
    }, n.StringsVariantId = {
        Default: 0,
        SkypeMoveAlias: 1,
        CombinedSigninSignup: 2,
        CombinedSigninSignupDefaultTitle: 3,
        RemoteConnectLogin: 4,
        CombinedSigninSignupV2: 5,
        CombinedSigninSignupV2WelcomeTitle: 6
    }, n.AllowedIdentitiesType = {
        MsaOnly: 0,
        AadOnly: 1,
        Both: 2
    }, n.SessionIdp = {
        Aad: 0,
        Msa: 1
    }, n.ClientTracingEventIds = {
        Event_LoginPaginatedUsernameView_onLoad: 11e4,
        Event_LoginPaginatedPasswordView_onLoad: 110001,
        ComponentEvent_LoginPaginatedUsernameView_onShowDialog: 12e4,
        ComponentEvent_LoginPaginatedUsernameView_onAgreementClick: 120001,
        ComponentEvent_LoginPaginatedPasswordView_onResetPassword: 120100,
        PropertyValue_LoginPaginatedPageView_IsFidoSupported: 14e4,
        PropertyValue_LoginPaginatedUsernameView_Username: 140100,
        PropertyValue_LoginPaginatedUsernameView_ClientError: 140101,
        PropertyValue_LoginPaginatedPasswordView_Password: 140200,
        PropertyValue_LoginPaginatedPasswordView_ClientError: 140201,
        PropertyValue_LoginPaginatedPasswordView_KMSI: 140202
    }
}, function (e, n) {
    n.EventIds = {
        Unknown: 0,
        Event_PaginationControl_ViewSwitch: 1e4,
        Api_GetOneTimeCode: 2e4,
        Api_GetOneTimeToken: 20001,
        Api_CanaryValidation: 20002,
        Api_GetCustomCss: 20003,
        Api_GetCredentialType: 20004,
        Api_CheckSessionState: 20005,
        Api_GetIwaSsoToken: 20006,
        Api_OtcAuthentication: 20007,
        Api_DeviceAuthentication: 20008,
        Api_BeginOtcAuthentication: 20009,
        Api_ConfirmOneTimeCode: 20010,
        Api_BeginSessionApproval: 20011,
        Api_EndSessionApproval: 20012,
        Api_Forget: 20013,
        Api_GetRecoveryCredentialType: 20014,
        Redirect_Unknown: 4e4,
        Redirect_MSASignUpPage: 40001,
        Redirect_AADSignUpPage: 40002,
        Redirect_SkipZeroTouch: 40003,
        Redirect_ResetPasswordPage: 40004,
        Redirect_MSAUserRecoveryPage: 40005,
        Redirect_OtherIdpRedirection: 40006,
        Redriect_SwitchUser: 40007
    }, n.EventLevel = {
        None: 0,
        Critical: 1,
        Info: 2,
        ApiRequest: 4,
        CXH: 8,
        Debug: 16,
        Verbose: 32,
        All: 65535
    }, n.HidingMode = {
        None: 0,
        Hide: 1,
        Mask: 2
    }, n.DataPointScope = {
        ClientEvent: 1,
        Global: 2
    }, n.EventStage = {
        None: 0,
        Begin: 1,
        End: 2
    }
}, function (e, n, t) {
    var i = t(2),
        a = t(1),
        o = window,
        r = a.Helper;

    function s(e, n, t) {
        var i = this,
            a = e.hasDarkBackground;
        i.isHighContrastBlackTheme = !1, i.isHighContrastWhiteTheme = !1, i.hasDarkBackground = a, i.lightImageNode = n, i.darkImageNode = t,
            function () {
                if (r.isHighContrast()) {
                    var e = r.getHighContrastTheme();
                    i.isHighContrastBlackTheme = "black" === e, i.isHighContrastWhiteTheme = "white" === e
                }
            }()
    }
    i.components.register("accessible-image-control", {
        viewModel: {
            createViewModel: function (e, n) {
                var t = i.utils.arrayFilter(n.templateNodes, (function (e) {
                    return 1 === e.nodeType
                }));
                return new s(e, t[0], t[1])
            }
        },
        template: t(316),
        synchronous: !o.ServerData.A || a.Helper.isStackSizeGreaterThan(o.ServerData.A)
    }), e.exports = s
}, function (e, n, t) {
    var i = t(5);
    n.throwUnhandledExceptionOnRejection = function (e) {
        e["catch"]((function (e) {
            var n = e;
            e instanceof Error || (n = new Error("Unhandled Promise rejection: " + e)), setTimeout((function () {
                throw n
            }), 0)
        }))
    }, n.newPromiseWithTimeout = function (e, n, t) {
        return new i((function (a, o) {
            i.resolve(e()).then(a, o), setTimeout((function () {
                a(t)
            }), n)
        }))
    }
}, function (e, n, t) {
    var i = t(7),
        a = t(23),
        o = t(3),
        r = t(5);

    function s(e) {
        var n, s = this,
            c = o.DateTime.getCurrentTime(),
            d = e && e.a4 && e.AL,
            l = null;

        function u(e) {
            return function () {
                if (l) return l[e].apply(l, arguments)
            }
        }
        s.createLoadClientTracingPromise = function () {
            return new r((function (n) {
                d && !l ? t.e(2).then(function () {
                    var i = t(451).getInstance(e, c);
                    l || (l = i), n()
                }.bind(null, t))["catch"](t.oe) : n()
            }))
        }, s.logRedirection = function (e, n) {
            var t = e,
                i = null;
            return e && "string" != typeof e ? (t = e.url, i = e.eventOptions, n = e.traceParameters ? n : null, e.traceUrl && (n ? n.url = t : n = t)) : n = null, i && i.eventId && s.logEvent({
                eventType: "onRedirect",
                eventId: i.eventId,
                eventLevel: i.eventLevel,
                eventArgs: n,
                eventOptions: i
            }), t
        }, s.getPropertyLogOption = function (e, n) {
            return (n = n || {}).hasOwnProperty("tracingPropertyChange") || (n.tracingPropertyChange = !0), n.eventLevel = n.eventLevel || i.EventLevel.Info, {
                viewModel: e,
                tracingOptions: n
            }
        }, s.getDefaultTextBoxPropertyLogOption = function (e, n) {
            return (n = n || {}).hasOwnProperty("hidingMode") || (n.hidingMode = i.HidingMode.None), n.rateLimit = {
                method: "notifyWhenChangesStop"
            }, s.getPropertyLogOption(e, n)
        }, s.getPIITextBoxPropertyLogOption = function (e, n) {
            return (n = n || {}).hidingMode = i.HidingMode.Mask, s.getDefaultTextBoxPropertyLogOption(e, n)
        }, s.getPasswordTextBoxPropertyLogOption = function (e, n) {
            return (n = n || {}).hidingMode = i.HidingMode.Hide, s.getDefaultTextBoxPropertyLogOption(e, n)
        }, s.getDefaultEventTracingOptions = function (e, n, t) {
            return {
                eventId: e,
                eventLevel: t || i.EventLevel.Info,
                hidingMode: n ? i.HidingMode.None : i.HidingMode.Hide
            }
        }, s.attachViewLoadClientTracingOptions = (n = "attachViewLoadClientTracingOptions", function () {
            if (a) return a[n].apply(a, arguments)
        }), s.logEvent = u("logEvent"), s.logUserInteractionEvent = u("logUserInteractionEvent"), s.traceBeginRequest = u("traceBeginRequest"), s.traceEndRequest = function (e, n, t, i, a) {
            l ? l.traceEndRequest(e, n, t, i, a) : a && a()
        }, s.setPageViewModel = u("setPageViewModel"), s.logComponentEvent = u("logComponentEvent"), s.logViewState = u("logViewState"), s.setViewViewModel = u("setViewViewModel"), s.switchView = u("switchView"), s.postEvent = u("postEvent")
    }
    var c = null;
    n.getInstance = function (e) {
        return c = c || new s(e)
    }
}, function (e, n, t) {
    var i = t(12),
        a = t(21),
        o = t(0),
        r = t(3),
        s = t(1),
        c = t(10).getInstance(window.ServerData),
        d = t(7),
        l = window,
        u = l.$Config || l.ServerData || {},
        p = r.Object,
        f = s.QueryString;
    e.exports = function (e) {
        var n = this,
            t = !1 !== (e = e || {}).checkApiCanary,
            r = e.withCredentials || !1,
            s = e.breakCache || !1,
            l = e.responseType || "",
            g = e.notifyOnClientAbort || !1;

        function m(e) {
            var n = {
                hpgid: u.hpgid || 0,
                hpgact: u.hpgact || 0
            };
            return e || (n.Accept = "application/json", t && u.apiCanary && (n.canary = u.apiCanary)), u.correlationId && (n["client-request-id"] = u.correlationId), u.sessionId && (n.hpgrequestid = u.sessionId), n
        }

        function b(e) {
            var n = e;
            if (e && "string" != typeof e) {
                var t = {};
                p.forEach(e, (function (e, n) {
                    "unsafe_" === e.substr(0, 7) && (e = e.substr(7)), t[e] = n
                })), n = i.stringify(t)
            }
            return n && (n = n.replace(/\?/g, "\\u003F")), n
        }

        function v(e) {
            e.headers = m(), e.withCredentials = r, e.breakCache = s, e.responseType = l
        }

        function h(e, n, t, i, a, o) {
            var r = null;
            if (n) {
                var s = n.eventOptions || {};
                if (s.eventId = n.eventId || s.eventId, s.hasOwnProperty("hidingMode") || (s.hidingMode = d.HidingMode.None), s.eventId) {
                    (r = {}).eventType = t, r.eventId = s.eventId, r.eventLevel = s.eventLevel || d.EventLevel.ApiRequest;
                    var l = {};
                    l.requestTimeout = i, a && (l.contentType = a), l.requestType = t, o && (l.noCallback = !0), r.eventArgs = l, r.eventOptions = s, c.traceBeginRequest(e, r)
                }
            }
            e.eventData = r
        }

        function _(e, n, t, i, a) {
            c.traceEndRequest(e, n, t, i, a)
        }

        function w(e, n) {
            var t = {};
            return e && (t.xhr_status = e.status), t.textStatus = n, t
        }
        n.Errors = [], n.Json = function (e, a, r, s, c) {
            var d = !(!r && !s),
                l = (new Date).getTime(),
                p = e.url;

            function f(e) {
                var t, a = (e = e || {}).error || null,
                    o = {
                        startTime: l,
                        endTime: (new Date).getTime()
                    };
                if (e.apiCanary && (u.apiCanary = e.apiCanary, delete e.apiCanary), a) {
                    t = (t = a.stackTrace) && t.encodeJson ? t.encodeJson() : "";
                    var c = i.stringify({
                        code: a.code,
                        message: a.message,
                        debug: a.debugMessage,
                        stacktrace: t,
                        requestUrl: p
                    });
                    n.Errors.push(c), n.Errors.length > 100 && n.Errors.shift(), (8002 !== a.code || g) && s && s(e, o)
                } else r && r(e, o)
            }
            if (t && !u.apiCanary) return setTimeout((function () {
                f({
                    error: {
                        code: 8002,
                        message: "Request Failed!",
                        isFatal: !0
                    }
                })
            }), 0), null;
            var m = b(a);
            n.Post(e, o.ContentType.Json, m, (function (e, n) {
                d && f(i.parse(n))
            }), (function (e, n, t, a) {
                d && f(function (e, n) {
                    var t = {};
                    if (500 === e.status) try {
                        t = i.parse(e.responseText) || {}
                    } catch (s) {}
                    if (!t.error) {
                        var a = !1,
                            o = 8e3,
                            r = "Request Failed -- No Response from Server";
                        switch (n) {
                            case "timeout":
                                o = 8001, r = "Timeout Error", a = !0;
                                break;
                            case "abort":
                                o = 8002, r = "Aborted";
                                break;
                            case "error":
                                e.status >= 400 && (a = !0);
                                break;
                            case "parsererror":
                                r = "Unable to parse response", a = !0
                        }
                        t.error = {
                            code: o,
                            message: r,
                            debugMessage: "(xhr status " + e.status + ") xhr.responseText: " + e.responseText,
                            stackTrace: "",
                            isFatal: a
                        }
                    }
                    return t
                }(n, t))
            }), c)
        }, n.Post = function (e, t, i, o, r, s) {
            var c = e.url,
                d = {},
                l = !1;
            o || r || (l = !0), h(d, e, a.RequestType.Post, s, t, l);
            var u = {
                targetUrl: c,
                contentType: t,
                data: i,
                requestType: a.RequestType.Post,
                timeout: s || 3e4,
                successCallback: function (e, n) {
                    _(d, "Success", n, !0, (function () {
                        o && o(e, n)
                    }))
                },
                failureCallback: function (e, n, t) {
                    _(d, "Failed", w(n, t), !1, (function () {
                        r && r(e, n, t)
                    }))
                },
                timeoutCallback: function (e, n, t) {
                    _(d, "Timeout", w(n, t), !1, (function () {
                        r && r(e, n, t)
                    }))
                }
            };
            v(u), a.Handler.call(n, u), n.sendRequest()
        }, n.Get = function (e, t, i, o, r) {
            var s = e.url,
                c = {},
                d = !1;
            i || o || (d = !0), h(c, e, a.RequestType.Get, r, t, d);
            var l = {
                targetUrl: s,
                contentType: t,
                requestType: a.RequestType.Get,
                timeout: r || 3e4,
                successCallback: function (e, n) {
                    _(c, "Success", n, !0, (function () {
                        i && i(e, n)
                    }))
                },
                failureCallback: function (e, n, t) {
                    _(c, "Failed", w(n, t), !1, (function () {
                        o && o(e, n, t)
                    }))
                },
                timeoutCallback: function (e, n, t) {
                    _(c, "Timeout", w(n, t), !1, (function () {
                        o && o(e, n, t)
                    }))
                }
            };
            v(l), a.Handler.call(n, l), n.sendRequest()
        }, n.Beacon = function (e, t, i, a, o) {
            var r = [],
                s = m(!0);
            p.forEach(s, (function (e, n) {
                r.push([e, n])
            }));
            var c = e.url;
            if (c = f.add(c, r), e.url = c, navigator.sendBeacon) {
                var d = {};
                h(d, e, "Beacon", o, null, !1);
                var l = b(t),
                    u = navigator.sendBeacon(c, l);
                _(d, u ? "Success" : "Failed", null, u, (function () {
                    u && i ? i() : !u && a && a()
                }))
            } else n.Json(e, t, i, a, o)
        }
    }
}, function (module, exports) {
    var JSON;
    JSON || (JSON = {}),
        function () {
            "use strict";
            var global = Function("return this")(),
                JSON = global.JSON;

            function f(e) {
                return e < 10 ? "0" + e : e
            }
            JSON || (JSON = {}), "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function (e) {
                return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
            }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (e) {
                return this.valueOf()
            });
            var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                gap, indent, meta = {
                    "\b": "\\b",
                    "\t": "\\t",
                    "\n": "\\n",
                    "\f": "\\f",
                    "\r": "\\r",
                    '"': '\\"',
                    "\\": "\\\\"
                },
                rep;

            function quote(e) {
                return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, (function (e) {
                    var n = meta[e];
                    return "string" == typeof n ? n : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                })) + '"' : '"' + e + '"'
            }

            function str(e, n) {
                var t, i, a, o, r, s = gap,
                    c = n[e];
                switch (c && "object" == typeof c && "function" == typeof c.toJSON && (c = c.toJSON(e)), "function" == typeof rep && (c = rep.call(n, e, c)), typeof c) {
                    case "string":
                        return quote(c);
                    case "number":
                        return isFinite(c) ? String(c) : "null";
                    case "boolean":
                    case "null":
                        return String(c);
                    case "object":
                        if (!c) return "null";
                        if (gap += indent, r = [], "[object Array]" === Object.prototype.toString.apply(c)) {
                            for (o = c.length, t = 0; t < o; t += 1) r[t] = str(t, c) || "null";
                            return a = 0 === r.length ? "[]" : gap ? "[\n" + gap + r.join(",\n" + gap) + "\n" + s + "]" : "[" + r.join(",") + "]", gap = s, a
                        }
                        if (rep && "object" == typeof rep)
                            for (o = rep.length, t = 0; t < o; t += 1) "string" == typeof rep[t] && (a = str(i = rep[t], c)) && r.push(quote(i) + (gap ? ": " : ":") + a);
                        else
                            for (i in c) Object.prototype.hasOwnProperty.call(c, i) && (a = str(i, c)) && r.push(quote(i) + (gap ? ": " : ":") + a);
                        return a = 0 === r.length ? "{}" : gap ? "{\n" + gap + r.join(",\n" + gap) + "\n" + s + "}" : "{" + r.join(",") + "}", gap = s, a
                }
            }
            "function" != typeof JSON.stringify && (JSON.stringify = function (e, n, t) {
                var i;
                if (gap = "", indent = "", "number" == typeof t)
                    for (i = 0; i < t; i += 1) indent += " ";
                else "string" == typeof t && (indent = t);
                if (rep = n, n && "function" != typeof n && ("object" != typeof n || "number" != typeof n.length)) throw new Error("JSON.stringify");
                return str("", {
                    "": e
                })
            }), "function" != typeof JSON.parse && (JSON.parse = function (text, reviver) {
                var j;

                function walk(e, n) {
                    var t, i, a = e[n];
                    if (a && "object" == typeof a)
                        for (t in a) Object.prototype.hasOwnProperty.call(a, t) && ((i = walk(a, t)) !== undefined ? a[t] = i : delete a[t]);
                    return reviver.call(e, n, a)
                }
                if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, (function (e) {
                        return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                    }))), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                    "": j
                }, "") : j;
                throw new SyntaxError("JSON.parse")
            }), global.JSON = JSON, module.exports = JSON
        }()
}, function (e, n, t) {
    var i = t(2),
        a = t(1),
        o = t(4);
    var r = window;

    function s(e) {
        var n = this,
            t = ((e = e || {}).serverData, e.primaryButtonId),
            r = e.secondaryButtonId,
            s = e.primaryButtonText,
            c = e.secondaryButtonText,
            d = !1 !== e.isPrimaryButtonVisible,
            l = !1 !== e.isSecondaryButtonVisible,
            u = !1 !== e.isPrimaryButtonEnabled,
            p = !1 !== e.isSecondaryButtonEnabled,
            f = e.focusOnPrimaryButton || !1,
            g = e.focusOnSecondaryButton || !1,
            m = e.primaryButtonDescribedBy,
            b = e.secondaryButtonDescribedBy,
            v = e.primaryButtonCss,
            h = e.secondaryButtonCss,
            _ = e.primaryButtonType || "submit",
            w = e.removeBottomMargin,
            S = e.primaryButtonPreventTabbing || {
                direction: "none"
            };
        n.primaryButtonId = t, n.secondaryButtonId = r, n.primaryButtonCss = v, n.secondaryButtonCss = h, n.primaryButtonText = i.observable(s), n.secondaryButtonText = i.observable(c), n.isPrimaryButtonVisible = i.observable(d), n.isSecondaryButtonVisible = i.observable(l), n.isPrimaryButtonEnabled = i.observable(u), n.isSecondaryButtonEnabled = i.observable(p), n.focusOnPrimaryButton = i.observable(f), n.focusOnSecondaryButton = i.observable(g), n.hasOneButtonVisible = i.pureComputed((function () {
            var e = 0;
            return n.isPrimaryButtonVisible() && e++, n.isSecondaryButtonVisible() && e++, 1 === e
        })), n.primaryButtonDescribedBy = m, n.secondaryButtonDescribedBy = b, n.removeBottomMargin = w, n.primaryButtonPreventTabbing = S, n.primaryButtonAttributes = i.pureComputed((function () {
            var e = {
                id: n.primaryButtonId || "idSIButton9",
                "aria-describedby": n.primaryButtonDescribedBy
            };
            return a.Helper.isChangingInputTypeSupported() && (e.type = _), e
        })), n.onPrimaryButtonClick = o.create(), n.onSecondaryButtonClick = o.create(), n.setTextPrimaryButton = function (e) {
            n.primaryButtonText(e)
        }, n.setTextSecondaryButton = function (e) {
            n.secondaryButtonText(e)
        }, n.setVisibilityPrimaryButton = function (e) {
            n.isPrimaryButtonVisible(e)
        }, n.setVisibilitySecondaryButton = function (e) {
            n.isSecondaryButtonVisible(e)
        }, n.setEnabledPrimaryButton = function (e) {
            n.isPrimaryButtonEnabled(e)
        }, n.setEnabledSecondaryButton = function (e) {
            n.isSecondaryButtonEnabled(e)
        }, n.primaryButton_onClick = function () {
            n.onPrimaryButtonClick()
        }, n.secondaryButton_onClick = function () {
            n.onSecondaryButtonClick()
        }
    }
    i.components.register("footer-buttons-field", {
        viewModel: s,
        template: t(323),
        synchronous: !r.ServerData.A || a.Helper.isStackSizeGreaterThan(r.ServerData.A),
        enableExtensions: !0
    }), e.exports = s
}, function (e, n, t) {
    var i = t(2),
        a = t(3),
        o = t(1),
        r = t(0),
        s = t(9),
        c = t(66),
        d = t(74),
        l = t(219),
        u = window,
        p = o.Helper,
        f = a.String,
        g = r.LayoutTemplateType,
        m = {
            loadTenantBranding: function (e) {
                var n = {};
                if (e) {
                    var t = e[0] || {},
                        a = e[1] || {};
                    i.utils.arrayForEach(["BoilerPlateText", "UserIdLabel", "TileLogo", "TileDarkLogo", "BannerLogo", "BackgroundColor", "Illustration", "KeepMeSignedInDisabled", "UseTransparentLightBox", "LayoutTemplateConfig", "CustomizationFiles", "AccessRecoveryLink", "CantAccessYourAccountText", "ForgotPasswordText", "FooterTOULink", "FooterTOUText", "FooterPrivacyLink", "FooterPrivacyText", "Favicon"], (function (e) {
                        n[e] = a[e] || t[e] || ""
                    })), n.TileDarkLogo || (n.TileDarkLogo = n.TileLogo)
                }
                return n
            },
            getPageBranding: function (e, n, t) {
                var i = {
                    useDefaultBackground: !1
                };
                if (e && (i.bannerLogoUrl = e.BannerLogo), e && (e.BackgroundColor || e.Illustration)) i.color = e.BackgroundColor, i.backgroundImageUrl = e.Illustration, i.useTransparentLightBox = e.UseTransparentLightBox, i.useImageMask = !0;
                else if (n && (n.backgroundImageIndex >= 0 || n.backgroundLogoIndex >= 0 || n.backgroundColor || n.friendlyAppName)) n.backgroundImageIndex >= 0 && (i.backgroundImageUrl = d(f.format("./{0}.jpg", n.backgroundImageIndex)), p.isStyleSupported("backgroundSize") && (i.smallImageUrl = d(f.format("./{0}-small.jpg", n.backgroundImageIndex)))), n.backgroundLogoIndex >= 0 && (i.backgroundLogoUrl = l(f.format("./{0}.png", n.backgroundLogoIndex))), i.color = n.backgroundColor, i.friendlyAppName = n.friendlyAppName;
                else if (n && n.urlLegacyBackgroundLogo) i.backgroundLogoUrl = n.urlLegacyBackgroundLogo;
                else if (t >= 0) {
                    var a = p.isSvgImgSupported();
                    i.backgroundImageUrl = c(f.format("./{0}.{1}", t, a ? "svg" : "jpg")), !a && p.isStyleSupported("backgroundSize") && (i.smallImageUrl = c(f.format("./{0}-small.jpg", t))), i.useDefaultBackground = !0
                }
                return i
            },
            getMergedBranding: function (e, n, t) {
                var i;
                if (t) i = n;
                else if (i = e, n && (n.BannerLogo && (i.BannerLogo = n.BannerLogo), n.BoilerPlateText && (i.BoilerPlateText = n.BoilerPlateText), n.KeepMeSignedInDisabled && (i.KeepMeSignedInDisabled = n.KeepMeSignedInDisabled), n.CustomizationFiles)) {
                    var a = {
                        strings: n.CustomizationFiles.strings,
                        customCssUrl: n.CustomizationFiles.customCssUrl
                    };
                    i.CustomizationFiles && i.CustomizationFiles.customCssUrl && (a.customCssUrl = i.CustomizationFiles.customCssUrl), n.CustomizationFiles.customCssUrl !== a.customCssUrl && (a.customCssUrl = null), i.CustomizationFiles = a
                }
                return i
            },
            getLayoutTemplateConfig: function (e) {
                var n = e.LayoutTemplateConfig;
                return n && n !== {} ? n : {
                    showHeader: !1,
                    headerLogo: "",
                    layoutType: g.Lightbox,
                    hideCantAccessYourAccount: !u.ServerData.showCantAccessAccountLink,
                    hideForgotMyPassword: !1,
                    hideResetItNow: !1,
                    showFooter: !0,
                    hideTOU: !1,
                    hidePrivacy: !1,
                    hideAccountResetCredentials: !1
                }
            },
            createMergedBrandingObservables: function (e) {
                e.masterPageMethods = i.observable(), e.isVerticalSplitTemplate = i.observable(), e.showHeader = i.observable(!1), e.headerLogo = i.observable(), e.showFooter = i.observable(!0), e.hideTOU = i.observable(!1), e.hidePrivacy = i.observable(!1), e.termsText = i.observable(), e.termsLink = i.observable(), e.privacyText = i.observable(), e.privacyLink = i.observable()
            },
            updateMergedBrandingObservables: function (e, n) {
                if (n) {
                    var t = m.getLayoutTemplateConfig(n);
                    e.masterPageMethods() && e.masterPageMethods().updateBranding(n), e.isVerticalSplitTemplate(t.layoutType === g.VerticalSplit), e.showHeader(t.showHeader), e.headerLogo(t.headerLogo), e.showFooter(t.showFooter), e.hideTOU(t.hideTOU), e.hidePrivacy(t.hidePrivacy), e.termsText(n.FooterTOUText), e.termsLink(n.FooterTOULink), e.privacyText(n.FooterPrivacyText), e.privacyLink(n.FooterPrivacyLink)
                }
            },
            updateFavicon: function (e, n) {
                var t = document.querySelector("link[rel~='icon']");
                t && (e && e.Favicon ? t.href = e.Favicon : n && (t.href = n))
            },
            loadCustomizationFiles: function (e, n) {
                if (n) {
                    if (!e || !e.CustomizationFiles) return n.isLoadComplete(!0), void n.strings.isLoadComplete(!0);
                    var t = e.CustomizationFiles,
                        i = t.customCssUrl,
                        a = t.strings;
                    if (a || i) {
                        n.initialize();
                        var o = {
                            customStringsFiles: a,
                            customCss: i
                        };
                        s.throwUnhandledExceptionOnRejection(n.load(o))
                    } else n.isLoadComplete(!0), n.strings.isLoadComplete(!0)
                }
            },
            createCustomizationLoader: function (e, n, i, a) {
                t.e(7).then(function () {
                    var o = new(t(484))({
                        serverData: e,
                        pageId: a
                    });
                    i ? (i(o), m.loadCustomizationFiles(n, i())) : m.loadCustomizationFiles(n, o)
                }.bind(null, t))["catch"](t.oe)
            }
        };
    e.exports = m
}, function (e, n, t) {
    var i = t(2),
        a = t(1),
        o = window,
        r = a.Helper;

    function s() {
        var e = this;
        e.useCssAnimation = !1, r.isCSSAnimationSupported() && !r.isHighContrast() && (e.useCssAnimation = !0)
    }
    i.components.register("marching-ants-control", {
        viewModel: s,
        template: t(331),
        synchronous: !o.ServerData.A || a.Helper.isStackSizeGreaterThan(o.ServerData.A)
    }), e.exports = s
}, function (e, n, t) {
    var i = t(21),
        a = t(1),
        o = i.Helper,
        r = a.QueryString,
        s = n.Properties = {
            State: "State",
            SessionLookupKey: "SessionLookupKey",
            DisplaySignForUI: "DisplaySignForUI",
            FlowToken: "FlowToken"
        },
        c = n.Purpose = {
            Password: "eOTT_OneTimePassword",
            RemoteNGC: "eOTT_RemoteNGC",
            NoPassword: "eOTT_NoPasswordAccountLoginCode",
            OtcLogin: "eOTT_OtcLogin",
            XboxRemoteConnect: "RemoteSignInWithUserCode"
        },
        d = n.Channel = {
            Authenticator: "Authenticator",
            MobileSms: "SMS",
            EmailAddress: "Email",
            VoiceCall: "Voice",
            PushNotifications: "PushNotifications"
        },
        l = n.Type = {
            EmailAddress: "AltEmail",
            EmailAddressEncrypted: "AltEmailE",
            Mobile: "MobileNum",
            MobileEncrypted: "MobileNumE",
            SessionApprover: "SAPId"
        };
    n.Event = {
        OnSend: "otcsend",
        OnSendFail: "otcsendfailed",
        OnFlowExpired: "otcflowexpired"
    };
    var u = n.RequestParam = {
            Username: "login",
            Purpose: "purpose",
            FlowToken: "flowtoken",
            CanaryFlowToken: "canaryFlowToken",
            Channel: "channel",
            UIMode: "UIMode",
            PhoneCountry: "MobileCountry",
            PhoneCountryCode: "MobileCC",
            UnauthSessionId: "uaid",
            ProofConfirmation: "ProofConfirmation"
        },
        p = n.Status = {
            None: 0,
            Error: 200,
            Success: 201,
            HIPError: 202,
            FTError: 203,
            InputError: 204,
            DestinationError: 205,
            Timeout: 300
        },
        f = n.ProofTypeToChannel = function (e) {
            var n = null;
            switch (e) {
                case PROOF.Type.SMS:
                    n = d.MobileSms;
                    break;
                case PROOF.Type.Voice:
                    n = d.VoiceCall;
                    break;
                case PROOF.Type.Email:
                case PROOF.Type.AltEmail:
                    n = d.EmailAddress;
                    break;
                case PROOF.Type.TOTPAuthenticatorV2:
                    n = d.PushNotifications
            }
            return n
        },
        g = n.ProofTypeToOtcType = function (e, n) {
            var t = null;
            switch (e) {
                case PROOF.Type.Voice:
                case PROOF.Type.SMS:
                    t = n ? l.MobileEncrypted : l.Mobile;
                    break;
                case PROOF.Type.Email:
                case PROOF.Type.AltEmail:
                    t = n ? l.EmailAddressEncrypted : l.EmailAddress;
                    break;
                case PROOF.Type.TOTPAuthenticatorV2:
                    t = l.SessionApprover
            }
            return t
        };
    n.Proof = function (e) {
        var n = e.username || "",
            t = e.flowToken || "",
            i = e.purpose || c.Password,
            a = e.proofType,
            o = e.proofData || "",
            r = e.isEncrypted,
            s = e.uiMode,
            d = e.lcid,
            l = e.phoneCountry || "",
            p = e.phoneCountryCode || "",
            m = e.unauthSessionId,
            b = e.proofConfirmation,
            v = e.canaryFlowToken;
        this[u.Username] = n, this[u.FlowToken] = t, this[u.Purpose] = i, this[u.Channel] = f(a), this[g(a, r)] = o, s && (this[u.UIMode] = s), d && (this.lcid = d), r || a !== PROOF.Type.SMS && a !== PROOF.Type.Voice || (this[u.PhoneCountry] = l, this[u.PhoneCountryCode] = p), m && (this[u.UnauthSessionId] = m), b && (this[u.ProofConfirmation] = b), v && (this[u.CanaryFlowToken] = v)
    }, n.Request = function (e) {
        var n, t, a, c, d = this,
            l = p.None,
            u = "",
            f = "",
            g = "",
            m = e.data,
            b = e.onSend,
            v = e.onSendFail,
            h = e.onFlowExpired,
            _ = e.timeout || 3e4,
            w = e.siteId,
            S = e.clientId,
            C = e.forwardedClientId,
            x = e.noPaBubbleVersion;

        function y(e) {
            var n = !1,
                t = d.getResponseJson();
            g = t[s.FlowToken] || "", t[s.State] ? (l = t[s.State], u = t[s.SessionLookupKey] || "", f = t[s.DisplaySignForUI] || "", n = l !== p.Success) : (l = p.Error, u = "", f = "", n = !0), n ? l === p.FTError ? h(e, d) : v(e, d) : b(e)
        }

        function k() {
            g = "", l = p.Error, u = "", f = "", v(d)
        }

        function T() {
            l = p.Timeout, u = "", f = "", g = "", v(d)
        }
        d.getOtcStatus = function () {
            return d.isComplete() ? l : p.None
        }, d.getSessionKey = function () {
            return d.isComplete() ? u : ""
        }, d.getDisplaySign = function () {
            return d.isComplete() ? f : ""
        }, d.getFlowToken = function () {
            return d.isComplete() ? g : ""
        }, n = r.extract("mkt"), t = r.extract("lc"), a = [].concat(n ? [
            ["mkt", n]
        ] : [], t ? [
            ["lcid", t]
        ] : [], w ? [
            ["id", w]
        ] : [], S ? [
            ["client_id", S]
        ] : [], C ? [
            ["fci", C]
        ] : [], x ? [
            ["nopa", x]
        ] : []), c = {
            targetUrl: r.add("GetOneTimeCode.srf", a),
            requestType: i.RequestType.Post,
            data: o.generateRequestString(m),
            isAsync: !0,
            timeout: _,
            successCallback: y,
            failureCallback: k,
            timeoutCallback: T
        }, i.Handler.call(d, c)
    }
}, function (e, n, t) {
    var i = t(25),
        a = t(9),
        o = t(36),
        r = window,
        s = r.navigator;
    n.makeCredential = function (e, n, t, a, r, c, d, l) {
        var u = [];
        c && (u = c.map((function (e) {
            return {
                type: "public-key",
                id: o.base64UrlStringToArrayBuffer(e)
            }
        })));
        var p = i.SupportedKeyAlgorithms.map((function (e) {
                return {
                    type: "public-key",
                    alg: e
                }
            })),
            f = {
                challenge: o.stringToArrayBuffer(e),
                rp: {
                    name: "Microsoft",
                    id: l
                },
                user: {
                    id: o.base64UrlStringToArrayBuffer(n),
                    name: t,
                    displayName: a,
                    icon: r
                },
                pubKeyCredParams: p,
                timeout: i.Timeout,
                excludeCredentials: u,
                authenticatorSelection: {
                    authenticatorAttachment: d,
                    requireResidentKey: !0,
                    userVerification: "required"
                },
                attestation: "direct",
                extensions: {
                    hmacCreateSecret: !0,
                    credentialProtectionPolicy: "userVerificationOptional"
                }
            };
        return s.credentials.create({
            publicKey: f
        })
    }, n.getAssertion = function (e, n, t) {
        var a = [];
        n && (a = n.map((function (e) {
            return {
                type: "public-key",
                id: o.base64UrlStringToArrayBuffer(e)
            }
        })));
        var r = {
            challenge: o.stringToArrayBuffer(e),
            timeout: i.Timeout,
            rpId: t,
            allowCredentials: a,
            userVerification: "required"
        };
        return s.credentials.get({
            publicKey: r
        })
    }, n.isPlatformAuthenticatorAvailable = function () {
        return a.newPromiseWithTimeout(r.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable, i.PromiseTimeout, !1)
    }
}, function (e, n, t) {
    (function (n) {
        e.exports = n.ko = t(60)
    }).call(this, t(41))
}, function (e, n, t) {
    t(311);
    var i = t(312);

    function a(e, n) {
        return e && e[n] ? e[n] : ""
    }

    function o(e) {
        if (!e || !e.ver) return "";
        var n = e.ver.v || e.ver || "";
        return Array.isArray(n) && n.length > 0 ? n.join(".") : n
    }
    var r = null;
    n.getInstance = function (e) {
        if (e.a7) try {
            r = r || function (e) {
                var n = e || {},
                    t = e.browser || {},
                    r = n.aV || {},
                    s = n.k || {},
                    c = n.correlationId ? n.correlationId : "";
                return r.correlationID = c, r.hostPageID = n.hpgid, r.pageName = n.pgid || n.bQ, r.actorID = n.hpgact || n.aD, r.appId = n.appId, r.environment = n.aw, r.serverDetails = {
                    datacenter: a(s, "dc"),
                    role: a(s, "r"),
                    roleInstance: a(s, "ri"),
                    version: o(s)
                }, t.IE && r.appInsightsConfig && (r.appInsightsConfig.PostChannel ? r.appInsightsConfig.PostChannel.disableXhrSync = !0 : r.appInsightsConfig.PostChannel = {
                    disableXhrSync: !0
                }), new i.TelemetryHelper(r)
            }(e)
        } catch (n) {}
        return r
    }
}, function (e, n, t) {
    var i = t(16),
        a = t(7),
        o = t(10).getInstance(window.ServerData);
    e.exports = function (e) {
        var n = null,
            t = e.username,
            r = e.proofData,
            s = e.proofType,
            c = e.purpose || i.Purpose.Password,
            d = e.flowToken,
            l = e.canaryFlowToken,
            u = !1 !== e.isEncrypted,
            p = e.uiMode,
            f = e.lcid,
            g = e.unauthSessionId,
            m = e.proofConfirmation,
            b = e.phoneCountry,
            v = e.phoneCountryCode,
            h = e.siteId,
            _ = e.clientId,
            w = e.forwardedClientId,
            S = e.noPaBubbleVersion,
            C = e.successCallback,
            x = e.failureCallback,
            y = e.clientTracingOptions,
            k = {};

        function T(e, n, t, i, a) {
            o.traceEndRequest(e, n, t, i, a)
        }

        function P() {
            T(k, "Success", null, !0, (function () {
                C && C(n)
            }))
        }

        function D() {
            var e = {
                otcStatus: n.getOtcStatus()
            };
            T(k, "Failed", e, !1, (function () {
                x && x(n)
            }))
        }
        this.sendRequest = function () {
            var e, C = {
                    data: (e = {
                        username: t,
                        proofData: r,
                        proofType: s,
                        purpose: c,
                        flowToken: d,
                        canaryFlowToken: l,
                        isEncrypted: u,
                        uiMode: p,
                        lcid: f,
                        unauthSessionId: g,
                        proofConfirmation: m,
                        phoneCountry: b,
                        phoneCountryCode: v
                    }, new i.Proof(e)),
                    siteId: h,
                    clientId: _,
                    forwardedClientId: w,
                    noPaBubbleVersion: S,
                    onSend: P,
                    onSendFail: D,
                    onFlowExpired: D
                },
                x = {};
            x.proofType = s, x.purpose = c, x.uiMode = p, x.lcid = f, x.phoneCountry = b, x.phoneCountryCode = v,
                function (e, n) {
                    var t = y || {};
                    t.hasOwnProperty("eventId") || (t.eventId = a.EventIds.Api_GetOneTimeToken);
                    if (t.eventId) {
                        var i = {
                            eventType: "POST",
                            eventId: t.eventId,
                            eventLevel: t.eventLevel || a.EventLevel.Info,
                            eventArgs: n,
                            eventOptions: t
                        };
                        o.traceBeginRequest(e, i)
                    }
                }(k, x), (n = new i.Request(C)).sendRequest()
        }
    }
}, function (e, n, t) {
    var i = t(12),
        a = t(1),
        o = t(3),
        r = o.Object,
        s = a.HttpCode,
        c = window;
    n.RequestType = {
        Post: "POST",
        Get: "GET"
    };
    var d = n.State = {
        Unsupported: -1,
        Unsent: 0,
        Done: 4,
        Timeout: 5
    };
    n.Event = {
        OnSuccess: "ajaxsuccess",
        OnError: "ajaxerror",
        OnTimeout: "ajaxtimeout"
    }, n.Helper = {
        generateRequestString: function (e) {
            var n = "";
            return e && r.forEach(e, (function (e, t) {
                (t || "" === t) && (n.length > 0 && (n += "&"), n += e + "=" + t)
            })), n
        }
    }, n.Handler = function (e) {
        var n = this,
            t = "",
            l = [],
            u = null,
            p = null,
            f = !1,
            g = !0,
            m = null,
            b = !1,
            v = !!e.contentType,
            h = !!e.headers,
            _ = !!e.headerValue,
            w = e.data || "",
            S = e.targetUrl || "",
            C = e.requestType || "",
            x = !1 !== e.isAsync,
            y = e.timeout || 0,
            k = e.username || "",
            T = e.password || "",
            P = e.contentType || "application/x-www-form-urlencoded",
            D = e.withCredentials || !1,
            E = e.breakCache || !1,
            I = e.responseType || "",
            A = e.headers || {},
            R = e.successCallback,
            L = e.failureCallback,
            O = e.timeoutCallback;

        function B(e, i) {
            e || n.isSuccess() ? R && R(u, t) : (i || !n.isSuccess() && !f) && L && L(u, p, p.statusText)
        }

        function N() {
            if (m = null, f = !0, n.cancel(), O) {
                var e = {
                    status: s.Timeout,
                    statusText: "timeout"
                };
                O(u, e, e.statusText)
            }
        }

        function U(e) {
            if (j(), !n.isComplete() && !p.canceled && L) {
                var t = {
                    status: s.ClientClosedRequest,
                    statusText: "abort"
                };
                L(e, t, t.statusText)
            }
        }

        function F(e) {
            n.isComplete() || V(e)
        }

        function M(e) {
            n.isComplete() && !f && V(e)
        }

        function V(e) {
            j(), t = p.responseText, u = e, B()
        }

        function j() {
            m && (clearTimeout(m), m = null)
        }

        function H(e) {
            j(), t = p.responseText, B(e, !e)
        }
        n.sendRequest = function (e) {
                u = e,
                    function () {
                        f = !1;
                        var e = "withCredentials" in new XMLHttpRequest;
                        if (!b || e) {
                            var t = S;
                            (p = new XMLHttpRequest).onreadystatechange = M, p.addEventListener && (p.addEventListener("abort", U), p.addEventListener("error", F)), E && (t = a.QueryString.appendOrReplace(t, "_", (new Date).getTime())), k.length > 0 ? p.open(C, t, x, k, T) : p.open(C, t, x), n.clearResponse(), r.forEach(A, (function (e, n) {
                                p.setRequestHeader(e, n)
                            })), p.responseType = I, p.withCredentials = D
                        } else c.XDomainRequest ? !x || k || T || v || h || _ || D ? g = !1 : ((p = new c.XDomainRequest).onerror = function () {
                            H(!1)
                        }, p.onload = function () {
                            H(!0)
                        }, p.open(C, S), n.clearResponse()) : g = !1
                    }(), g && (y > 0 && (m = setTimeout((function () {
                        N.call(n)
                    }), y)), p.send(w))
            }, n.getState = function () {
                return g ? f ? d.Timeout : p ? p.readyState : d.Unsent : d.Unsupported
            }, n.getStatus = function () {
                return f ? s.Timeout : p ? p.status : 0
            }, n.cancel = function () {
                p && (p.canceled = !0, p.abort())
            }, n.getResponseJson = function () {
                return t ? i.parse(t) : {}
            }, n.isComplete = function () {
                return n.getState() === d.Done || n.getState() === d.Timeout
            }, n.isSuccess = function () {
                return n.isComplete() && l[n.getStatus()]
            }, n.clearResponse = function () {
                t = ""
            },
            function () {
                A["Content-type"] = P, l[s.Ok] = !0, l[s.NotModified] = !0, l[s.Timeout] = !1;
                var e = o.String.extractDomainFromUrl(S);
                e && (b = o.String.extractDomainFromUrl(document.location.href) !== e)
            }()
    }
}, function (e, n, t) {
    var i = t(0),
        a = t(6),
        o = t(5),
        r = t(14),
        s = t(1),
        c = t(3),
        d = t(11),
        l = t(7),
        u = s.Helper,
        p = s.QueryString,
        f = c.String,
        g = c.Object,
        m = i.CredentialType,
        b = i.RemoteNgcType,
        v = i.Error,
        h = i.ApiErrorCodes,
        _ = i.EstsError,
        w = i.PaginatedState,
        S = i.IfExistsResult,
        C = i.ThrottleStatus,
        x = i.DomainType,
        y = i.BindProvider,
        k = a.AllowedIdentitiesType,
        T = i.SessionPullFlags;
    var P = E.GctResultAction = {
            ShowError: 1,
            SwitchView: 2,
            Redirect: 3
        },
        D = E.GctRequestHelperFlags = {
            CheckCurrentIdpOnly: 1,
            IsPhoneNumberFullyQualified: 2,
            DisableDesktopSsoPreferredCred: 4,
            DisableAutoSend: 8,
            ForceOtcLogin: 16,
            IsPostRequest: 32,
            IsSignup: 64
        };

    function E(e, n) {
        var a = this,
            s = !1,
            E = null,
            I = null,
            A = null,
            R = null,
            L = {},
            O = null,
            B = e,
            N = 0 != (n & D.CheckCurrentIdpOnly),
            U = 0 != (n & D.IsPhoneNumberFullyQualified),
            F = 0 != (n & D.DisableDesktopSsoPreferredCred),
            M = 0 != (n & D.DisableAutoSend),
            V = 0 != (n & D.ForceOtcLogin),
            j = 0 != (n & D.IsPostRequest),
            H = 0 != (n & D.IsSignup),
            W = B.str,
            $ = B.J,
            G = B.m,
            q = B.Bi,
            z = !!B.Bm,
            K = !!B.BV,
            J = !!B.Aj,
            X = B.Bk,
            Q = B.Bj,
            Y = !!B.BH,
            Z = !!B.BK,
            ee = !!B.Bl,
            ne = B.C,
            te = B.Ai,
            ie = B.a1,
            ae = B.L,
            oe = B.bz,
            re = B.Ax,
            se = B.AW,
            ce = e.urlMsaSignUp,
            de = B.j,
            le = B.v,
            ue = B.fUseConsumerEmailError,
            pe = B.n,
            fe = B.desktopSsoConfig,
            ge = B.sFedQS,
            me = B.staticTenantBranding,
            be = B.dynamicTenantBranding,
            ve = B.isGlobalTenant,
            he = (B.fCheckForWindowsSku, B.country),
            _e = B.arrProofData || {},
            we = parseInt(B.bt),
            Se = B.by,
            Ce = !!B.az,
            xe = B.fBindCookiesUsingPoP,
            ye = B.be || 0,
            ke = B.fIgnoreViralUsers,
            Te = B.fAccessPassSupported,
            Pe = B.Be,
            De = B.fIsRestrictedWsi,
            Ee = B.bb,
            Ie = B.r,
            Ae = B.AZ,
            Re = B.fEnableWebNativeBridge,
            Le = B.fUpdateLoginHint;

        function Oe(e, n, t) {
            var i = e.Credentials && e.Credentials.OtcLoginEligibleProofs,
                a = [];
            if (i) {
                var o = e.Credentials && e.Credentials.HasPhone && e.Credentials.CobasiApp;
                c.Array.forEach(i, (function (e) {
                    if (e.isDefault === n) {
                        var t = {
                            credType: m.OneTimeCode,
                            proof: e
                        };
                        switch (t.proof.isEncrypted = !0, e.type) {
                            case PROOF.Type.SMS:
                            case PROOF.Type.Voice:
                                if (!e.isVoiceOnly) {
                                    var i = g.clone(t);
                                    i.proof.otcSent && j && we === PROOF.Type.Voice && (i.proof.otcSent = !1), i.proof.type = PROOF.Type.SMS, Pe && !o && (i.shownOnlyOnPicker = !0), a.push(i)
                                }
                                if (e.voiceEnabled) {
                                    var r = g.clone(t);
                                    !r.proof.otcSent || j && we === PROOF.Type.Voice || (r.proof.otcSent = !1), r.proof.type = PROOF.Type.Voice, a.push(r)
                                }
                                break;
                            case PROOF.Type.Email:
                                a.push(g.clone(t))
                        }
                    }
                }))
            }
            if (n && 0 === a.length && Fe(e, t) === m.OneTimeCode) {
                var r = e.Credentials && e.Credentials.HasPassword,
                    s = {
                        credType: m.OneTimeCode,
                        proof: {
                            display: e.Display,
                            data: f.cleanseUsername(e.Display),
                            otcSent: !0,
                            isEncrypted: !1,
                            isDefault: !0,
                            isNopa: !r,
                            type: f.isEmailAddress(e.Username) ? PROOF.Type.Email : PROOF.Type.SMS
                        }
                    };
                a.push(s)
            }
            return a
        }

        function Be(e) {
            e.proof.str = {}, g.extend(e.proof.str, _e[e.proof.type] || {}), g.forEach(e.proof.str, (function (n, t) {
                t && (e.proof.str[n] = f.format(t, e.proof.display + "\u200e", e.proof.clearDigits || ""))
            }))
        }

        function Ne(e, n, t, i, o, r) {
            var c = {},
                d = fe && i.EstsProperties && i.EstsProperties.DesktopSsoEnabled && ! function (e) {
                    return e && fe.lastUsernameTried && e.toLowerCase() === fe.lastUsernameTried.toLowerCase()
                }(n),
                l = i.ErrorHR,
                g = We(n, i, o),
                h = a.getGctSharedData(i, o, r);
            if (h.username = n, l === v.PP_E_INVALID_PHONENUMBER || l === v.PP_E_LIBPHONENUMBERINTEROP_NUMBERPARSE_EXCEPTION) c = function (e) {
                if (U) return Ke(W.CT_PWD_STR_Error_InvalidPhoneNumber, !0);
                return ze(w.PhoneDisambiguation, {
                    phoneDisambigError: e
                })
            }(l);
            else if (l === v.PP_E_NAME_INVALID || l === v.PP_E_INVALIDARG) c = Ke(W.CT_PWD_STR_Error_InvalidUsername);
            else if (l === v.PP_E_FEDERATION_INLINELOGIN_DISALLOWED) c = Ke(W.CT_PWD_STR_Error_FedNotAllowed, !0);
            else if (l === v.PP_E_LOGIN_NOPA_USER_PASSWORD_REQUIRED) c = Ke(Ee ? f.format(W.CT_STR_Error_PasswordRequired, p.stripQueryStringAndFragment(Ie)) : f.format(W.CT_STR_Error_PasswordRequired, p.stripQueryStringAndFragment(Se)));
            else if (i.RequiresPhoneDisambiguation) c = ze(w.PhoneDisambiguation);
            else {
                if (i.AliasDisabledForLogin) return Ke(W.CT_PWD_STR_Error_AliasDisabled, !0);
                if (i.IfExistsResult === S.NotExist) c = function (e, n, t, i) {
                    var a, o = qe(e, t),
                        r = t.EstsProperties || {},
                        s = r.DomainType && r.DomainType !== x.Unknown && r.DomainType !== x.Consumer;
                    if (t.IsProofForAlias) return ze(w.ConfirmRecoverUsername);
                    if (re && o && (te || ie)) return te ? He(e, t) : ze(w.ConfirmSignup);
                    a = Ae ? W.CT_PWD_STR_SSSU_Error_EmailAccountNotFound : n ? t.ThrottleStatus === C.NotThrottled && s ? W.CT_PWD_STR_Error_UsernameNotExist_Alternate_VerifiedDomain : W.CT_PWD_STR_Error_UsernameNotExist_Alternate : Fe(t, i) === m.OneTimeCode ? t.ThrottleStatus === C.MsaThrottled ? W.CT_PWD_STR_Error_UsernameNotExists_EmailOtpAllowed_MsaFailed : W.CT_PWD_STR_Error_UsernameNotExists_EmailOtpAllowed : ue && r.DomainType === x.Consumer ? W.CT_PWD_STR_Error_UsernameNotExist_ConsumerEmail : t.ThrottleStatus === C.NotThrottled && s ? o ? W.CT_PWD_STR_Error_UsernameNotExist_VerifiedDomain_SignupAllowed : W.CT_PWD_STR_Error_UsernameNotExist_VerifiedDomain : t.ThrottleStatus === C.MsaThrottled ? s && o ? W.CT_PWD_STR_Error_UsernameNotExist_VerifiedDomain_MsaFailed_SignupAllowed : s ? W.CT_PWD_STR_Error_UsernameNotExist_VerifiedDomain_MsaFailed : re && !de ? W.CT_PWD_STR_Error_UsernameNotExist_Guest_SignupAllowed_MsaFailed : W.CT_PWD_STR_Error_UnknownDomain_MsaFailed : H && !s ? W.CT_PWD_STR_Error_UsernameNotExist_Guest_Signup : U ? W.CT_PWD_STR_Error_InvalidPhoneNumber : W.CT_PWD_STR_Error_UsernameNotExist;
                    return Ke(f.format(a, u.htmlEscape(f.extractDomain(e)), u.htmlEscape(e)), !0)
                }(n, t, i, o);
                else if (i.IfExistsResult === S.ExistsBothIDPs) c = ze(w.IdpDisambiguation, {
                    desktopSsoEnabled: d,
                    idpRedirectUrl: g.idpRedirectUrl,
                    idpRedirectPostParams: g.idpRedirectPostParams,
                    idpRedirectProvider: g.idpRedirectProvider
                });
                else if (i.IfExistsResult === S.ExistsInOtherMicrosoftIDP) c = je(e, n);
                else if (!s || i.IfExistsResult !== S.Error && i.IfExistsResult !== S.Throttled && 0 == (i.ThrottleStatus & C.MsaThrottled))
                    if (i.ShowRemoteConnect) c = ze(w.RemoteLoginPolling);
                    else {
                        c = function (e, n, t, i, a, o) {
                            var r = Fe(i, o);
                            if (De && !(i.Credentials.HasPassword || i.Credentials.HasGoogleFed || i.Credentials.HasCertAuth || i.Credentials.HasFido || i.Credentials.HasRemoteNGC || i.Credentials.HasPhone || i.Credentials.HasFacebookFed) && (O = !0, r !== m.AccessPass)) return ze(w.MoreInfo);
                            if (!F && n) return ze(w.FetchSessionsProgress, {
                                unsafe_desktopSsoDomainToUse: f.extractDomain(e),
                                sessionPullType: T.Dsso
                            });
                            if (i.NativeBridgeRequest && (!R || !R.isBridgeUnavailable())) return ze(w.WebNativeBridge, {
                                request: i.NativeBridgeRequest
                            });
                            var s = {
                                idpRedirectUrl: t.idpRedirectUrl,
                                idpRedirectPostParams: t.idpRedirectPostParams,
                                idpRedirectProvider: t.idpRedirectProvider
                            };
                            switch (r) {
                                case m.OneTimeCode:
                                    var c = w.OneTimeCode;
                                    return M && (c = a ? w.ProofConfirmation : w.ConfirmSend), ze(c);
                                case m.PublicIdentifierCode:
                                    return M || i.Credentials.SasParams && i.Credentials.SasParams.Success ? ze(M ? w.ConfirmSend : w.OneTimeCode) : Ke(W.CT_PWD_STR_Error_GetCredentialTypeError, !1, !0);
                                case m.Fido:
                                    return ze(w.Fido);
                                case m.RemoteNGC:
                                    var d = i.Credentials.RemoteNgcParams.DefaultType === b.PushNotification;
                                    return ze(M && d ? w.ConfirmSend : w.RemoteNGC, s);
                                case m.Federation:
                                case m.CloudFederation:
                                    return ze(w.IdpRedirect, s);
                                case m.LinkedIn:
                                case m.GitHub:
                                case m.Google:
                                case m.Facebook:
                                    return ze(Me(i, o).length > 1 || Ve(i, o).length > 0 ? w.IdpRedirectSpeedbump : w.IdpRedirect, s);
                                case m.AccessPass:
                                    return ze(w.AccessPass, s);
                                case m.NoPreferredCredential:
                                    return ze(w.CredentialPicker, s);
                                case m.OtherMicrosoftIdpFederation:
                                    return He(e, i, ce);
                                case m.Certificate:
                                    return Je(i.Credentials.CertAuthParams.CertAuthUrl, $e(i.FlowToken));
                                case m.Password:
                                default:
                                    return ze(w.Password)
                            }
                        }(n, d, g, i, h.otcCredential && h.otcCredential.proof.clearDigits, o)
                    }
                else c = ze(w.IdpDisambiguation, {
                    hasIdpDisambigError: !0,
                    desktopSsoEnabled: d,
                    idpRedirectUrl: g.idpRedirectUrl,
                    idpRedirectPostParams: g.idpRedirectPostParams,
                    idpRedirectProvider: g.idpRedirectProvider
                })
            }
            return c.flowToken = i.FlowToken || null, c.bypassCache || (L[n] = i, L[n].FlowToken = null), c.sharedData = h, c
        }

        function Ue(e) {
            var n = {};
            if (e && e.error) switch (e.error.code) {
                case h.AuthFailure:
                    n = Ke(W.CT_PWD_STR_Error_FlowTokenExpired);
                    break;
                case _.PublicIdentifierSasBeginCallNonRetriableError:
                case _.PublicIdentifierSasBeginCallRetriableError:
                    n = Ke(W.CT_PWD_STR_Error_GetCredentialTypeError, !1, !0);
                    break;
                default:
                    n = Ke(W.CT_PWD_STR_Error_GetCredentialTypeError)
            } else n = Ke(W.CT_PWD_STR_Error_GetCredentialTypeError);
            return n.flowToken = e.FlowToken || null, n
        }

        function Fe(e, n) {
            var t = m.Password,
                i = e.Credentials;
            return i && ((t = i.PrefCredential) !== m.Fido || n || (t = i.RemoteNgcParams && i.RemoteNgcParams.SessionIdentifier ? m.RemoteNGC : m.Password)), t
        }

        function Me(e, n) {
            var t = e.Credentials || {},
                i = t.SasParams,
                a = t.LinkedInParams,
                o = t.GitHubParams,
                r = t.GoogleParams,
                s = t.FacebookParams,
                d = t.CertAuthParams,
                l = e.EstsProperties || {},
                u = [].concat(t.HasPassword && l.DomainType !== x.Federated ? {
                    credType: m.Password
                } : [], t.FederationRedirectUrl && l.DomainType === x.Federated ? {
                    credType: m.Federation
                } : [], t.FederationRedirectUrl && l.DomainType === x.CloudFederated ? {
                    credType: m.CloudFederation
                } : [], t.HasRemoteNGC ? {
                    credType: m.RemoteNGC
                } : [], t.HasFido && n ? {
                    credType: m.Fido
                } : [], t.HasPhone && i ? {
                    credType: m.PublicIdentifierCode
                } : [], t.HasLinkedInFed && a ? {
                    credType: m.LinkedIn,
                    redirectUrl: a.LinkedInRedirectUrl
                } : [], t.HasGitHubFed && o ? {
                    credType: m.GitHub,
                    redirectUrl: o.GithubRedirectUrl
                } : [], t.HasGoogleFed && r ? {
                    credType: m.Google,
                    redirectUrl: r.GoogleRedirectUrl
                } : [], t.HasFacebookFed && s ? {
                    credType: m.Facebook,
                    redirectUrl: s.FacebookRedirectUrl
                } : [], t.HasAccessPass ? {
                    credType: m.AccessPass
                } : [], t.HasCertAuth ? {
                    credType: m.Certificate,
                    redirectUrl: d.CertAuthUrl,
                    redirectPostParams: $e(e.FlowToken)
                } : []);
            if (_e[PROOF.Type.Email] && _e[PROOF.Type.SMS] && _e[PROOF.Type.Voice]) {
                var p = Oe(e, !0, n);
                p.length > 0 && (c.Array.forEach(p, Be), u = u.concat(p))
            }
            return u
        }

        function Ve(e, n) {
            var t = [];
            if (_e[PROOF.Type.Email] && _e[PROOF.Type.SMS] && _e[PROOF.Type.Voice]) {
                var i = Oe(e, !1, n);
                i.length > 0 && (c.Array.forEach(i, Be), t = t.concat(i), c.Array.first(i, (function (e) {
                    return !e.proof.isNopa
                })) && (t = t.concat({
                    credType: m.Password,
                    isDefault: !1
                })))
            }
            return t
        }

        function je(e, n) {
            var t = encodeURIComponent(n).replace(new RegExp("'", "g"), "%27");
            e = p.appendOrReplace(e, "username", t), e = p.appendOrReplace(e, "login_hint", t);
            var i = pe ? g.clone(pe) : null;
            return i && (i.unsafe_username = n), Je(e, i, !0, l.EventIds.Redirect_OtherIdpRedirection)
        }

        function He(e, n, t) {
            t = t || de, t = p.remove(t, "username"), Le && (t = p.remove(t, "login_hint"));
            var i = le ? g.clone(le) : null;
            return n && (n.IfExistsResult === S.NotExist || n.IsUnmanaged && n.IfExistsResult === S.Exists) && qe(e, n) && (i ? i.unsafe_username = e : (t = p.appendOrReplace(t, "username", encodeURIComponent(e)), Le && (t = p.appendOrReplace(t, "login_hint", encodeURIComponent(e))))), Je(t, i, !1, l.EventIds.Redirect_MSASignUpPage)
        }

        function We(e, n, t) {
            var i = {},
                a = Fe(n, t),
                o = n.EstsProperties || {};
            if (!(n.Credentials && (n.Credentials.FederationRedirectUrl || n.Credentials.LinkedInParams || n.Credentials.GitHubParams || n.Credentials.GoogleParams || n.Credentials.FacebookParams))) return i;
            switch (a) {
                case m.RemoteNGC:
                case m.Federation:
                case m.AccessPass:
                case m.NoPreferredCredential:
                    o && o.SamlRequest && o.RelayState ? (i.idpRedirectUrl = n.Credentials.FederationRedirectUrl, i.idpRedirectPostParams = {
                        SAMLRequest: o.SamlRequest,
                        RelayState: o.RelayState,
                        unsafe_username: e
                    }) : i.idpRedirectUrl = function (e, n) {
                        if (ge) {
                            var t = p.appendOrReplace("?" + ge, "wctx", "LoginOptions%3D3%26" + p.extract("wctx", "?" + ge));
                            t = t.substr(1), e = p.append(e, t)
                        } else e = p.appendOrReplace(e, "wctx", "LoginOptions%3D3%26" + p.extract("wctx", e));
                        return e = p.appendOrReplace(e, "cbcxt", encodeURIComponent(decodeURIComponent(p.extract("cbcxt")))), e = p.appendOrReplace(e, "username", encodeURIComponent(n)), e = p.appendOrReplace(e, "mkt", encodeURIComponent(decodeURIComponent(p.extract("mkt")))), e = p.appendOrReplace(e, "lc", encodeURIComponent(decodeURIComponent(p.extract("lc"))))
                    }(n.Credentials.FederationRedirectUrl, e);
                    break;
                case m.CloudFederation:
                    i.idpRedirectUrl = n.Credentials.FederationRedirectUrl;
                    break;
                case m.LinkedIn:
                    i.idpRedirectUrl = n.Credentials.LinkedInParams.LinkedInRedirectUrl, i.idpRedirectProvider = y.LinkedIn;
                    break;
                case m.GitHub:
                    i.idpRedirectUrl = n.Credentials.GitHubParams.GithubRedirectUrl, i.idpRedirectProvider = y.GitHub;
                    break;
                case m.Google:
                    i.idpRedirectUrl = n.Credentials.GoogleParams.GoogleRedirectUrl, i.idpRedirectProvider = y.Google;
                    break;
                case m.Facebook:
                    i.idpRedirectUrl = n.Credentials.FacebookParams.FacebookRedirectUrl, i.idpRedirectProvider = y.Facebook
            }
            return i
        }

        function $e(e) {
            return {
                ctx: ne,
                flowToken: e
            }
        }

        function Ge(e) {
            return f.cleanseUsername(e, !0)
        }

        function qe(e, n) {
            var t = se && f.isSkypeName(e),
                i = n.EstsProperties || {};
            return i.DomainType && i.DomainType !== x.Unknown && i.DomainType !== x.Consumer ? !1 === n.IsSignupDisallowed : !n.IsSignupDisallowed && !t
        }

        function ze(e, n) {
            return {
                action: P.SwitchView,
                viewId: e,
                viewParams: n
            }
        }

        function Ke(e, n, t) {
            return {
                action: P.ShowError,
                error: e,
                isBlockingError: n,
                bypassCache: t
            }
        }

        function Je(e, n, t, i) {
            return {
                action: P.Redirect,
                redirectUrl: e,
                redirectPostParams: n,
                isIdpRedirect: t,
                eventId: i
            }
        }
        a.sendAsync = function (e, n, t) {
            var a = Ge(n),
                r = L[a] ? L[a] : null,
                c = !!r,
                u = r ? o.resolve(r) : function (e, n) {
                    var t = [I].concat(A || []);
                    return o.all(t).then((function (t) {
                        var a = t[0],
                            r = t[1];
                        return new o((function (t, o) {
                            new d({
                                checkApiCanary: ae
                            }).Json({
                                url: oe,
                                eventId: l.EventIds.Api_GetCredentialType
                            }, function (e, n, t, i) {
                                var a = {
                                    unsafe_username: e,
                                    uaid: $,
                                    isOtherIdpSupported: s,
                                    isFederationDisabled: q,
                                    checkPhones: f.isPhoneNumber(e),
                                    isRemoteNGCSupported: z,
                                    isCookieBannerShown: K,
                                    isFidoSupported: t,
                                    originalRequest: ne,
                                    country: he,
                                    forceotclogin: V,
                                    otclogindisallowed: X,
                                    isExternalFederationDisallowed: Y,
                                    isRemoteConnectSupported: Ce,
                                    federationFlags: ye,
                                    isSignup: H,
                                    flowToken: n
                                };
                                ie && (a.checkProofForAliases = !0);
                                Q && (a.noPaOtcDisallowed = !0);
                                Z && (a.isPassthroughDisallowed = !0);
                                ee && (a.isPhoneNumberSignupDisallowed = !0);
                                ke && (a.ignoreViralUsers = !0);
                                xe && (i = i || {
                                    cpa: "",
                                    err: "Authenticator not generated."
                                }, a.cpa = i.cpa, a.cpa_err = i.err);
                                Te && (a.isAccessPassSupported = !0);
                                return a
                            }(e, n, a, r), t, o, i.DefaultRequestTimeout)
                        }))
                    }))
                }(a, t);
            return o.all([E, u, I]).then((function (n) {
                var t = n[0],
                    i = n[1],
                    o = n[2];
                return Ne(e, a, t, i, o, c)
            }), Ue)
        }, a.getResult = function (e, n, t, i) {
            return Ne(e, Ge(n), !1, t, i, !1)
        }, a.getState = function () {
            return {
                cache: L
            }
        }, a.restoreState = function (e) {
            e && (L = e.cache || {})
        }, a.cacheResponse = function (e, n) {
            L[Ge(e)] = n
        }, a.getSignupRedirectGctResult = function (e) {
            var n = Ge(e);
            return He(n, L[n] ? L[n] : null)
        }, a.getOtherIdpRedirectGctResult = function (e, n) {
            return je(e, Ge(n))
        }, a.getGctSharedData = function (e, n, t) {
            var i = {},
                a = Fe(e, n),
                o = e.Credentials || {},
                s = o.RemoteNgcParams,
                d = o.FidoParams,
                l = e.EstsProperties || {},
                u = s ? s.DefaultType : null,
                p = !!s && s.ShowAnimatedGifWhilePolling,
                f = !!s && s.StyleCredSwitchLinkAsButton,
                g = r.loadTenantBranding(l.UserTenantBranding || be),
                b = r.loadTenantBranding(me),
                v = We(e.Username, e, n);
            return i.preferredCredential = a, i.location = e.Location, i.fedRedirectParams = v, i.isTapRestrictedWsi = O, i.supportsNativeCredentialRecovery = e.SupportsNativeCredentialRecovery, i.isSignup = e.IfExistsResult === S.NotExist && Ae, e.Display && (i.displayName = e.Display), i.availableCreds = Me(e, n), i.evictedCreds = Ve(e, n), a === m.OneTimeCode && (i.otcCredential = c.Array.first(i.availableCreds, (function (e) {
                return e.credType === m.OneTimeCode && e.proof.otcSent
            })), i.useEvictedCredentials = !1), i.remoteNgcParams = {
                requestSent: !M && !t && a === m.RemoteNGC && s && s.hasOwnProperty("Entropy"),
                sessionIdentifier: s ? s.SessionIdentifier : null,
                entropy: s ? s.Entropy : null,
                defaultType: u,
                showAnimatedGifWhilePolling: p,
                styleCredSwitchLinkAsButton: f
            }, i.otcParams = {
                requestSent: (a === m.OneTimeCode || a === m.PublicIdentifierCode) && e.IfExistsResult !== S.ExistsBothIDPs
            }, d && d.AllowList && (i.fidoParams = {
                allowList: d.AllowList
            }), i.callMetadata = l && l.CallMetadata ? l.CallMetadata : {}, i.userTenantBranding = r.getMergedBranding(b, g, ve), i
        }, s = !N && G === k.Both, E = o.resolve(!1), I = u.isFidoSupportedAsync(J), xe && t.e(26).then(function () {
            var e = t(485);
            A = e.computePoPAuthenticator("POST", oe).then((function (e) {
                return {
                    cpa: e,
                    err: null
                }
            }), (function (e) {
                return {
                    cpa: "",
                    err: e.message
                }
            }))
        }.bind(null, t))["catch"](t.oe), Re && t.e(36).then(function () {
            R = t(448)
        }.bind(null, t))["catch"](t.oe)
    }
    e.exports = E
}, function (e, n, t) {
    var i = t(3),
        a = t(7),
        o = {},
        r = null;
    n.setDataPoint = function (e, n, t, i) {
        var o = {
                scope: i || a.DataPointScope.ClientEvent
            },
            r = s(e);
        r.tracingDataPoints = r.tracingDataPoints || {}, r.tracingDataPoints[n] = {
            options: o,
            value: function () {
                return t
            }
        }
    };
    var s = n.getTracingContextObject = function (e) {
        return e ? (o[e] || (o[e] = {}), o[e]) : r = r || {}
    };
    n.getTracingContextObjects = function () {
        var e = [];
        return i.Object.forEach(o, (function (n, t) {
            t && e.push({
                viewModel: n,
                context: t
            })
        })), r && e.push(r), e
    }, n.registerTracingObservables = function (e, n, t) {
        var i = s(e);
        i.tracingObservables = i.tracingObservables || [], i.tracingObservables.push({
            options: t,
            value: n
        })
    }, n.deleteTracingContextObject = function (e) {
        e ? o[e] && delete o[e] : r = null
    }, n.attachViewLoadClientTracingOptions = function (e, n) {
        s(e).viewLoadClientTracingOptions = n
    }
}, function (e, n, t) {
    var i = t(2),
        a = t(1),
        o = t(4),
        r = t(0),
        s = window,
        c = r.AgreementType,
        d = a.Helper,
        l = r.PaginatedState;

    function u(e) {
        var n = this,
            t = e.serverData,
            a = e.showLogo,
            r = e.showLinks,
            u = e.hideFooter,
            p = e.debugDetails,
            f = e.showDebugDetails,
            g = e.hasDarkBackground,
            m = e.useDefaultBackground,
            b = e.showFooter,
            v = e.hideTOU,
            h = e.hidePrivacy,
            _ = e.termsText,
            w = e.privacyText,
            S = e.termsLink,
            C = e.privacyLink,
            x = t.str,
            y = t.T,
            k = t.fIsChinaDc,
            T = t.aN || t.aO,
            P = t.an || t.AT,
            D = t.ap,
            E = t.a11yConformeLink,
            I = t.urlGallatinIcp;

        function A(e, t) {
            y && !k ? n.onAgreementClick(e) : s.open(t, "_blank")
        }
        n.onAgreementClick = o.create(), n.onShowDebugDetails = o.create(), n.onSwitchView = o.create(), n.showDebugDetails = i.observable(!!f), n.focusMoreInfo = i.observable(!1).extend({
            notify: "always"
        }), n.showFooter = b === undefined || b, n.hideTOU = v || !1, n.hidePrivacy = h || !1, n.termsText = d.htmlUnescape(_) || x.MOBILE_STR_Footer_Terms, n.privacyText = d.htmlUnescape(w) || x.MOBILE_STR_Footer_Privacy, n.termsLink = S || T, n.privacyLink = C || P, n.showLogo = a && !k, n.showLinks = r, n.hideFooter = u, n.showIcpLicense = k, n.debugDetails = p, n.impressumLink = D, n.a11yConformeLink = E, n.icpLink = I, n.hasDarkBackground = g, n.useDefaultBackground = m, n.privacyLink_onClick = function () {
            A(c.Privacy, n.privacyLink)
        }, n.termsLink_onClick = function () {
            A(c.Tou, n.termsLink)
        }, n.impressumLink_onClick = function () {
            A(c.Impressum, n.impressumLink)
        }, n.services_onClick = function () {
            n.onSwitchView(l.SeeHowDataIsManaged)
        }, n.a11yConformeLink_onClick = function () {
            A(c.A11yConforme, n.a11yConformeLink)
        }, n.moreInfo_onClick = function () {
            n.setDebugDetailsState(!n.showDebugDetails()), n.onShowDebugDetails(), n.showDebugDetails() || n.focusMoreInfo(!0)
        }, n.setDebugDetailsState = function (e) {
            n.showDebugDetails(e)
        }, n.focusMoreInfoLink = function () {
            n.focusMoreInfo(!0)
        }
    }
    i.components.register("footer-control", {
        viewModel: u,
        template: t(421),
        synchronous: !s.ServerData.A || a.Helper.isStackSizeGreaterThan(s.ServerData.A),
        enableExtensions: !0
    }), e.exports = u
}, function (e, n) {
    n.PlatformTimeout = 0, n.Timeout = 6e5, n.PromiseTimeout = 250, n.SupportedKeyAlgorithms = [-7, -257], n.Error = {
        Internal: "InternalError",
        FidoCreateCallUnexpectedResponse: "FidoCreateCallUnexpectedResponse"
    }
}, function (e, n, t) {
    var i = t(2),
        a = t(1),
        o = t(3),
        r = t(4),
        s = t(11),
        c = t(411),
        d = window,
        l = o.DateTime,
        u = a.Helper;

    function p(e) {
        var n = this,
            t = null,
            a = e.debugDetails,
            o = e.serverData,
            c = e.isDebugTracingEnabled,
            d = e.useWiderWidth,
            p = o.ai,
            f = o.urlSetDebugMode,
            g = o.i,
            m = o.sSigninName,
            b = o.str,
            v = o.sErrorCode;

        function h() {
            n.sending(!1), n.isDebugTracingEnabled(!n.isDebugTracingEnabled()), n.onSetDebugTracing()
        }

        function _() {
            n.sending(!1), n.debugModeError(b.STR_Error_Details_Debug_Mode_Failure)
        }
        n.onCloseBanner = r.create(), n.onSetDebugTracing = r.create(), n.debugModeError = i.observable(), n.isDebugTracingEnabled = i.observable(c), n.sending = i.observable(!1), n.showBanner = i.observable(!0), n.showDebugDetailsCopyMessage = i.observable(!1), n.isFocusActivated = i.observable(!1), n.unsafe_exceptionMessage = null, n.debugDetails = null, n.useWiderWidth = d, n.hideBanner_onClick = function () {
            n.onCloseBanner(), n.showBanner(!1)
        }, n.setDebugMode_onClick = function () {
            if (!n.sending()) {
                var e = new s;
                n.sending(!0), n.debugModeError("");
                var i = {
                    mode: n.isDebugTracingEnabled() ? 0 : 1,
                    user: t
                };
                e.Json({
                    url: f
                }, i, h, _)
            }
        }, n.activateFocus = function () {
            this.isFocusActivated(!0)
        }, t = g || m || "", n.unsafe_exceptionMessage = u.htmlUnescape(p), n.debugDetails = a || {}, v && (n.debugDetails.errorCode = v), n.debugDetails.timestamp || (n.debugDetails.timestamp = l.getUTCString())
    }
    c.applyExtensions(i), i.components.register("debug-details-control", {
        viewModel: p,
        template: t(412),
        synchronous: !d.ServerData.A || a.Helper.isStackSizeGreaterThan(d.ServerData.A),
        enableExtensions: !0
    }), e.exports = p
}, function (e, n, t) {
    var i = t(2),
        a = t(1),
        o = t(4),
        r = t(0),
        s = window,
        c = r.DialogId;

    function d(e) {
        var n = this,
            t = e.isPlatformAuthenticatorAvailable;
        n.onRegisterDialog = o.create(), n.onUnregisterDialog = o.create(), n.onShowDialog = o.create(), n.isPlatformAuthenticatorAvailable = t, n.hasFocus = i.observable(!1), n.fidoHelp_onClick = function () {
            n.onShowDialog(c.FidoHelp).then((function () {
                n.hasFocus(!0)
            }))
        }
    }
    i.components.register("fido-help-button-control", {
        viewModel: d,
        template: t(440),
        synchronous: !s.ServerData.A || a.Helper.isStackSizeGreaterThan(s.ServerData.A),
        enableExtensions: !0
    }), e.exports = d
}, function (e, n, t) {
    var i = t(23);
    n.applyExtenders = function (e) {
        e.extenders.preventExternalWrite = function (n) {
            var t = n(),
                i = e.observable(t).extend({
                    notify: "always"
                });
            return e.pureComputed({
                read: function () {
                    return i()
                },
                write: function (e) {
                    e !== t && i(t)
                }
            }).extend({
                notify: "always"
            })
        }, e.extenders.flowTokenUpdate = function (n, t) {
            return e.pureComputed({
                read: n,
                write: function (e) {
                    e && (t && (t.sFTTag && (t.sFTTag = t.sFTTag.replace(t.sFT, e)), t.sFT = e), n(e))
                }
            }).extend({
                notify: "always"
            })
        }, e.extenders.logValue = function (e, n) {
            return n && i.registerTracingObservables(n.viewModel, e, n.tracingOptions), e
        }, e.extenders.loadImageFromUrl = function (n) {
            return e.pureComputed({
                read: n,
                write: function (e) {
                    if (n() !== e)
                        if (e) {
                            var t = new Image;
                            t.onload = function () {
                                n(e)
                            }, t.src = e
                        } else n(e)
                }
            }).extend({
                notify: "always"
            })
        }
    }
}, function (e, n, t) {
    var i = t(2),
        a = t(1),
        o = t(4),
        r = t(0),
        s = t(17),
        c = t(9),
        d = t(20),
        l = t(16),
        u = t(3),
        p = window,
        f = u.String,
        g = r.PaginatedState,
        m = r.CredentialType,
        b = r.DialogId;

    function v(e) {
        var n = this,
            t = e.serverData,
            a = e.username,
            r = e.availableCreds || [],
            u = e.currentCred || {},
            p = e.flowToken,
            v = e.showForgotUsername,
            h = e.hideCredSwitchLink,
            _ = e.ariaDescribedBy,
            w = e.setFocus,
            S = t.str,
            C = t.w,
            x = t.h,
            y = t.G,
            k = t.g,
            T = t.H,
            P = t.Al,
            D = t.U,
            E = [],
            I = null,
            A = i.observable();

        function R(e) {
            O(e), n.onSetPendingRequest(!1), n.onSwitchView(g.OneTimeCode, !1, I)
        }

        function L(e) {
            var t, i = e.getOtcStatus();
            switch (O(e), i) {
                case l.Status.FTError:
                    t = S.CT_OTC_STR_Error_FlowExpired;
                    break;
                default:
                    t = I.proof.str.CT_OTCS_STR_Error_SendCodeServer || ""
            }
            n.onSetPendingRequest(!1), n.credLinkError(t)
        }

        function O(e) {
            e && (e.getFlowToken ? (p = e.getFlowToken(), n.onUpdateFlowToken(p)) : e.FlowToken && (p = e.FlowToken, n.onUpdateFlowToken(p)))
        }
        n.onSwitchView = o.create(), n.onRedirect = o.create(), n.onRegisterDialog = o.create(), n.onUnregisterDialog = o.create(), n.onShowDialog = o.create(), n.onSetPendingRequest = o.create(), n.onUpdateFlowToken = o.create(), n.credentialCount = 0, n.selectedCredType = null, n.selectedCredShownOnlyOnPicker = !1, n.switchToCredId = null, n.switchToCredText = null, n.showSwitchToCredPickerLink = !1, n.showForgotUsername = v, n.isUserKnown = !!u.credType, n.displayHelp = !u.credType, n.hideCredSwitchLink = h, n.isOfflineAccountVisible = D, n.ariaDescribedBy = _, n.setFocus = w, n.isPlatformAuthenticatorAvailable = i.observable(!1), n.credLinkError = i.observable(), n.fidoHelp_onClick = function () {
                n.onShowDialog(b.FidoHelp)
            }, n.view_onUpdateFlowToken = function (e) {
                p = e
            }, n.switchToCredPicker_onClick = function () {
                n.onSwitchView(g.CredentialPicker)
            }, n.switchToCred_onClick = function () {
                var e = I && I.credType || m.Password;
                switch (n.credLinkError(""), e) {
                    case m.OneTimeCode:
                        if (I.proof.clearDigits) n.onSwitchView(g.ProofConfirmation, !1, I);
                        else {
                            var t = function () {
                                    var e = {
                                        username: f.cleanseUsername(a),
                                        proofData: I.proof.data,
                                        proofType: I.proof.type,
                                        purpose: I.proof.isNopa ? l.Purpose.NoPassword : l.Purpose.OtcLogin,
                                        flowToken: p,
                                        isEncrypted: I.proof.isEncrypted,
                                        siteId: x,
                                        clientId: y,
                                        forwardedClientId: k,
                                        noPaBubbleVersion: T,
                                        successCallback: R,
                                        failureCallback: L
                                    };
                                    if (e.isEncrypted) switch (I.proof.type) {
                                        case PROOF.Type.Email:
                                            e.proofConfirmation = I.proof.display;
                                            break;
                                        case PROOF.Type.SMS:
                                        case PROOF.Type.Voice:
                                            e.proofConfirmation = f.cleanseUsername(I.proof.display).slice(-4)
                                    }
                                    return e
                                }(),
                                i = new d(t);
                            n.onSetPendingRequest(!0), i.sendRequest()
                        }
                        break;
                    case m.OtherMicrosoftIdpFederation:
                    case m.LinkedIn:
                    case m.GitHub:
                    case m.Google:
                    case m.Facebook:
                    case m.Certificate:
                        n.onRedirect(I.redirectUrl, I.redirectPostParams || null);
                        break;
                    default:
                        n.onSwitchView(E[e].viewId)
                }
            }, n.forgotUsername_onClick = function () {
                document.location.assign(C)
            }, n.getSwitchToCredText = function () {
                return i.unwrap(n.switchToCredText)
            },
            function () {
                if (E[m.Password] = {
                        viewId: g.Password,
                        credId: "idA_PWD_SwitchToPassword",
                        credText: S.CT_RNGC_STR_SwitchToPassword_Link
                    }, E[m.RemoteNGC] = {
                        viewId: g.RemoteNGC,
                        credId: "idA_PWD_SwitchToRemoteNGC",
                        credText: S.CT_PWD_STR_SwitchToRemoteNGC_Link
                    }, E[m.Fido] = {
                        viewId: g.Fido,
                        credId: "idA_PWD_SwitchToFido",
                        credText: A
                    }, E[m.Certificate] = {
                        credId: "idA_PWD_SwitchToCertificate",
                        credText: S.CT_STR_CredentialPicker_Option_Certificate
                    }, E[m.OtherMicrosoftIdpFederation] = {
                        credId: "useMicrosoftLink",
                        credText: S.CT_PWD_STR_UseMicrosoft_Link
                    }, E[m.LinkedIn] = {
                        credId: "useLinkedInLink",
                        credText: S.CT_PWD_STR_UseLinkedIn_Link
                    }, E[m.GitHub] = {
                        credId: "useGitHubLink",
                        credText: S.CT_PWD_STR_UseGitHub_Link
                    }, E[m.Google] = {
                        credId: "useGoogleLink",
                        credText: S.CT_PWD_STR_UseGoogle_Link
                    }, E[m.Facebook] = {
                        credId: "useGoogleLink",
                        credText: S.CT_PWD_STR_UseFacebook_Link
                    }, E[m.Federation] = {
                        viewId: g.IdpRedirect,
                        credId: "redirectToIdpLink",
                        credText: S.CT_RNGC_STR_SwitchToFederated_Link
                    }, E[m.RemoteLogin] = {
                        viewId: g.RemoteLoginPolling,
                        credId: "remoteLoginLink",
                        credText: S.CT_PWD_STR_RemoteLoginLink
                    }, E[m.OneTimeCode] = {
                        viewId: g.OneTimeCode,
                        credId: "otcLoginLink",
                        credText: S.CT_PWD_STR_SwitchToOTC_Link
                    }, E[m.AccessPass] = {
                        viewId: g.AccessPass,
                        credId: "accessPassLink",
                        credText: S.CT_PWD_STR_Login_SwitchToAccessPassLink
                    }, A(S.CT_PWD_STR_SwitchToFidoCrossPlatform_Link), i.utils.arrayForEach(r, (function (e) {
                        if (E[e.credType]) {
                            var t = e.credType === u.credType,
                                i = e.credType === m.OneTimeCode,
                                a = t && i && e.proof.data === u.proof.data,
                                o = t && i && e.proof.type === u.proof.type;
                            (!t || i && !a || i && !o) && (n.credentialCount++, I = e)
                        }
                        e.credType === m.Fido && c.throwUnhandledExceptionOnRejection(s.isPlatformAuthenticatorAvailable().then(null, (function () {
                            return !1
                        })).then((function (e) {
                            e && (A(S.CT_PWD_STR_SwitchToFido_Link), n.isPlatformAuthenticatorAvailable(!0))
                        }))), e.credType === m.OfflineAccount && (n.credentialCount++, n.selectedCredShownOnlyOnPicker = !0)
                    })), I && 1 === n.credentialCount && (n.selectedCredType = I.credType, n.selectedCredShownOnlyOnPicker = !!I.shownOnlyOnPicker, n.switchToCredId = E[n.selectedCredType || m.Password].credId, n.switchToCredText = E[n.selectedCredType || m.Password].credText, n.selectedCredType === m.OneTimeCode)) switch (I.proof.type) {
                    case PROOF.Type.Email:
                        n.switchToCredText = f.format(S.CT_OTC_STR_SwitchToOtc_EmailLink, I.proof.display);
                        break;
                    case PROOF.Type.SMS:
                        n.switchToCredText = f.format(S.CT_OTC_STR_SwitchToOtc_SmsLink, I.proof.display);
                        break;
                    case PROOF.Type.Voice:
                        n.switchToCredText = f.format(S.CT_OTC_STR_SwitchToOtc_VoiceLink, I.proof.display)
                }
                n.showSwitchToCredPickerLink = (!P || n.isUserKnown) && (n.credentialCount > 1 || 1 === n.credentialCount && (v || n.selectedCredShownOnlyOnPicker))
            }()
    }
    i.components.register("cred-switch-link-control", {
        viewModel: v,
        template: t(439),
        synchronous: !p.ServerData.A || a.Helper.isStackSizeGreaterThan(p.ServerData.A),
        enableExtensions: !0
    }), e.exports = v
}, function (e, n, t) {
    var i = t(2),
        a = t(1),
        o = t(3),
        r = window,
        s = o.String;

    function c(e) {
        var n = this,
            t = e.serverData,
            i = e.title,
            a = e.subtitle,
            o = !1 !== e.useSubtitle,
            r = e.isSignUpView,
            c = t.b,
            d = t.str,
            l = t.AZ,
            u = t.W;
        n.title = null, n.subtitle = null, n.headerDescription = null,
            function () {
                var e = !(!c || !c.friendlyAppName);
                if (n.isSubtitleVisible = o && (e || a), n.title = i, n.subtitle = a, l && u) {
                    var t = r ? d.STR_SSSU_SignUp_HeaderDescription : d.STR_SSSU_SignIn_HeaderDescription;
                    n.headerDescription = s.format(t, u)
                }
            }()
    }
    i.components.register("header-control", {
        viewModel: c,
        template: t(442),
        synchronous: !r.ServerData.A || a.Helper.isStackSizeGreaterThan(r.ServerData.A)
    }), e.exports = c
}, function (e, n, t) {
    var i = t(2),
        a = t(3).String;
    e.exports = function (e, n) {
        var t = this,
            o = null;
        t.placeholderTextboxMethods = i.observable(), t.value = i.observable(n || ""), t.focused = i.observable(!1).extend({
            notify: "always"
        }), t.error = e, t.textbox_onUpdateFocus = function (e) {
            t.focused(e)
        }, t.getTrimmedValue = function (e) {
            var n = a.trim(t.value() || "");
            return e && e > 0 && (n = n.substring(0, e)), n
        }, t.placeholderTextboxMethods.subscribe((function (e) {
            e && !o && function (e) {
                var n = t.value.peek();
                e.toggleVisibility(!n), o = t.value.subscribe((function (n) {
                    e.toggleVisibility(!n)
                }))
            }(e)
        }))
    }
}, function (e, n, t) {
    var i = t(2),
        a = t(1),
        o = t(4),
        r = window;

    function s(e) {
        var n = this,
            t = "placeholder" in document.createElement("input"),
            r = e.serverData,
            s = e.hintText,
            c = e.hintCss || "placeholder",
            d = r.T;
        n.onUpdateFocus = o.create(), n.hintText = s, n.usePlaceholderAttribute = !1, n.placeholderVisible = i.observable(!0), n.hintCss = i.pureComputed((function () {
            var e = {};
            return c && i.utils.arrayForEach(c.split(" "), (function (n) {
                e[n] = !0
            })), e
        })), n.placeholderText = i.pureComputed((function () {
            if (n.usePlaceholderAttribute) return n.hintText
        })), n.toggleVisibility = function (e) {
            n.placeholderVisible(e)
        }, n.placeholder_onClick = function () {
            n.onUpdateFocus(!0)
        }, t && a.Helper.isPlaceholderAttributeAllowed(d) && (n.usePlaceholderAttribute = !0)
    }
    i.components.register("placeholder-textbox-field", {
        viewModel: s,
        template: t(438),
        synchronous: !r.ServerData.A || a.Helper.isStackSizeGreaterThan(r.ServerData.A),
        enableExtensions: !0
    }), e.exports = s
}, function (e, n, t) {
    e.exports = t.p + "content/images/picker_account_msa_4e3619a499fd74c0c66d5215514b566a.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/picker_account_msa_2d8f86059be176833897099ee6ddedeb.svg"
}, function (e, n, t) {
    var i = t(2);
    n.errorComputed = function (e) {
        var n = i.observable(),
            t = i.observable(),
            a = i.pureComputed(e).extend({
                notify: "always"
            }),
            o = i.pureComputed((function () {
                if (a()) return a();
                if (n()) {
                    var e = n();
                    return n(null), e
                }
                return null
            }));
        return i.utils.extend(i.pureComputed((function () {
            if (o()) return o();
            if (t()) {
                var e = t();
                return t(null), e
            }
            return null
        })), {
            isBlocking: function () {
                return null !== o()
            },
            setBlockingError: function (e) {
                n(e)
            },
            setNonBlockingError: function (e) {
                t(e)
            },
            setError: function (e, i) {
                i ? n(e) : t(e)
            },
            clearNonBlockingError: function () {
                t(null), t.valueHasMutated()
            }
        })
    }
}, function (e, n) {
    var t = n.stringToArrayBuffer = function (e) {
            for (var n = new ArrayBuffer(e.length), t = new Uint8Array(n), i = 0, a = e.length; i < a; ++i) t[i] = e.charCodeAt(i);
            return n
        },
        i = n.arrayBufferToString = function (e) {
            return String.fromCharCode.apply(null, new Uint8Array(e))
        };
    n.base64UrlStringToArrayBuffer = function (e) {
        var n = e.replace(/[-_]/g, (function (e) {
                switch (e) {
                    case "-":
                        return "+";
                    case "_":
                        return "/"
                }
            })),
            i = atob(n);
        return t(i)
    }, n.arrayBufferToBase64UrlString = function (e) {
        var n = i(e),
            t = btoa(n);
        return a(t)
    }, n.objectToBase64UrlString = function (e) {
        if (e) {
            var n = JSON.stringify(e),
                t = btoa(n);
            return a(t)
        }
        return null
    };
    var a = n.base64ToBase64UrlString = function (e) {
        return e.replace(/[+/=]/g, (function (e) {
            switch (e) {
                case "+":
                    return "-";
                case "/":
                    return "_";
                case "=":
                    return ""
            }
        }))
    }
}, function (e, n, t) {
    e.exports = t.p + "content/images/credentialoptions/cred_option_fido_white_4631a1537323be36c76aa5c13b3c9edd.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/credentialoptions/cred_option_fido_white_2f0ec557a5c4580eedc58f64a1946a00.svg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/credentialoptions/cred_option_fido_eeb097cefb5f08917c48faff86e945ae.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/credentialoptions/cred_option_fido_498a4d7bb984e5436a52c8b52f3ab0f7.svg"
}, function (e, n) {
    var t;
    t = function () {
        return this
    }();
    try {
        t = t || new Function("return this")()
    } catch (i) {
        "object" == typeof window && (t = window)
    }
    e.exports = t
}, function (e, n, t) {
    var i = t(11),
        a = t(0),
        o = t(5),
        r = t(7),
        s = {
            DeviceAuth: {
                PageId: "ConvergedRemoteConnect",
                ActionId: "OAuth2DeviceAuth",
                ConfirmationViewId: a.PaginatedState.RemoteConnectCanaryValidation
            },
            FidoAuth: {
                PageId: "PaginatedLogin",
                ActionId: "FidoGet",
                ConfirmationViewId: a.PaginatedState.PartnerCanaryValidation
            }
        },
        c = l.PartnerCanaryScenario = {
            Undefined: 0,
            Fido: 1
        },
        d = l.CanaryValidationSuccessAction = {
            SwitchView: 1,
            Redirect: 2
        };

    function l(e) {
        var n = e,
            t = n.af,
            u = n.bX,
            p = !!n.R,
            f = !!n.BL,
            g = n.j,
            m = n.v,
            b = n.aA;
        this.validateAsync = function () {
            return new o((function (e, n) {
                var o = function () {
                    if (p) return s.DeviceAuth;
                    if (b === c.Fido) return s.FidoAuth;
                    throw "Canary Validation: Flow IDs not known."
                }();
                o.Canary = t;
                var v = function () {
                    if (f) return {
                        action: d.Redirect,
                        redirectUrl: g,
                        redirectPostParams: m,
                        isIdpRedirect: !1
                    };
                    return {
                        action: d.SwitchView
                    }
                }();
                new i({
                    checkApiCanary: !1,
                    withCredentials: !0
                }).Json({
                    url: u,
                    eventId: r.EventIds.Api_CanaryValidation
                }, o, (function () {
                    e(v)
                }), (function (e) {
                    n(new l.CanaryValidationError(e, o.ConfirmationViewId, v))
                }), a.DefaultRequestTimeout)
            }))
        }
    }
    l.CanaryValidationError = function (e, n, t) {
        this.name = "CanaryValidationError", this.message = "Canary validation failed, user confirmation required.", this.stack = (new Error).stack, this.innerError = e, this.confirmationViewId = n, this.postConfirmationAction = t
    }, e.exports = l
}, function (e, n, t) {
    var i = t(12),
        a = t(3),
        o = t(1),
        r = t(11),
        s = t(5),
        c = t(291),
        d = t(292),
        l = window,
        u = o.QueryString,
        p = o.Cookies,
        f = a.Array;
    e.exports = function (e) {
        var n = e,
            t = n.bsso || {
                enabled: !1
            },
            a = n.Az,
            o = n.B1,
            g = !1 !== n.checkApiCanary,
            m = t.cookieNames,
            b = null;

        function v() {
            var e = new Date;
            e.setSeconds(e.getSeconds() + 60), p.writeWithExpiration(m.ssoPulled, "1", !a, e.toUTCString());
            var n = l.location.href;
            return n = u.appendOrReplace(n, "sso_reload", "true"), t.reloadOnFailure || "select_account" !== u.extract("prompt").toLowerCase() || (n = u.appendOrReplace(n, "prompt", "")), n
        }

        function h(e) {
            b.traces.push(e)
        }

        function _(e, n) {
            b.data[e] = n
        }

        function w(e) {
            return b.result = e.newSessions ? "UserList" : "Reload", C().then((function () {
                return e
            }))
        }

        function S(e) {
            return b.result = "Error", e instanceof c.Error ? "OSError" === e.code && e.externalData && e.externalData.error ? b.error = e.externalData.error : b.error = e.code : b.error = e, C().then((function () {
                return s.reject(e)
            }))
        }

        function C() {
            return new s((function (e) {
                try {
                    l.console && l.console.info("BSSO Telemetry: " + i.stringify(b))
                } catch (n) {}
                t.telemetry.url ? new r({
                    checkApiCanary: g
                }).Beacon({
                    url: t.telemetry.url
                }, b, e, e, 500) : e()
            }))
        }
        this.loginWindowsUserAsync = function (e) {
            return t.enabled ? function (e) {
                if (!l.navigator || "function" != typeof l.navigator.msLaunchUri) return _("BSSO.info", "not-supported"), h("window.navigator.msLaunchUri is not available for _loginWindowsUser"), s.reject("bssoNotSupported");
                var n = "abort" === t.initiatePullTimeoutAction;
                return new d({
                    logMessage: h,
                    logDataPoint: _
                }, t.initiatePullTimeoutMs, t.overallTimeoutMs, n).loginWindowsUserAsync(e).then((function (e) {
                    return e.reload ? (h("SSO cookie detected. Refreshing page."), v()) : s.reject("error")
                }))
            }(e).then(w, S) : s.reject("bssoDisabled")
        }, this.pullBrowserSsoCookieAsync = function () {
            var e, n = t.failureRedirectUrl || t.reloadOnFailure,
                r = t.type;
            return t.enabled ? ("windows" === r ? e = function () {
                if (!l.navigator || "function" != typeof l.navigator.msLaunchUri) return _("BSSO.info", "not-supported"), h("window.navigator.msLaunchUri is not available for _pullBrowserSsoCookie"), s.reject("bssoNotSupported");
                var e = p.getCookie(m.ssoTiles) || t.forceTiles;
                if (!e && p.getCookie(m.ssoPulled)) return _("BSSO.info", "throttled"), h("Cookie pull throttled"), s.reject("throttled");
                var n = "tbauth://login.windows.net?context=" + encodeURIComponent(l.location.href.split("/", 3).join("/")) + (t.nonce ? "&request_nonce=" + encodeURIComponent(t.nonce) : "") + (t.rid ? "&rid=" + encodeURIComponent(t.rid) : ""),
                    a = n;
                e && (a = u.appendOrReplace(a, "user_id", "*"), p.remove(m.ssoTiles));
                var o = "abort" === t.initiatePullTimeoutAction;
                return new d({
                    logMessage: h,
                    logDataPoint: _
                }, t.initiatePullTimeoutMs, t.overallTimeoutMs, o).pullBrowserSsoCookieAsync(a).then((function (e) {
                    if (e.reload) return h("SSO cookie detected. Refreshing page."), {
                        redirectUrl: v()
                    };
                    if (e.userList) {
                        var t = function (e, n) {
                            var t = [],
                                a = i.parse(e).users;
                            a && a.length > 0 ? (f.forEach(a, (function (e) {
                                var i = {
                                    ssoUniqueId: e.unique_id,
                                    displayName: e.display_name || "",
                                    name: e.upn,
                                    isWindowsSso: !0,
                                    isSignedIn: !0,
                                    url: n
                                };
                                t.push(i)
                            })), h("User list processed. List: " + i.stringify(t))) : h("User list is empty.");
                            return t
                        }(e.userList, n);
                        return t.length > 0 ? {
                            newSessions: t
                        } : s.reject("noUsers")
                    }
                }))
            }() : "chrome" === r && (e = new c({
                logMessage: h,
                logDataPoint: _
            }, t.nonce, "login.microsoftonline.com", a, o).getCookiesAsync().then((function (e) {
                if (!e || !e.length) return s.reject(new c.Error("PageException", "Extension returned no cookies"));
                for (var n = 0, t = e.length; n < t; ++n) {
                    var i = e[n].data; - 1 !== i.indexOf(";") && (i = i.substr(0, i.indexOf(";"))), p.write(e[n].name, i, !a)
                }
                return h("SSO cookie detected. Refreshing page."), {
                    redirectUrl: v()
                }
            })).then(null, (function (e) {
                return p.write(m.aadSso, e.toCookieString(), !a), h("Error: " + e.toString()), s.reject(e)
            }))), e.then((function (e) {
                return n && !e.redirectUrl ? s.reject("silentPullFailed") : e
            })).then(w, S).then(null, (function (e) {
                return n ? t.reloadOnFailure ? {
                    redirectUrl: v()
                } : {
                    redirectUrl: t.failureRedirectUrl
                } : s.reject(e)
            }))) : s.reject("bssoDisabled")
        }, this.isEnabled = function () {
            return !!t.enabled
        }, t.enabled && (b = {
            result: null,
            error: null,
            type: t.telemetry.type || null,
            data: {},
            traces: []
        }, t.initiatePullTimeoutMs = t.initiatePullTimeoutMs || t.overallTimeoutMs, t.initiatePullTimeoutAction = t.initiatePullTimeoutAction || "abort", h("BrowserSSO Initialized"))
    }
}, function (e, n, t) {
    var i = t(3),
        a = t(6),
        o = i.Array,
        r = {
            mergeSessions: function (e, n, t) {
                var i = [];
                return o.forEach(n, (function (n) {
                    var a = function (e, n) {
                        for (var t = 0; t < n.length; t++)
                            if (n[t].name === e.name && n[t].idp === e.idp) return t;
                        return -1
                    }(n, e); - 1 === a ? (n.isWindowsSso ? e.unshift(n) : e.push(n), i.push(n)) : n.isWindowsSso ? (e.splice(a, 1), e.unshift(n), i.push(n)) : t && (e.splice(a, 1), e.push(n), i.push(n))
                })), i
            },
            parseMeControlSessions: function (e) {
                return o.map(e, (function (e) {
                    var n = e.firstName,
                        t = e.lastName;
                    return t && (n ? n += " " + t : n = t), {
                        id: e.sessionId,
                        fullName: n,
                        name: e.memberName || e.signInName,
                        displayName: e.memberName || e.signInName,
                        idp: a.SessionIdp.Msa,
                        isOtherIdp: !0,
                        isSignedIn: e.isSignedIn || 1 === e.authenticatedState || 2 === e.authenticatedState,
                        isWindowsSso: e.isWindowsSso || !1,
                        isMeControlSession: !0,
                        isGitHubFed: e.isGitHubFed || !1
                    }
                }))
            },
            parseBssoSessions: function (e) {
                return o.map(e, (function (e) {
                    return {
                        ssoUniqueId: e.ssoUniqueId,
                        name: e.name,
                        displayName: e.displayName,
                        idp: a.SessionIdp.Aad,
                        ssoLink: e.url,
                        isWindowsSso: e.isWindowsSso,
                        isSignedIn: e.isSignedIn
                    }
                }))
            }
        };
    e.exports = r
}, function (e, n, t) {
    var i = t(2);
    e.exports = function (e, n, t) {
        var a = this,
            o = e,
            r = o.Bc,
            s = o.BX,
            c = null;
        a.paginationControlMethods = n || i.observable(), a.backgroundLogoUrl = t || i.observable(), a.animationEnd = i.pureComputed((function () {
            return a.paginationControlMethods() && a.paginationControlMethods().view_onAnimationEnd
        })), a.showBackgroundLogoHolder = i.pureComputed((function () {
            return a.backgroundLogoUrl() && a.showLogo()
        })), a.showErrorPageDebugDetails = i.pureComputed((function () {
            return a.paginationControlMethods() && a.paginationControlMethods().currentViewHasMetadata("extraDebugDetails")
        })), a.showFooterControl = i.pureComputed((function () {
            return !r && a.paginationControlMethods() && a.paginationControlMethods().hasInitialViewShown()
        })), a.showLogo = i.pureComputed((function () {
            return !(a.paginationControlMethods() && a.paginationControlMethods().currentViewHasMetadata("hideLogo"))
        })), a.showLwaDisclaimer = i.pureComputed((function () {
            return a.paginationControlMethods() && !a.paginationControlMethods().currentViewHasMetadata("hideLwaDisclaimer")
        })), a.showPageLevelTitleControl = i.pureComputed((function () {
            return s && !(a.paginationControlMethods() && a.paginationControlMethods().currentViewHasMetadata("hidePageLevelTitleAndDesc"))
        })), a.useWiderWidth = i.pureComputed((function () {
            return a.paginationControlMethods() && a.paginationControlMethods().currentViewHasMetadata("wide")
        })), a.onLoad = function () {
            a.paginationControlMethods().restoreState(c), c = null
        }, a.onUnload = function (e) {
            c = e
        }
    }
}, function (e, n, t) {
    var i = t(2),
        a = t(1),
        o = t(324),
        r = window;

    function s(e) {
        var n = this,
            t = e.serverData.isCustomPerf,
            a = 0,
            s = !1,
            c = !1;

        function d(e) {
            var n = {};
            if (e.toJSON) return e.toJSON();
            for (var t in e) n[t] = e[t];
            return n
        }
        n.timeOnPage = i.observable(null), n.recordSubmit = function () {
            r.performance && r.performance.timing && n.timeOnPage((new Date).getTime() - r.performance.timing.loadEventEnd)
        }, n.setPageLoadCompleted = function () {
            s = !0, setTimeout((function () {
                ! function () {
                    if (c || !s) return;
                    c = !0;
                    var e = function () {
                        var e = r.performance,
                            n = r.navigator,
                            t = {};
                        if (!e) return null;
                        e.navigation && (t.navigation = d(e.navigation));
                        e.timing && (t.timing = d(e.timing), a > 0 && (t.timing.customLoadEventEnd = a));
                        e.getEntries && (t.entries = i.utils.arrayMap(e.getEntries(), d));
                        n.connection && (t.connection = d(n.connection));
                        return t
                    }();
                    try {
                        o.SendTelemetryPerfData(e, "LPerf")
                    } catch (n) {}
                }()
            }), 0)
        }, n.setCustomPageLoadCompletedTime = function (e) {
            a = e || (new Date).getTime()
        }, t || setTimeout((function () {
            n.setPageLoadCompleted()
        }), 100)
    }
    i.components.register("instrumentation-control", {
        viewModel: s,
        template: t(325),
        synchronous: !r.ServerData.A || a.Helper.isStackSizeGreaterThan(r.ServerData.A),
        enableExtensions: !0
    }), e.exports = s
}, function (e, n, t) {
    var i = t(2),
        a = t(1),
        o = window;
    i.components.register("logo-control", {
        template: t(326),
        synchronous: !o.ServerData.A || a.Helper.isStackSizeGreaterThan(o.ServerData.A)
    })
}, function (e, n, t) {
    var i = t(2),
        a = t(3),
        o = t(1),
        r = t(4),
        s = null,
        c = null,
        d = t(334),
        l = window,
        u = null;

    function p(e, n) {
        var c = this,
            l = !1,
            p = e.serverData,
            f = e.showButtons || !1,
            g = e.showFooterLinks,
            m = !1 !== e.showFooterLogo,
            b = e.useWizardBehavior,
            v = e.hideFromAria || i.observable(!1),
            h = p.bF;
        p.s;

        function _(e, n) {
            var t = ["Microsoft", "OneDrive", "Skype", "Bing", "Xbox", "Word", "Outlook", "Office", "Excel", "PowerPoint", "Cortana", "SkypeDialer", "Health", "MileIQ", "Beam", "MSN", "Minecraft"];
            return (e < 0 || e >= t.length) && (e = 0), a.String.format("./AppCentipede_{0}{1}.{2}", t[e], n ? "_white" : "", l ? "svg" : "png")
        }
        c.useLayoutTemplates = !0, c.templateNodes = {}, c.showButtons = f, c.footer = {
                showLinks: g,
                showLogo: m
            }, c.centipede = {
                getLightUrl: function () {
                    return d(_(h, !0))
                },
                getDarkUrl: function () {
                    return d(_(h, !1))
                }
            }, c.hideFromAria = v, c.isInternalModeEnabled = "1" === o.QueryString.extract("psi"), c.viewModel = null, c.viewAgreement = i.observable(!1), c.agreementType = i.observable(), c.isLightboxTemplate = i.observable(!0), c.isVerticalSplitTemplate = i.observable(!1), c.isTemplateLoaded = i.observable(!1), c.onFooterAgreementClick = r.create(), c.footer_agreementClick = function (e) {
                c.onFooterAgreementClick(e)
            }, c.agreement_backButtonClick = function () {
                c.viewAgreement(!1)
            }, c.showAgreement = function (e) {
                c.agreementType(e), c.viewAgreement(!0)
            }, c.updateBranding = function (e) {
                var n;
                n = e, s.getLayoutTemplateConfig(n).layoutType === u.VerticalSplit ? (c.isLightboxTemplate(!1), c.isVerticalSplitTemplate(!0), t.e(34).then(function () {
                    t(486), c.isTemplateLoaded(!0)
                }.bind(null, t))["catch"](t.oe)) : (c.isVerticalSplitTemplate(!1), c.isLightboxTemplate(!0))
            },
            function () {
                if (l = o.Helper.isSvgImgSupported(), n && i.utils.arrayForEach(n, (function (e) {
                        e.id && (c.templateNodes[e.id] = e.childNodes)
                    })), b) {
                    0
                }
            }()
    }
    s = t(14), c = t(0), u = c.LayoutTemplateType, i.components.register("master-page", {
        viewModel: {
            createViewModel: function (e, n) {
                return new p(e, n.templateNodes)
            }
        },
        template: t(403),
        synchronous: !l.ServerData.A || o.Helper.isStackSizeGreaterThan(l.ServerData.A),
        enableExtensions: !0
    }), e.exports = p
}, function (e, n, t) {
    var i = t(2),
        a = t(1),
        o = window;

    function r() {
        var e = this;
        e.isAppBranding = i.observable(!1), e.backgroundStyle = i.observable(), e.smallImageUrl = i.observable(), e.backgroundImageUrl = i.observable(), e.useImageMask = i.observable(!1), e.useTransparentLightBox = i.observable(!1), e.updateBranding = function (n) {
            e.isAppBranding(!!n.backgroundLogoUrl), e.backgroundStyle(n.color), e.smallImageUrl(n.smallImageUrl), e.backgroundImageUrl(n.backgroundImageUrl), e.useImageMask(!!n.useImageMask), e.useTransparentLightBox(!!n.useTransparentLightBox)
        }
    }
    i.components.register("background-image-control", {
        viewModel: r,
        template: t(406),
        synchronous: !o.ServerData.A || a.Helper.isStackSizeGreaterThan(o.ServerData.A),
        enableExtensions: !0
    }), e.exports = r
}, function (e, n, t) {
    var i = t(2),
        a = t(1),
        o = window;
    i.components.register("environment-banner-control", {
        template: t(407),
        synchronous: !o.ServerData.A || a.Helper.isStackSizeGreaterThan(o.ServerData.A)
    })
}, function (e, n, t) {
    var i = t(2),
        a = t(1),
        o = window;

    function r(e) {
        var n = e.isVerticalSplitTemplate;
        this.isVerticalSplitTemplate = n || !1
    }
    i.components.register("content-control", {
        viewModel: r,
        template: t(408),
        synchronous: !o.ServerData.A || a.Helper.isStackSizeGreaterThan(o.ServerData.A),
        enableExtensions: !0
    }), e.exports = r
}, function (e, n, t) {
    var i = t(2),
        a = t(0),
        o = t(1),
        r = t(422),
        s = t(4),
        c = t(9),
        d = t(19),
        l = t(10).getInstance(window.ServerData),
        u = t(7),
        p = window,
        f = document,
        g = f.head,
        m = a.PaginatedState.Previous,
        b = a.AnimationState,
        v = a.AnimationName,
        h = a.AnimationTimeout,
        _ = o.Helper;

    function w(e, n, t, a) {
        var o = this,
            w = p.ServerData,
            S = e.initialViewId || null,
            C = e.currentViewId || null,
            x = e.initialSharedData || {},
            y = e.initialError,
            k = e.enableCssAnimation,
            T = e.disableAnimationIfAnimationEndUnsupported,
            P = d.getInstance(w),
            D = w.BS,
            E = t,
            I = a,
            A = null,
            R = b.End,
            L = !1,
            O = null,
            B = null,
            N = !1,
            U = null,
            F = i.observable();

        function M() {
            var e = o.currentViewIndex();
            return E[e] ? E[e]() : null
        }

        function V(e) {
            F(null), o.view_onSetIdentityBackButtonState(), o.isInitialState = A.getState().isInitialState, o.onShowView(I[e].metadata, e), F(e), o.hasInitialViewShown(!0);
            var n = document.querySelectorAll("[data-viewid]");
            if (P && n && n.length > 0) try {
                P.applyClientEventBindings(n[0])
            } catch (t) {}
        }

        function j(e, n) {
            var t = F(),
                i = o.onLoadView(e);
            if (P && t) try {
                P.set("viewId", t, !0), P.post(!0)
            } catch (a) {}
            i ? c.throwUnhandledExceptionOnRejection(i.then((function () {
                H(t, e, n)
            }))) : H(t, e, n)
        }

        function H(e, n, t) {
            N && (e !== n || t) && (!y || e) ? (T && null === O && (U = setTimeout((function () {
                N = !1, o.hidePaginatedView(!1), o.hidePaginatedView.hideSubView(!1), o.onSetLightBoxFadeIn(!1), R = b.End, j(n)
            }), h)), O = e, B = n, R = b.Begin, o.view_onAnimationEnd()) : (o.animate(v.None), o.view_onAnimationEnd(), V(n), o.unsafe_displayName(o.showIdentityBanner() ? _.htmlUnescape(o.sharedData.displayName || p.ServerData.i) : ""))
        }

        function W(e) {
            var n = M();
            if (n) {
                e && n.saveSharedData(o.sharedData);
                var t = n.getState(),
                    i = A.getState();
                i.viewState = t, A.replaceState(i)
            }
        }

        function $() {
            L = !0, W(!1)
        }

        function G() {
            L = !1
        }

        function q(e) {
            o.initialError = null, j(e.viewId, e.forceTransitionAnimation)
        }
        o.views = n, o.viewInterfaces = t, o.sharedData = x, o.initialError = y, o.isInitialState = !1, o.showLogo = e.showLogo || !1, o.bannerLogoUrl = e.bannerLogoUrl || "", o.isBackButtonVisible = i.observable(!1), o.isBackButtonFocused = i.observable(!1), o.backButtonDescribedBy = i.observable(null), o.hasInitialViewShown = i.observable(!1), o.unsafe_displayName = i.observable(), o.hidePaginatedView = i.utils.extend(i.observable(!1), {
                hideSubView: i.observable(!1)
            }), o.animate = i.utils.extend(i.observable(v.None), {
                animateBanner: i.observable(!1),
                isSlideOutNext: i.pureComputed((function () {
                    return o.animate() === v.SlideOutNext
                })),
                isSlideInNext: i.pureComputed((function () {
                    return o.animate() === v.SlideInNext
                })),
                isSlideOutBack: i.pureComputed((function () {
                    return o.animate() === v.SlideOutBack
                })),
                isSlideInBack: i.pureComputed((function () {
                    return o.animate() === v.SlideInBack
                }))
            }), o.showIdentityBanner = i.pureComputed((function () {
                var e = F();
                return e && I[e].metadata && I[e].metadata.showIdentityBanner
            })), o.currentViewIndex = i.pureComputed((function () {
                var e = F();
                return I[e] && !isNaN(I[e].index) ? I[e].index : -1
            })), o.onCancel = s.create(), o.onUnload = s.create(), o.onLoadView = s.create(), o.onShowView = s.create(), o.onSetLightBoxFadeIn = s.create(), o.onAnimationStateChange = s.create(), o.dispose = function () {
                o.onUnload(A.getState().viewId), A.dispose()
            }, o.setDefaultFocus = function () {
                var e = M();
                e && e.setDefaultFocus && e.setDefaultFocus()
            }, o.getCurrentViewId = function () {
                return F()
            }, o.getSharedData = function () {
                return o.sharedData || {}
            }, o.getSharedDataItem = function (e) {
                return o.getSharedData()[e]
            }, o.getCurrentView = function () {
                return {
                    viewId: F(),
                    viewInterface: M()
                }
            }, o.setSharedDataItem = function (e, n) {
                o.sharedData || (o.sharedData = {}), o.sharedData[e] = n
            }, o.saveSharedDataOnCurrentView = function () {
                var e = M();
                e && e.saveSharedData(o.sharedData)
            }, o.currentViewHasMetadata = function (e) {
                var n = F();
                return !!I[n] && !!I[n].metadata[e]
            }, o.submitCurrentView = function () {
                var e = M();
                e && e.submit && e.submit()
            }, o.identityBanner_onBackButtonClick = function () {
                o.view_onSwitchView(m)
            }, o.restoreState = function (e) {
                var n = A.getState();
                e && e !== C && (n = {
                    viewId: C = e
                }, A.pushState(n)), setTimeout((function () {
                    j(n.viewId)
                }), 0)
            }, o.view_onLoad = function () {
                var e = A.getState(),
                    n = M();
                if (n) {
                    n.restoreState(e ? e.viewState : null);
                    var t = o.getCurrentViewId();
                    if (l.setViewViewModel(n, t, I[t].metadata), l.logViewState(n), P && t) try {
                        P.set("viewId", t, !0)
                    } catch (i) {}
                    o.setDefaultFocus()
                }
            }, o.view_onSwitchView = function (e, n, t) {
                l.logEvent({
                    eventType: "view_onSwitchView",
                    eventId: u.EventIds.Event_PaginationControl_ViewSwitch,
                    eventLevel: u.EventLevel.Critical,
                    eventArgs: {
                        viewId: e,
                        replaceHistory: n
                    },
                    eventOptions: {
                        hidingMode: u.HidingMode.None
                    }
                }), l.switchView(M());
                var i = A.getState() || {};
                t && (i.forceTransitionAnimation = t, A.replaceState(i)), o.initialError = null, e === m ? (L = !0, i.isInitialState ? o.onCancel() : A.goBack()) : (L = !1, W(!0), (n |= e === F() && !1 !== n) ? (i.viewId = e, i.viewState = null, A.replaceState(i)) : (i = {
                    viewId: e
                }, A.pushState(i)), j(e, t))
            }, o.view_onCancel = function () {
                o.onCancel()
            }, o.view_onSetIdentityBackButtonState = function (e, n, t) {
                o.isBackButtonVisible(e || !1), o.isBackButtonFocused(n || !1), o.backButtonDescribedBy(t || null)
            }, o.view_onAnimationEnd = function () {
                switch (o.onAnimationStateChange(R, L, !!O), R) {
                    case b.Begin:
                        o.animate(v.None), o.animate.animateBanner(!O || I[O].metadata.showIdentityBanner !== I[B].metadata.showIdentityBanner), R = b.RenderNewView, O ? o.animate(L ? v.SlideOutBack : v.SlideOutNext) : o.view_onAnimationEnd();
                        break;
                    case b.RenderNewView:
                        V(B), o.animate.animateBanner() ? o.hidePaginatedView(!0) : o.hidePaginatedView.hideSubView(!0), o.unsafe_displayName(o.showIdentityBanner() ? _.htmlUnescape(o.sharedData.displayName || p.ServerData.i) : ""), R = b.AnimateNewView, O ? setTimeout(o.view_onAnimationEnd, 0) : o.onSetLightBoxFadeIn(!0);
                        break;
                    case b.AnimateNewView:
                        U && (clearTimeout(U), U = null), R = b.End, o.hidePaginatedView(!1), o.hidePaginatedView.hideSubView(!1), o.animate(L ? v.SlideInBack : v.SlideInNext)
                }
            },
            function () {
                N = k && _.isCSSAnimationSupported(), A = new r($, G, q);
                var e = null;
                if (null === S && null === C || (S = null === S ? C : S, C = null === C ? S : C, e = {
                        viewId: S,
                        isInitialState: !0
                    }, A.replaceState(e)), C !== S && (e = {
                        viewId: C
                    }, A.pushState(e)), D) {
                    var n = f.createElement("style");
                    n.type = "text/css", n.innerHTML = ".inner,.promoted-fed-cred-box,.sign-in-box,.new-session-popup-v2sso,.debug-details-banner,.vertical-split-content{min-width:0;}", g.appendChild(n)
                }
            }()
    }

    function S(e) {
        var n = {};
        return i.utils.arrayForEach(["wide", "hideLogo", "hideDefaultLogo", "dynamicBranding", "hideLwaDisclaimer", "showIdentityBanner", "showFedCredButton", "hidePageLevelTitleAndDesc", "extraDebugDetails"], (function (t) {
            var i = e.getAttribute("data-" + t);
            i && (n[t] = "true" === i.toLowerCase())
        })), n
    }
    i.components.register("pagination-control", {
        viewModel: {
            createViewModel: function (e, n) {
                var t = [],
                    a = [],
                    o = {},
                    r = 0;
                return i.utils.arrayForEach(n.templateNodes, (function (e) {
                    var n;
                    1 === e.nodeType && null !== (n = e.getAttribute("data-viewid")) && (t.push(e), a.push(i.observable()), n = isNaN(n) ? n : parseInt(n), o[n] = {
                        index: r++,
                        metadata: S(e)
                    })
                })), new w(e, t, a, o)
            }
        },
        template: t(423),
        synchronous: !p.ServerData.A || o.Helper.isStackSizeGreaterThan(p.ServerData.A),
        enableExtensions: !0
    })
}, function (e, n, t) {
    var i = t(2),
        a = t(1),
        o = t(4),
        r = window;

    function s(e) {
        var n = e.isPlatformAuthenticatorAvailable;
        this.isPlatformAuthenticatorAvailable = n, this.onRegisterDialog = o.create(), this.onUnregisterDialog = o.create()
    }
    i.components.register("fido-help-dialog-content-control", {
        viewModel: s,
        template: t(441),
        synchronous: !r.ServerData.A || a.Helper.isStackSizeGreaterThan(r.ServerData.A),
        enableExtensions: !0
    }), e.exports = s
}, function (e, n, t) {
    var i = t(2),
        a = t(1),
        o = t(4),
        r = window;

    function s(e, n) {
        var t = this,
            i = e.dialogId,
            a = e.data,
            r = n;
        t.onRegisterDialog = o.create(), t.onUnregisterDialog = o.create(), t.dispose = function () {
            t.onUnregisterDialog(i)
        }, t.onRegisterDialog(i, {
            templateNodes: r,
            data: a
        })
    }
    i.components.register("dialog-content-control", {
        viewModel: {
            createViewModel: function (e, n) {
                return new s(e, n.templateNodes)
            }
        },
        template: "\x3c!-- --\x3e",
        synchronous: !r.ServerData.A || a.Helper.isStackSizeGreaterThan(r.ServerData.A),
        enableExtensions: !0
    }), e.exports = s
}, function (e, n, t) {
    e.exports = t.p + "content/images/documentation_white_f1d76f59f87ee716791873beaa56f42b.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/documentation_white_c8c3f0c876ac28614d1d0c2068289237.svg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/documentation_9628e22a6bfb1edc59e81064a666b614.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/documentation_bcb4d1dc4eae64f0b2b2538209d8435a.svg"
}, function (e, n, t) {
    var i = window;
    t.p = i.ServerData.a, i.ServerData.urlImagePath = i.ServerData.a + "images/";
    var a = t(2),
        o = t(61),
        r = t(0),
        s = t(1),
        c = t(64),
        d = t(6),
        l = t(65);
    t(19).getInstance(window.ServerData);
    var u = r.LoginMode,
        p = s.Helper,
        f = s.QueryString,
        g = s.Cookies,
        m = d.LoginOption,
        b = !1;

    function v(e) {
        ! function (e) {
            if (e) {
                (new Image).src = e
            }
        }(e.aP),
        function (e) {
            if (e.A7 && null !== new RegExp("Windows NT ([0-9]{1,}[.0-9]{0,})").exec(navigator.userAgent) && parseFloat(RegExp.$1) < 6 && p.getIEVersion() >= 7) try {
                document.getElementById("ev").src = e.am
            } catch (n) {}
        }(e)
    }
    o.applyExtensions(a), a.utils.registerEventHandler(i, "load", (function () {
        var e = i.ServerData;
        if (e.str = c.getStrings("str", e), e.html = c.getStrings("html", e), e.arrProofData = c.getStrings("proofData"), !b && ! function (e) {
                try {
                    if (top !== self && top.location.replace(self.location.href), 2 === e.A9 && e.urlFed) return function (e, n, t, i) {
                        var a = i.sFedQS;
                        n === m.NothingChecked && (a = f.appendOrReplace("?" + a, "wctx", "LoginOptions%3D3%26" + f.extract("wctx", "?" + a)).substr(1));
                        e = f.appendOrReplace(e, "cbcxt", encodeURIComponent(decodeURIComponent(f.extract("cbcxt")))), e = f.appendOrReplace(e, "vv", encodeURIComponent(decodeURIComponent(f.extract("cbcxt")))), e = f.appendOrReplace(e, "username", encodeURIComponent(t)), e = f.appendOrReplace(e, "mkt", encodeURIComponent(decodeURIComponent(f.extract("mkt")))), e = f.appendOrReplace(e, "lc", encodeURIComponent(decodeURIComponent(f.extract("lc")))), document.location.replace(f.append(e, a))
                    }(e.urlFed, e.Am, decodeURIComponent(f.extract("username")), e), !0;
                    if (!g.enabled()) return document.location = e.Z, !0
                } catch (n) {
                    e.f = u.GenericError
                }
                return !1
            }(e)) switch (b = !0, e.f) {
            case u.GenericError:
            case u.GenericErrorMobile:
            case u.GenericErrorHost:
            case u.SwitchUser:
            case u.SwitchUserMobile:
            case u.SwitchUserHost:
            case u.InviteBlocked:
            case u.ServiceBlocked:
            case u.IDPFailed:
            case u.HIP_Lockout:
            case u.HIP_LockoutMobile:
            case u.HIP_LockoutHost:
            case u.BindFailed:
                t.e(1).then(function () {
                    var n = t(449);
                    document.body.appendChild(document.createElement("div")).innerHTML = t(450), a.applyBindings(new n(e)), v(e)
                }.bind(null, t))["catch"](t.oe);
                break;
            default:
                document.body.appendChild(document.createElement("div")).innerHTML = t(313), a.applyBindings(new l(e)), v(e)
        }
    }))
}, function (e, n, t) {
    var i, a, o;
    /*!
     * Knockout JavaScript library v3.5.1
     * (c) The Knockout.js team - http://knockoutjs.com/
     * License: MIT (http://www.opensource.org/licenses/mit-license.php)
     */
    ! function (r) {
        var s = this || (0, eval)("this"),
            c = s.document,
            d = s.navigator,
            l = s.jQuery,
            u = s.JSON;
        l || "undefined" == typeof jQuery || (l = jQuery),
            function (r) {
                a = [n, t], (o = "function" == typeof (i = r) ? i.apply(n, a) : i) === undefined || (e.exports = o)
            }((function (e, n) {
                function t(e, n) {
                    return (null === e || typeof e in S) && e === n
                }

                function i(e, n) {
                    var t;
                    return function () {
                        t || (t = w.a.setTimeout((function () {
                            t = r, e()
                        }), n))
                    }
                }

                function a(e, n) {
                    var t;
                    return function () {
                        clearTimeout(t), t = w.a.setTimeout(e, n)
                    }
                }

                function o(e, n) {
                    n && "change" !== n ? "beforeChange" === n ? this.pc(e) : this.gb(e, n) : this.qc(e)
                }

                function p(e, n) {
                    null !== n && n.s && n.s()
                }

                function f(e, n) {
                    var t = this.qd,
                        i = t[T];
                    i.ra || (this.Qb && this.mb[n] ? (t.uc(n, e, this.mb[n]), this.mb[n] = null, --this.Qb) : i.I[n] || t.uc(n, e, i.J ? {
                        da: e
                    } : t.$c(e)), e.Ja && e.gd())
                }
                var g, m, b, v, h, _, w = void 0 !== e ? e : {};
                w.b = function (e, n) {
                    for (var t = e.split("."), i = w, a = 0; a < t.length - 1; a++) i = i[t[a]];
                    i[t[t.length - 1]] = n
                }, w.L = function (e, n, t) {
                    e[n] = t
                }, w.version = "3.5.1", w.b("version", w.version), w.options = {
                    deferUpdates: !1,
                    useOnlyNativeEvents: !1,
                    foreachHidesDestroyed: !1
                }, w.a = function () {
                    function e(e, n) {
                        for (var t in e) a.call(e, t) && n(t, e[t])
                    }

                    function n(e, n) {
                        if (n)
                            for (var t in n) a.call(n, t) && (e[t] = n[t]);
                        return e
                    }

                    function t(e, n) {
                        return e.__proto__ = n, e
                    }

                    function i(e, n, t, i) {
                        var a = e[n].match(h) || [];
                        w.a.D(t.match(h), (function (e) {
                            w.a.Na(a, e, i)
                        })), e[n] = a.join(" ")
                    }
                    var a = Object.prototype.hasOwnProperty,
                        o = {
                            __proto__: []
                        }
                    instanceof Array, p = "function" == typeof Symbol, f = {}, g = {};
                    f[d && /Firefox\/2/i.test(d.userAgent) ? "KeyboardEvent" : "UIEvents"] = ["keyup", "keydown", "keypress"], f.MouseEvents = "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" "), e(f, (function (e, n) {
                        if (n.length)
                            for (var t = 0, i = n.length; t < i; t++) g[n[t]] = e
                    }));
                    var m, b = {
                            propertychange: !0
                        },
                        v = c && function () {
                            for (var e = 3, n = c.createElement("div"), t = n.getElementsByTagName("i"); n.innerHTML = "\x3c!--[if gt IE " + ++e + "]><i></i><![endif]--\x3e", t[0];);
                            return 4 < e ? e : r
                        }(),
                        h = /\S+/g;
                    return {
                        Jc: ["authenticity_token", /^__RequestVerificationToken(_.*)?$/],
                        D: function (e, n, t) {
                            for (var i = 0, a = e.length; i < a; i++) n.call(t, e[i], i, e)
                        },
                        A: "function" == typeof Array.prototype.indexOf ? function (e, n) {
                            return Array.prototype.indexOf.call(e, n)
                        } : function (e, n) {
                            for (var t = 0, i = e.length; t < i; t++)
                                if (e[t] === n) return t;
                            return -1
                        },
                        Lb: function (e, n, t) {
                            for (var i = 0, a = e.length; i < a; i++)
                                if (n.call(t, e[i], i, e)) return e[i];
                            return r
                        },
                        Pa: function (e, n) {
                            var t = w.a.A(e, n);
                            0 < t ? e.splice(t, 1) : 0 === t && e.shift()
                        },
                        wc: function (e) {
                            var n = [];
                            return e && w.a.D(e, (function (e) {
                                0 > w.a.A(n, e) && n.push(e)
                            })), n
                        },
                        Mb: function (e, n, t) {
                            var i = [];
                            if (e)
                                for (var a = 0, o = e.length; a < o; a++) i.push(n.call(t, e[a], a));
                            return i
                        },
                        jb: function (e, n, t) {
                            var i = [];
                            if (e)
                                for (var a = 0, o = e.length; a < o; a++) n.call(t, e[a], a) && i.push(e[a]);
                            return i
                        },
                        Nb: function (e, n) {
                            if (n instanceof Array) e.push.apply(e, n);
                            else
                                for (var t = 0, i = n.length; t < i; t++) e.push(n[t]);
                            return e
                        },
                        Na: function (e, n, t) {
                            var i = w.a.A(w.a.bc(e), n);
                            0 > i ? t && e.push(n) : t || e.splice(i, 1)
                        },
                        Ba: o,
                        extend: n,
                        setPrototypeOf: t,
                        Ab: o ? t : n,
                        P: e,
                        Ga: function (e, n, t) {
                            if (!e) return e;
                            var i, o = {};
                            for (i in e) a.call(e, i) && (o[i] = n.call(t, e[i], i, e));
                            return o
                        },
                        Tb: function (e) {
                            for (; e.firstChild;) w.removeNode(e.firstChild)
                        },
                        Yb: function (e) {
                            for (var n = ((e = w.a.la(e))[0] && e[0].ownerDocument || c).createElement("div"), t = 0, i = e.length; t < i; t++) n.appendChild(w.oa(e[t]));
                            return n
                        },
                        Ca: function (e, n) {
                            for (var t = 0, i = e.length, a = []; t < i; t++) {
                                var o = e[t].cloneNode(!0);
                                a.push(n ? w.oa(o) : o)
                            }
                            return a
                        },
                        va: function (e, n) {
                            if (w.a.Tb(e), n)
                                for (var t = 0, i = n.length; t < i; t++) e.appendChild(n[t])
                        },
                        Xc: function (e, n) {
                            var t = e.nodeType ? [e] : e;
                            if (0 < t.length) {
                                for (var i = t[0], a = i.parentNode, o = 0, r = n.length; o < r; o++) a.insertBefore(n[o], i);
                                for (o = 0, r = t.length; o < r; o++) w.removeNode(t[o])
                            }
                        },
                        Ua: function (e, n) {
                            if (e.length) {
                                for (n = 8 === n.nodeType && n.parentNode || n; e.length && e[0].parentNode !== n;) e.splice(0, 1);
                                for (; 1 < e.length && e[e.length - 1].parentNode !== n;) e.length--;
                                if (1 < e.length) {
                                    var t = e[0],
                                        i = e[e.length - 1];
                                    for (e.length = 0; t !== i;) e.push(t), t = t.nextSibling;
                                    e.push(i)
                                }
                            }
                            return e
                        },
                        Zc: function (e, n) {
                            7 > v ? e.setAttribute("selected", n) : e.selected = n
                        },
                        Db: function (e) {
                            return null === e || e === r ? "" : e.trim ? e.trim() : e.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
                        },
                        Ud: function (e, n) {
                            return e = e || "", !(n.length > e.length) && e.substring(0, n.length) === n
                        },
                        vd: function (e, n) {
                            if (e === n) return !0;
                            if (11 === e.nodeType) return !1;
                            if (n.contains) return n.contains(1 !== e.nodeType ? e.parentNode : e);
                            if (n.compareDocumentPosition) return 16 == (16 & n.compareDocumentPosition(e));
                            for (; e && e != n;) e = e.parentNode;
                            return !!e
                        },
                        Sb: function (e) {
                            return w.a.vd(e, e.ownerDocument.documentElement)
                        },
                        kd: function (e) {
                            return !!w.a.Lb(e, w.a.Sb)
                        },
                        R: function (e) {
                            return e && e.tagName && e.tagName.toLowerCase()
                        },
                        Ac: function (e) {
                            return w.onError ? function () {
                                try {
                                    return e.apply(this, arguments)
                                } catch (n) {
                                    throw w.onError && w.onError(n), n
                                }
                            } : e
                        },
                        setTimeout: function (e, n) {
                            return setTimeout(w.a.Ac(e), n)
                        },
                        Gc: function (e) {
                            setTimeout((function () {
                                throw w.onError && w.onError(e), e
                            }), 0)
                        },
                        B: function (e, n, t) {
                            var i = w.a.Ac(t);
                            if (t = b[n], w.options.useOnlyNativeEvents || t || !l)
                                if (t || "function" != typeof e.addEventListener) {
                                    if ("undefined" == typeof e.attachEvent) throw Error("Browser doesn't support addEventListener or attachEvent");
                                    var a = function (n) {
                                            i.call(e, n)
                                        },
                                        o = "on" + n;
                                    e.attachEvent(o, a), w.a.K.za(e, (function () {
                                        e.detachEvent(o, a)
                                    }))
                                } else e.addEventListener(n, i, !1);
                            else m || (m = "function" == typeof l(e).on ? "on" : "bind"), l(e)[m](n, i)
                        },
                        Fb: function (e, n) {
                            if (!e || !e.nodeType) throw Error("element must be a DOM node when calling triggerEvent");
                            var t;
                            if (t = !("input" !== w.a.R(e) || !e.type || "click" != n.toLowerCase()) && ("checkbox" == (t = e.type) || "radio" == t), w.options.useOnlyNativeEvents || !l || t)
                                if ("function" == typeof c.createEvent) {
                                    if ("function" != typeof e.dispatchEvent) throw Error("The supplied element doesn't support dispatchEvent");
                                    (t = c.createEvent(g[n] || "HTMLEvents")).initEvent(n, !0, !0, s, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, e), e.dispatchEvent(t)
                                } else if (t && e.click) e.click();
                            else {
                                if ("undefined" == typeof e.fireEvent) throw Error("Browser doesn't support triggering events");
                                e.fireEvent("on" + n)
                            } else l(e).trigger(n)
                        },
                        f: function (e) {
                            return w.O(e) ? e() : e
                        },
                        bc: function (e) {
                            return w.O(e) ? e.v() : e
                        },
                        Eb: function (e, n, t) {
                            var a;
                            n && ("object" == typeof e.classList ? (a = e.classList[t ? "add" : "remove"], w.a.D(n.match(h), (function (n) {
                                a.call(e.classList, n)
                            }))) : "string" == typeof e.className.baseVal ? i(e.className, "baseVal", n, t) : i(e, "className", n, t))
                        },
                        Bb: function (e, n) {
                            var t = w.a.f(n);
                            null !== t && t !== r || (t = "");
                            var i = w.h.firstChild(e);
                            !i || 3 != i.nodeType || w.h.nextSibling(i) ? w.h.va(e, [e.ownerDocument.createTextNode(t)]) : i.data = t, w.a.Ad(e)
                        },
                        Yc: function (e, n) {
                            if (e.name = n, 7 >= v) try {
                                var i = e.name.replace(/[&<>'"]/g, (function (e) {
                                    return "&#" + e.charCodeAt(0) + ";"
                                }));
                                e.mergeAttributes(c.createElement("<input name='" + i + "'/>"), !1)
                            } catch (t) {}
                        },
                        Ad: function (e) {
                            9 <= v && (e = 1 == e.nodeType ? e : e.parentNode).style && (e.style.zoom = e.style.zoom)
                        },
                        wd: function (e) {
                            if (v) {
                                var n = e.style.width;
                                e.style.width = 0, e.style.width = n
                            }
                        },
                        Pd: function (e, n) {
                            e = w.a.f(e), n = w.a.f(n);
                            for (var t = [], i = e; i <= n; i++) t.push(i);
                            return t
                        },
                        la: function (e) {
                            for (var n = [], t = 0, i = e.length; t < i; t++) n.push(e[t]);
                            return n
                        },
                        Da: function (e) {
                            return p ? Symbol(e) : e
                        },
                        Zd: 6 === v,
                        $d: 7 === v,
                        W: v,
                        Lc: function (e, n) {
                            for (var t = w.a.la(e.getElementsByTagName("input")).concat(w.a.la(e.getElementsByTagName("textarea"))), i = "string" == typeof n ? function (e) {
                                    return e.name === n
                                } : function (e) {
                                    return n.test(e.name)
                                }, a = [], o = t.length - 1; 0 <= o; o--) i(t[o]) && a.push(t[o]);
                            return a
                        },
                        Nd: function (e) {
                            return "string" == typeof e && (e = w.a.Db(e)) ? u && u.parse ? u.parse(e) : new Function("return " + e)() : null
                        },
                        hc: function (e, n, t) {
                            if (!u || !u.stringify) throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
                            return u.stringify(w.a.f(e), n, t)
                        },
                        Od: function (n, t, i) {
                            var a = (i = i || {}).params || {},
                                o = i.includeFields || this.Jc,
                                r = n;
                            if ("object" == typeof n && "form" === w.a.R(n)) {
                                r = n.action;
                                for (var s = o.length - 1; 0 <= s; s--)
                                    for (var d = w.a.Lc(n, o[s]), l = d.length - 1; 0 <= l; l--) a[d[l].name] = d[l].value
                            }
                            t = w.a.f(t);
                            var u = c.createElement("form");
                            for (var p in u.style.display = "none", u.action = r, u.method = "post", t)(n = c.createElement("input")).type = "hidden", n.name = p, n.value = w.a.hc(w.a.f(t[p])), u.appendChild(n);
                            e(a, (function (e, n) {
                                var t = c.createElement("input");
                                t.type = "hidden", t.name = e, t.value = n, u.appendChild(t)
                            })), c.body.appendChild(u), i.submitter ? i.submitter(u) : u.submit(), setTimeout((function () {
                                u.parentNode.removeChild(u)
                            }), 0)
                        }
                    }
                }(), w.b("utils", w.a), w.b("utils.arrayForEach", w.a.D), w.b("utils.arrayFirst", w.a.Lb), w.b("utils.arrayFilter", w.a.jb), w.b("utils.arrayGetDistinctValues", w.a.wc), w.b("utils.arrayIndexOf", w.a.A), w.b("utils.arrayMap", w.a.Mb), w.b("utils.arrayPushAll", w.a.Nb), w.b("utils.arrayRemoveItem", w.a.Pa), w.b("utils.cloneNodes", w.a.Ca), w.b("utils.createSymbolOrString", w.a.Da), w.b("utils.extend", w.a.extend), w.b("utils.fieldsIncludedWithJsonPost", w.a.Jc), w.b("utils.getFormFields", w.a.Lc), w.b("utils.objectMap", w.a.Ga), w.b("utils.peekObservable", w.a.bc), w.b("utils.postJson", w.a.Od), w.b("utils.parseJson", w.a.Nd), w.b("utils.registerEventHandler", w.a.B), w.b("utils.stringifyJson", w.a.hc), w.b("utils.range", w.a.Pd), w.b("utils.toggleDomNodeCssClass", w.a.Eb), w.b("utils.triggerEvent", w.a.Fb), w.b("utils.unwrapObservable", w.a.f), w.b("utils.objectForEach", w.a.P), w.b("utils.addOrRemoveItem", w.a.Na), w.b("utils.setTextContent", w.a.Bb), w.b("unwrap", w.a.f), Function.prototype.bind || (Function.prototype.bind = function (e) {
                    var n = this;
                    if (1 === arguments.length) return function () {
                        return n.apply(e, arguments)
                    };
                    var t = Array.prototype.slice.call(arguments, 1);
                    return function () {
                        var i = t.slice(0);
                        return i.push.apply(i, arguments), n.apply(e, i)
                    }
                }), w.a.g = new function () {
                    var e, n, t = 0,
                        i = "__ko__" + (new Date).getTime(),
                        a = {};
                    return w.a.W ? (e = function (e, n) {
                        var o = e[i];
                        if (!o || "null" === o || !a[o]) {
                            if (!n) return r;
                            o = e[i] = "ko" + t++, a[o] = {}
                        }
                        return a[o]
                    }, n = function (e) {
                        var n = e[i];
                        return !!n && (delete a[n], e[i] = null, !0)
                    }) : (e = function (e, n) {
                        var t = e[i];
                        return !t && n && (t = e[i] = {}), t
                    }, n = function (e) {
                        return !!e[i] && (delete e[i], !0)
                    }), {
                        get: function (n, t) {
                            var i = e(n, !1);
                            return i && i[t]
                        },
                        set: function (n, t, i) {
                            (n = e(n, i !== r)) && (n[t] = i)
                        },
                        Ub: function (n, t, i) {
                            return (n = e(n, !0))[t] || (n[t] = i)
                        },
                        clear: n,
                        Z: function () {
                            return t++ + i
                        }
                    }
                }, w.b("utils.domData", w.a.g), w.b("utils.domData.clear", w.a.g.clear), w.a.K = new function () {
                    function e(e, n) {
                        var t = w.a.g.get(e, i);
                        return t === r && n && (t = [], w.a.g.set(e, i, t)), t
                    }

                    function n(n) {
                        if (i = e(n, !1))
                            for (var i = i.slice(0), a = 0; a < i.length; a++) i[a](n);
                        w.a.g.clear(n), w.a.K.cleanExternalData(n), o[n.nodeType] && t(n.childNodes, !0)
                    }

                    function t(e, t) {
                        for (var i, a = [], o = 0; o < e.length; o++)
                            if ((!t || 8 === e[o].nodeType) && (n(a[a.length] = i = e[o]), e[o] !== i))
                                for (; o-- && -1 == w.a.A(a, e[o]););
                    }
                    var i = w.a.g.Z(),
                        a = {
                            1: !0,
                            8: !0,
                            9: !0
                        },
                        o = {
                            1: !0,
                            9: !0
                        };
                    return {
                        za: function (n, t) {
                            if ("function" != typeof t) throw Error("Callback must be a function");
                            e(n, !0).push(t)
                        },
                        yb: function (n, t) {
                            var a = e(n, !1);
                            a && (w.a.Pa(a, t), 0 == a.length && w.a.g.set(n, i, r))
                        },
                        oa: function (e) {
                            return w.u.G((function () {
                                a[e.nodeType] && (n(e), o[e.nodeType] && t(e.getElementsByTagName("*")))
                            })), e
                        },
                        removeNode: function (e) {
                            w.oa(e), e.parentNode && e.parentNode.removeChild(e)
                        },
                        cleanExternalData: function (e) {
                            l && "function" == typeof l.cleanData && l.cleanData([e])
                        }
                    }
                }, w.oa = w.a.K.oa, w.removeNode = w.a.K.removeNode, w.b("cleanNode", w.oa), w.b("removeNode", w.removeNode), w.b("utils.domNodeDisposal", w.a.K), w.b("utils.domNodeDisposal.addDisposeCallback", w.a.K.za), w.b("utils.domNodeDisposal.removeDisposeCallback", w.a.K.yb), g = [0, "", ""], h = {
                    thead: m = [1, "<table>", "</table>"],
                    tbody: m,
                    tfoot: m,
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: b = [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    th: b,
                    option: v = [1, "<select multiple='multiple'>", "</select>"],
                    optgroup: v
                }, _ = 8 >= w.a.W, w.a.ua = function (e, n) {
                    var t;
                    if (l) {
                        if (l.parseHTML) t = l.parseHTML(e, n) || [];
                        else if ((t = l.clean([e], n)) && t[0]) {
                            for (var i = t[0]; i.parentNode && 11 !== i.parentNode.nodeType;) i = i.parentNode;
                            i.parentNode && i.parentNode.removeChild(i)
                        }
                    } else {
                        (t = n) || (t = c), i = t.parentWindow || t.defaultView || s;
                        var a, o = w.a.Db(e).toLowerCase(),
                            r = t.createElement("div");
                        for (a = (o = o.match(/^(?:\x3c!--.*?--\x3e\s*?)*?<([a-z]+)[\s>]/)) && h[o[1]] || g, o = a[0], a = "ignored<div>" + a[1] + e + a[2] + "</div>", "function" == typeof i.innerShiv ? r.appendChild(i.innerShiv(a)) : (_ && t.body.appendChild(r), r.innerHTML = a, _ && r.parentNode.removeChild(r)); o--;) r = r.lastChild;
                        t = w.a.la(r.lastChild.childNodes)
                    }
                    return t
                }, w.a.Md = function (e, n) {
                    var t = w.a.ua(e, n);
                    return t.length && t[0].parentElement || w.a.Yb(t)
                }, w.a.fc = function (e, n) {
                    if (w.a.Tb(e), null !== (n = w.a.f(n)) && n !== r)
                        if ("string" != typeof n && (n = n.toString()), l) l(e).html(n);
                        else
                            for (var t = w.a.ua(n, e.ownerDocument), i = 0; i < t.length; i++) e.appendChild(t[i])
                }, w.b("utils.parseHtmlFragment", w.a.ua), w.b("utils.setHtml", w.a.fc), w.aa = function () {
                    var e = {};
                    return {
                        Xb: function (n) {
                            if ("function" != typeof n) throw Error("You can only pass a function to ko.memoization.memoize()");
                            var t = (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1) + (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1);
                            return e[t] = n, "\x3c!--[ko_memo:" + t + "]--\x3e"
                        },
                        bd: function (n, t) {
                            var i = e[n];
                            if (i === r) throw Error("Couldn't find any memo with ID " + n + ". Perhaps it's already been unmemoized.");
                            try {
                                return i.apply(null, t || []), !0
                            } finally {
                                delete e[n]
                            }
                        },
                        cd: function (e, n) {
                            var t = [];
                            ! function s(e, n) {
                                if (e)
                                    if (8 == e.nodeType) null != (t = w.aa.Uc(e.nodeValue)) && n.push({
                                        ud: e,
                                        Kd: t
                                    });
                                    else if (1 == e.nodeType)
                                    for (var t = 0, i = e.childNodes, a = i.length; t < a; t++) s(i[t], n)
                            }(e, t);
                            for (var i = 0, a = t.length; i < a; i++) {
                                var o = t[i].ud,
                                    r = [o];
                                n && w.a.Nb(r, n), w.aa.bd(t[i].Kd, r), o.nodeValue = "", o.parentNode && o.parentNode.removeChild(o)
                            }
                        },
                        Uc: function (e) {
                            return (e = e.match(/^\[ko_memo\:(.*?)\]$/)) ? e[1] : null
                        }
                    }
                }(), w.b("memoization", w.aa), w.b("memoization.memoize", w.aa.Xb), w.b("memoization.unmemoize", w.aa.bd), w.b("memoization.parseMemoText", w.aa.Uc), w.b("memoization.unmemoizeDomNodeAndDescendants", w.aa.cd), w.na = function () {
                    function e() {
                        if (i)
                            for (var e, n = i, a = 0; o < i;)
                                if (e = t[o++]) {
                                    if (o > n) {
                                        if (5e3 <= ++a) {
                                            o = i, w.a.Gc(Error("'Too much recursion' after processing " + a + " task groups."));
                                            break
                                        }
                                        n = i
                                    }
                                    try {
                                        e()
                                    } catch (r) {
                                        w.a.Gc(r)
                                    }
                                }
                    }

                    function n() {
                        e(), o = i = t.length = 0
                    }
                    var t = [],
                        i = 0,
                        a = 1,
                        o = 0;
                    return {
                        scheduler: s.MutationObserver ? function (e) {
                            var n = c.createElement("div");
                            return new MutationObserver(e).observe(n, {
                                    attributes: !0
                                }),
                                function () {
                                    n.classList.toggle("foo")
                                }
                        }(n) : c && "onreadystatechange" in c.createElement("script") ? function (e) {
                            var n = c.createElement("script");
                            n.onreadystatechange = function () {
                                n.onreadystatechange = null, c.documentElement.removeChild(n), n = null, e()
                            }, c.documentElement.appendChild(n)
                        } : function (e) {
                            setTimeout(e, 0)
                        },
                        zb: function (e) {
                            return i || w.na.scheduler(n), t[i++] = e, a++
                        },
                        cancel: function (e) {
                            (e -= a - i) >= o && e < i && (t[e] = null)
                        },
                        resetForTesting: function () {
                            var e = i - o;
                            return o = i = t.length = 0, e
                        },
                        Sd: e
                    }
                }(), w.b("tasks", w.na), w.b("tasks.schedule", w.na.zb), w.b("tasks.runEarly", w.na.Sd), w.Ta = {
                    throttle: function (e, n) {
                        e.throttleEvaluation = n;
                        var t = null;
                        return w.$({
                            read: e,
                            write: function (i) {
                                clearTimeout(t), t = w.a.setTimeout((function () {
                                    e(i)
                                }), n)
                            }
                        })
                    },
                    rateLimit: function (e, n) {
                        var t, o, r;
                        "number" == typeof n ? t = n : (t = n.timeout, o = n.method), e.Hb = !1, r = "function" == typeof o ? o : "notifyWhenChangesStop" == o ? a : i, e.ub((function (e) {
                            return r(e, t, n)
                        }))
                    },
                    deferred: function (e, n) {
                        if (!0 !== n) throw Error("The 'deferred' extender only accepts the value 'true', because it is not supported to turn deferral off once enabled.");
                        e.Hb || (e.Hb = !0, e.ub((function (n) {
                            var t, i = !1;
                            return function () {
                                if (!i) {
                                    w.na.cancel(t), t = w.na.zb(n);
                                    try {
                                        i = !0, e.notifySubscribers(r, "dirty")
                                    } finally {
                                        i = !1
                                    }
                                }
                            }
                        })))
                    },
                    notify: function (e, n) {
                        e.equalityComparer = "always" == n ? null : t
                    }
                };
                var S = {
                    undefined: 1,
                    boolean: 1,
                    number: 1,
                    string: 1
                };
                w.b("extenders", w.Ta), w.ic = function (e, n, t) {
                    this.da = e, this.lc = n, this.mc = t, this.Ib = !1, this.fb = this.Jb = null, w.L(this, "dispose", this.s), w.L(this, "disposeWhenNodeIsRemoved", this.l)
                }, w.ic.prototype.s = function () {
                    this.Ib || (this.fb && w.a.K.yb(this.Jb, this.fb), this.Ib = !0, this.mc(), this.da = this.lc = this.mc = this.Jb = this.fb = null)
                }, w.ic.prototype.l = function (e) {
                    this.Jb = e, w.a.K.za(e, this.fb = this.s.bind(this))
                }, w.T = function () {
                    w.a.Ab(this, C), C.qb(this)
                };
                var C = {
                    qb: function (e) {
                        e.U = {
                            change: []
                        }, e.sc = 1
                    },
                    subscribe: function (e, n, t) {
                        var i = this;
                        t = t || "change";
                        var a = new w.ic(i, n ? e.bind(n) : e, (function () {
                            w.a.Pa(i.U[t], a), i.hb && i.hb(t)
                        }));
                        return i.Qa && i.Qa(t), i.U[t] || (i.U[t] = []), i.U[t].push(a), a
                    },
                    notifySubscribers: function (e, n) {
                        if ("change" === (n = n || "change") && this.Gb(), this.Wa(n)) {
                            var t = "change" === n && this.ed || this.U[n].slice(0);
                            try {
                                w.u.xc();
                                for (var i, a = 0; i = t[a]; ++a) i.Ib || i.lc(e)
                            } finally {
                                w.u.end()
                            }
                        }
                    },
                    ob: function () {
                        return this.sc
                    },
                    Dd: function (e) {
                        return this.ob() !== e
                    },
                    Gb: function () {
                        ++this.sc
                    },
                    ub: function (e) {
                        var n, t, i, a, r, s = this,
                            c = w.O(s);
                        s.gb || (s.gb = s.notifySubscribers, s.notifySubscribers = o);
                        var d = e((function () {
                            s.Ja = !1, c && a === s && (a = s.nc ? s.nc() : s());
                            var e = t || r && s.sb(i, a);
                            r = t = n = !1, e && s.gb(i = a)
                        }));
                        s.qc = function (e, t) {
                            t && s.Ja || (r = !t), s.ed = s.U.change.slice(0), s.Ja = n = !0, a = e, d()
                        }, s.pc = function (e) {
                            n || (i = e, s.gb(e, "beforeChange"))
                        }, s.rc = function () {
                            r = !0
                        }, s.gd = function () {
                            s.sb(i, s.v(!0)) && (t = !0)
                        }
                    },
                    Wa: function (e) {
                        return this.U[e] && this.U[e].length
                    },
                    Bd: function (e) {
                        if (e) return this.U[e] && this.U[e].length || 0;
                        var n = 0;
                        return w.a.P(this.U, (function (e, t) {
                            "dirty" !== e && (n += t.length)
                        })), n
                    },
                    sb: function (e, n) {
                        return !this.equalityComparer || !this.equalityComparer(e, n)
                    },
                    toString: function () {
                        return "[object Object]"
                    },
                    extend: function (e) {
                        var n = this;
                        return e && w.a.P(e, (function (e, t) {
                            var i = w.Ta[e];
                            "function" == typeof i && (n = i(n, t) || n)
                        })), n
                    }
                };
                w.L(C, "init", C.qb), w.L(C, "subscribe", C.subscribe), w.L(C, "extend", C.extend), w.L(C, "getSubscriptionsCount", C.Bd), w.a.Ba && w.a.setPrototypeOf(C, Function.prototype), w.T.fn = C, w.Qc = function (e) {
                    return null != e && "function" == typeof e.subscribe && "function" == typeof e.notifySubscribers
                }, w.b("subscribable", w.T), w.b("isSubscribable", w.Qc), w.S = w.u = function () {
                    function e(e) {
                        i.push(t), t = e
                    }

                    function n() {
                        t = i.pop()
                    }
                    var t, i = [],
                        a = 0;
                    return {
                        xc: e,
                        end: n,
                        cc: function (e) {
                            if (t) {
                                if (!w.Qc(e)) throw Error("Only subscribable things can act as dependencies");
                                t.od.call(t.pd, e, e.fd || (e.fd = ++a))
                            }
                        },
                        G: function (t, i, a) {
                            try {
                                return e(), t.apply(i, a || [])
                            } finally {
                                n()
                            }
                        },
                        qa: function () {
                            if (t) return t.o.qa()
                        },
                        Va: function () {
                            if (t) return t.o.Va()
                        },
                        Ya: function () {
                            if (t) return t.Ya
                        },
                        o: function () {
                            if (t) return t.o
                        }
                    }
                }(), w.b("computedContext", w.S), w.b("computedContext.getDependenciesCount", w.S.qa), w.b("computedContext.getDependencies", w.S.Va), w.b("computedContext.isInitial", w.S.Ya), w.b("computedContext.registerDependency", w.S.cc), w.b("ignoreDependencies", w.Yd = w.u.G);
                var x = w.a.Da("_latestValue");
                w.ta = function (e) {
                    function n() {
                        return 0 < arguments.length ? (n.sb(n[x], arguments[0]) && (n.ya(), n[x] = arguments[0], n.xa()), this) : (w.u.cc(n), n[x])
                    }
                    return n[x] = e, w.a.Ba || w.a.extend(n, w.T.fn), w.T.fn.qb(n), w.a.Ab(n, y), w.options.deferUpdates && w.Ta.deferred(n, !0), n
                };
                var y = {
                    equalityComparer: t,
                    v: function () {
                        return this[x]
                    },
                    xa: function () {
                        this.notifySubscribers(this[x], "spectate"), this.notifySubscribers(this[x])
                    },
                    ya: function () {
                        this.notifySubscribers(this[x], "beforeChange")
                    }
                };
                w.a.Ba && w.a.setPrototypeOf(y, w.T.fn);
                var k = w.ta.Ma = "__ko_proto__";
                y[k] = w.ta, w.O = function (e) {
                    if ((e = "function" == typeof e && e[k]) && e !== y[k] && e !== w.o.fn[k]) throw Error("Invalid object that looks like an observable; possibly from another Knockout instance");
                    return !!e
                }, w.Za = function (e) {
                    return "function" == typeof e && (e[k] === y[k] || e[k] === w.o.fn[k] && e.Nc)
                }, w.b("observable", w.ta), w.b("isObservable", w.O), w.b("isWriteableObservable", w.Za), w.b("isWritableObservable", w.Za), w.b("observable.fn", y), w.L(y, "peek", y.v), w.L(y, "valueHasMutated", y.xa), w.L(y, "valueWillMutate", y.ya), w.Ha = function (e) {
                    if ("object" != typeof (e = e || []) || !("length" in e)) throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");
                    return e = w.ta(e), w.a.Ab(e, w.Ha.fn), e.extend({
                        trackArrayChanges: !0
                    })
                }, w.Ha.fn = {
                    remove: function (e) {
                        for (var n = this.v(), t = [], i = "function" != typeof e || w.O(e) ? function (n) {
                                return n === e
                            } : e, a = 0; a < n.length; a++) {
                            var o = n[a];
                            if (i(o)) {
                                if (0 === t.length && this.ya(), n[a] !== o) throw Error("Array modified during remove; cannot remove item");
                                t.push(o), n.splice(a, 1), a--
                            }
                        }
                        return t.length && this.xa(), t
                    },
                    removeAll: function (e) {
                        if (e === r) {
                            var n = this.v(),
                                t = n.slice(0);
                            return this.ya(), n.splice(0, n.length), this.xa(), t
                        }
                        return e ? this.remove((function (n) {
                            return 0 <= w.a.A(e, n)
                        })) : []
                    },
                    destroy: function (e) {
                        var n = this.v(),
                            t = "function" != typeof e || w.O(e) ? function (n) {
                                return n === e
                            } : e;
                        this.ya();
                        for (var i = n.length - 1; 0 <= i; i--) {
                            var a = n[i];
                            t(a) && (a._destroy = !0)
                        }
                        this.xa()
                    },
                    destroyAll: function (e) {
                        return e === r ? this.destroy((function () {
                            return !0
                        })) : e ? this.destroy((function (n) {
                            return 0 <= w.a.A(e, n)
                        })) : []
                    },
                    indexOf: function (e) {
                        var n = this();
                        return w.a.A(n, e)
                    },
                    replace: function (e, n) {
                        var t = this.indexOf(e);
                        0 <= t && (this.ya(), this.v()[t] = n, this.xa())
                    },
                    sorted: function (e) {
                        var n = this().slice(0);
                        return e ? n.sort(e) : n.sort()
                    },
                    reversed: function () {
                        return this().slice(0).reverse()
                    }
                }, w.a.Ba && w.a.setPrototypeOf(w.Ha.fn, w.ta.fn), w.a.D("pop push reverse shift sort splice unshift".split(" "), (function (e) {
                    w.Ha.fn[e] = function () {
                        var n = this.v();
                        this.ya(), this.zc(n, e, arguments);
                        var t = n[e].apply(n, arguments);
                        return this.xa(), t === n ? this : t
                    }
                })), w.a.D(["slice"], (function (e) {
                    w.Ha.fn[e] = function () {
                        var n = this();
                        return n[e].apply(n, arguments)
                    }
                })), w.Pc = function (e) {
                    return w.O(e) && "function" == typeof e.remove && "function" == typeof e.push
                }, w.b("observableArray", w.Ha), w.b("isObservableArray", w.Pc), w.Ta.trackArrayChanges = function (e, n) {
                    function t() {
                        function n() {
                            if (d) {
                                var n, t = [].concat(e.v() || []);
                                e.Wa("arrayChange") && ((!c || 1 < d) && (c = w.a.Pb(o, t, e.Ob)), n = c), o = t, c = null, d = 0, n && n.length && e.notifySubscribers(n, "arrayChange")
                            }
                        }
                        s ? n() : (s = !0, a = e.subscribe((function () {
                            ++d
                        }), null, "spectate"), o = [].concat(e.v() || []), c = null, i = e.subscribe(n))
                    }
                    if (e.Ob = {}, n && "object" == typeof n && w.a.extend(e.Ob, n), e.Ob.sparse = !0, !e.zc) {
                        var i, a, o, s = !1,
                            c = null,
                            d = 0,
                            l = e.Qa,
                            u = e.hb;
                        e.Qa = function (n) {
                            l && l.call(e, n), "arrayChange" === n && t()
                        }, e.hb = function (n) {
                            u && u.call(e, n), "arrayChange" !== n || e.Wa("arrayChange") || (i && i.s(), a && a.s(), a = i = null, s = !1, o = r)
                        }, e.zc = function (e, n, t) {
                            function i(e, n, t) {
                                return a[a.length] = {
                                    status: e,
                                    value: n,
                                    index: t
                                }
                            }
                            if (s && !d) {
                                var a = [],
                                    o = e.length,
                                    r = t.length,
                                    l = 0;
                                switch (n) {
                                    case "push":
                                        l = o;
                                    case "unshift":
                                        for (n = 0; n < r; n++) i("added", t[n], l + n);
                                        break;
                                    case "pop":
                                        l = o - 1;
                                    case "shift":
                                        o && i("deleted", e[l], l);
                                        break;
                                    case "splice":
                                        n = Math.min(Math.max(0, 0 > t[0] ? o + t[0] : t[0]), o), o = 1 === r ? o : Math.min(n + (t[1] || 0), o), r = n + r - 2, l = Math.max(o, r);
                                        for (var u = [], p = [], f = 2; n < l; ++n, ++f) n < o && p.push(i("deleted", e[n], n)), n < r && u.push(i("added", t[f], n));
                                        w.a.Kc(p, u);
                                        break;
                                    default:
                                        return
                                }
                                c = a
                            }
                        }
                    }
                };
                var T = w.a.Da("_state");
                w.o = w.$ = function (e, n, t) {
                    function i() {
                        if (0 < arguments.length) {
                            if ("function" != typeof a) throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
                            return a.apply(o.nb, arguments), this
                        }
                        return o.ra || w.u.cc(i), (o.ka || o.J && i.Xa()) && i.ha(), o.X
                    }
                    if ("object" == typeof e ? t = e : (t = t || {}, e && (t.read = e)), "function" != typeof t.read) throw Error("Pass a function that returns the value of the ko.computed");
                    var a = t.write,
                        o = {
                            X: r,
                            sa: !0,
                            ka: !0,
                            rb: !1,
                            jc: !1,
                            ra: !1,
                            wb: !1,
                            J: !1,
                            Wc: t.read,
                            nb: n || t.owner,
                            l: t.disposeWhenNodeIsRemoved || t.l || null,
                            Sa: t.disposeWhen || t.Sa,
                            Rb: null,
                            I: {},
                            V: 0,
                            Ic: null
                        };
                    return i[T] = o, i.Nc = "function" == typeof a, w.a.Ba || w.a.extend(i, w.T.fn), w.T.fn.qb(i), w.a.Ab(i, P), t.pure ? (o.wb = !0, o.J = !0, w.a.extend(i, D)) : t.deferEvaluation && w.a.extend(i, E), w.options.deferUpdates && w.Ta.deferred(i, !0), o.l && (o.jc = !0, o.l.nodeType || (o.l = null)), o.J || t.deferEvaluation || i.ha(), o.l && i.ja() && w.a.K.za(o.l, o.Rb = function () {
                        i.s()
                    }), i
                };
                var P = {
                        equalityComparer: t,
                        qa: function () {
                            return this[T].V
                        },
                        Va: function () {
                            var e = [];
                            return w.a.P(this[T].I, (function (n, t) {
                                e[t.Ka] = t.da
                            })), e
                        },
                        Vb: function (e) {
                            if (!this[T].V) return !1;
                            var n = this.Va();
                            return -1 !== w.a.A(n, e) || !!w.a.Lb(n, (function (n) {
                                return n.Vb && n.Vb(e)
                            }))
                        },
                        uc: function (e, n, t) {
                            if (this[T].wb && n === this) throw Error("A 'pure' computed must not be called recursively");
                            this[T].I[e] = t, t.Ka = this[T].V++, t.La = n.ob()
                        },
                        Xa: function () {
                            var e, n, t = this[T].I;
                            for (e in t)
                                if (Object.prototype.hasOwnProperty.call(t, e) && (n = t[e], this.Ia && n.da.Ja || n.da.Dd(n.La))) return !0
                        },
                        Jd: function () {
                            this.Ia && !this[T].rb && this.Ia(!1)
                        },
                        ja: function () {
                            var e = this[T];
                            return e.ka || 0 < e.V
                        },
                        Rd: function () {
                            this.Ja ? this[T].ka && (this[T].sa = !0) : this.Hc()
                        },
                        $c: function (e) {
                            if (e.Hb) {
                                var n = e.subscribe(this.Jd, this, "dirty"),
                                    t = e.subscribe(this.Rd, this);
                                return {
                                    da: e,
                                    s: function () {
                                        n.s(), t.s()
                                    }
                                }
                            }
                            return e.subscribe(this.Hc, this)
                        },
                        Hc: function () {
                            var e = this,
                                n = e.throttleEvaluation;
                            n && 0 <= n ? (clearTimeout(this[T].Ic), this[T].Ic = w.a.setTimeout((function () {
                                e.ha(!0)
                            }), n)) : e.Ia ? e.Ia(!0) : e.ha(!0)
                        },
                        ha: function (e) {
                            var n = this[T],
                                t = n.Sa,
                                i = !1;
                            if (!n.rb && !n.ra) {
                                if (n.l && !w.a.Sb(n.l) || t && t()) {
                                    if (!n.jc) return void this.s()
                                } else n.jc = !1;
                                n.rb = !0;
                                try {
                                    i = this.zd(e)
                                } finally {
                                    n.rb = !1
                                }
                                return i
                            }
                        },
                        zd: function (e) {
                            var n = this[T],
                                t = !1,
                                i = n.wb ? r : !n.V;
                            t = {
                                qd: this,
                                mb: n.I,
                                Qb: n.V
                            }, w.u.xc({
                                pd: t,
                                od: f,
                                o: this,
                                Ya: i
                            }), n.I = {}, n.V = 0;
                            var a = this.yd(n, t);
                            return n.V ? t = this.sb(n.X, a) : (this.s(), t = !0), t && (n.J ? this.Gb() : this.notifySubscribers(n.X, "beforeChange"), n.X = a, this.notifySubscribers(n.X, "spectate"), !n.J && e && this.notifySubscribers(n.X), this.rc && this.rc()), i && this.notifySubscribers(n.X, "awake"), t
                        },
                        yd: function (e, n) {
                            try {
                                var t = e.Wc;
                                return e.nb ? t.call(e.nb) : t()
                            } finally {
                                w.u.end(), n.Qb && !e.J && w.a.P(n.mb, p), e.sa = e.ka = !1
                            }
                        },
                        v: function (e) {
                            var n = this[T];
                            return (n.ka && (e || !n.V) || n.J && this.Xa()) && this.ha(), n.X
                        },
                        ub: function (e) {
                            w.T.fn.ub.call(this, e), this.nc = function () {
                                return this[T].J || (this[T].sa ? this.ha() : this[T].ka = !1), this[T].X
                            }, this.Ia = function (e) {
                                this.pc(this[T].X), this[T].ka = !0, e && (this[T].sa = !0), this.qc(this, !e)
                            }
                        },
                        s: function () {
                            var e = this[T];
                            !e.J && e.I && w.a.P(e.I, (function (e, n) {
                                n.s && n.s()
                            })), e.l && e.Rb && w.a.K.yb(e.l, e.Rb), e.I = r, e.V = 0, e.ra = !0, e.sa = !1, e.ka = !1, e.J = !1, e.l = r, e.Sa = r, e.Wc = r, this.Nc || (e.nb = r)
                        }
                    },
                    D = {
                        Qa: function (e) {
                            var n = this,
                                t = n[T];
                            if (!t.ra && t.J && "change" == e) {
                                if (t.J = !1, t.sa || n.Xa()) t.I = null, t.V = 0, n.ha() && n.Gb();
                                else {
                                    var i = [];
                                    w.a.P(t.I, (function (e, n) {
                                        i[n.Ka] = e
                                    })), w.a.D(i, (function (e, i) {
                                        var a = t.I[e],
                                            o = n.$c(a.da);
                                        o.Ka = i, o.La = a.La, t.I[e] = o
                                    })), n.Xa() && n.ha() && n.Gb()
                                }
                                t.ra || n.notifySubscribers(t.X, "awake")
                            }
                        },
                        hb: function (e) {
                            var n = this[T];
                            n.ra || "change" != e || this.Wa("change") || (w.a.P(n.I, (function (e, t) {
                                t.s && (n.I[e] = {
                                    da: t.da,
                                    Ka: t.Ka,
                                    La: t.La
                                }, t.s())
                            })), n.J = !0, this.notifySubscribers(r, "asleep"))
                        },
                        ob: function () {
                            var e = this[T];
                            return e.J && (e.sa || this.Xa()) && this.ha(), w.T.fn.ob.call(this)
                        }
                    },
                    E = {
                        Qa: function (e) {
                            "change" != e && "beforeChange" != e || this.v()
                        }
                    };
                w.a.Ba && w.a.setPrototypeOf(P, w.T.fn);
                var I = w.ta.Ma;
                P[I] = w.o, w.Oc = function (e) {
                        return "function" == typeof e && e[I] === P[I]
                    }, w.Fd = function (e) {
                        return w.Oc(e) && e[T] && e[T].wb
                    }, w.b("computed", w.o), w.b("dependentObservable", w.o), w.b("isComputed", w.Oc), w.b("isPureComputed", w.Fd), w.b("computed.fn", P), w.L(P, "peek", P.v), w.L(P, "dispose", P.s), w.L(P, "isActive", P.ja), w.L(P, "getDependenciesCount", P.qa), w.L(P, "getDependencies", P.Va), w.xb = function (e, n) {
                        return "function" == typeof e ? w.o(e, n, {
                            pure: !0
                        }) : ((e = w.a.extend({}, e)).pure = !0, w.o(e, n))
                    }, w.b("pureComputed", w.xb),
                    function () {
                        function e(t, i, a) {
                            if (a = a || new n, "object" != typeof (t = i(t)) || null === t || t === r || t instanceof RegExp || t instanceof Date || t instanceof String || t instanceof Number || t instanceof Boolean) return t;
                            var o = t instanceof Array ? [] : {};
                            return a.save(t, o),
                                function (e, n) {
                                    if (e instanceof Array) {
                                        for (var t = 0; t < e.length; t++) n(t);
                                        "function" == typeof e.toJSON && n("toJSON")
                                    } else
                                        for (t in e) n(t)
                                }(t, (function (n) {
                                    var s = i(t[n]);
                                    switch (typeof s) {
                                        case "boolean":
                                        case "number":
                                        case "string":
                                        case "function":
                                            o[n] = s;
                                            break;
                                        case "object":
                                        case "undefined":
                                            var c = a.get(s);
                                            o[n] = c !== r ? c : e(s, i, a)
                                    }
                                })), o
                        }

                        function n() {
                            this.keys = [], this.values = []
                        }
                        w.ad = function (n) {
                            if (0 == arguments.length) throw Error("When calling ko.toJS, pass the object you want to convert.");
                            return e(n, (function (e) {
                                for (var n = 0; w.O(e) && 10 > n; n++) e = e();
                                return e
                            }))
                        }, w.toJSON = function (e, n, t) {
                            return e = w.ad(e), w.a.hc(e, n, t)
                        }, n.prototype = {
                            constructor: n,
                            save: function (e, n) {
                                var t = w.a.A(this.keys, e);
                                0 <= t ? this.values[t] = n : (this.keys.push(e), this.values.push(n))
                            },
                            get: function (e) {
                                return 0 <= (e = w.a.A(this.keys, e)) ? this.values[e] : r
                            }
                        }
                    }(), w.b("toJS", w.ad), w.b("toJSON", w.toJSON), w.Wd = function (e, n, t) {
                        function i(n) {
                            var i = w.xb(e, t).extend({
                                    ma: "always"
                                }),
                                a = i.subscribe((function (e) {
                                    e && (a.s(), n(e))
                                }));
                            return i.notifySubscribers(i.v()), a
                        }
                        return "function" != typeof Promise || n ? i(n.bind(t)) : new Promise(i)
                    }, w.b("when", w.Wd), w.w = {
                        M: function (e) {
                            switch (w.a.R(e)) {
                                case "option":
                                    return !0 === e.__ko__hasDomDataOptionValue__ ? w.a.g.get(e, w.c.options.$b) : 7 >= w.a.W ? e.getAttributeNode("value") && e.getAttributeNode("value").specified ? e.value : e.text : e.value;
                                case "select":
                                    return 0 <= e.selectedIndex ? w.w.M(e.options[e.selectedIndex]) : r;
                                default:
                                    return e.value
                            }
                        },
                        cb: function (e, n, t) {
                            switch (w.a.R(e)) {
                                case "option":
                                    "string" == typeof n ? (w.a.g.set(e, w.c.options.$b, r), "__ko__hasDomDataOptionValue__" in e && delete e.__ko__hasDomDataOptionValue__, e.value = n) : (w.a.g.set(e, w.c.options.$b, n), e.__ko__hasDomDataOptionValue__ = !0, e.value = "number" == typeof n ? n : "");
                                    break;
                                case "select":
                                    "" !== n && null !== n || (n = r);
                                    for (var i, a = -1, o = 0, s = e.options.length; o < s; ++o)
                                        if ((i = w.w.M(e.options[o])) == n || "" === i && n === r) {
                                            a = o;
                                            break
                                        }(t || 0 <= a || n === r && 1 < e.size) && (e.selectedIndex = a, 6 === w.a.W && w.a.setTimeout((function () {
                                            e.selectedIndex = a
                                        }), 0));
                                    break;
                                default:
                                    null !== n && n !== r || (n = ""), e.value = n
                            }
                        }
                    }, w.b("selectExtensions", w.w), w.b("selectExtensions.readValue", w.w.M), w.b("selectExtensions.writeValue", w.w.cb), w.m = function () {
                        function e(e) {
                            123 === (e = w.a.Db(e)).charCodeAt(0) && (e = e.slice(1, -1));
                            var n, t = [],
                                r = (e += "\n,").match(i),
                                s = [],
                                c = 0;
                            if (1 < r.length) {
                                for (var d, l = 0; d = r[l]; ++l) {
                                    var u = d.charCodeAt(0);
                                    if (44 === u) {
                                        if (0 >= c) {
                                            t.push(n && s.length ? {
                                                key: n,
                                                value: s.join("")
                                            } : {
                                                unknown: n || s.join("")
                                            }), n = c = 0, s = [];
                                            continue
                                        }
                                    } else if (58 === u) {
                                        if (!c && !n && 1 === s.length) {
                                            n = s.pop();
                                            continue
                                        }
                                    } else {
                                        if (47 === u && 1 < d.length && (47 === d.charCodeAt(1) || 42 === d.charCodeAt(1))) continue;
                                        47 === u && l && 1 < d.length ? (u = r[l - 1].match(a)) && !o[u[0]] && (r = (e = e.substr(e.indexOf(d) + 1)).match(i), l = -1, d = "/") : 40 === u || 123 === u || 91 === u ? ++c : 41 === u || 125 === u || 93 === u ? --c : n || s.length || 34 !== u && 39 !== u || (d = d.slice(1, -1))
                                    }
                                    s.push(d)
                                }
                                if (0 < c) throw Error("Unbalanced parentheses, braces, or brackets")
                            }
                            return t
                        }
                        var n = ["true", "false", "null", "undefined"],
                            t = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,
                            i = RegExp("\"(?:\\\\.|[^\"])*\"|'(?:\\\\.|[^'])*'|`(?:\\\\.|[^`])*`|/\\*(?:[^*]|\\*+[^*/])*\\*+/|//.*\n|/(?:\\\\.|[^/])+/w*|[^\\s:,/][^,\"'`{}()/:[\\]]*[^\\s,\"'`{}()/:[\\]]|[^\\s]", "g"),
                            a = /[\])"'A-Za-z0-9_$]+$/,
                            o = {
                                "in": 1,
                                "return": 1,
                                "typeof": 1
                            },
                            r = {};
                        return {
                            Ra: [],
                            wa: r,
                            ac: e,
                            vb: function (i, a) {
                                function o(e, i) {
                                    var a;
                                    if (!l) {
                                        var u = w.getBindingHandler(e);
                                        if (u && u.preprocess && !(i = u.preprocess(i, e, o))) return;
                                        (u = r[e]) && (a = i, 0 <= w.a.A(n, a) ? a = !1 : (u = a.match(t), a = null !== u && (u[1] ? "Object(" + u[1] + ")" + u[2] : a)), u = a), u && c.push("'" + ("string" == typeof r[e] ? r[e] : e) + "':function(_z){" + a + "=_z}")
                                    }
                                    d && (i = "function(){return " + i + " }"), s.push("'" + e + "':" + i)
                                }
                                var s = [],
                                    c = [],
                                    d = (a = a || {}).valueAccessors,
                                    l = a.bindingParams,
                                    u = "string" == typeof i ? e(i) : i;
                                return w.a.D(u, (function (e) {
                                    o(e.key || e.unknown, e.value)
                                })), c.length && o("_ko_property_writers", "{" + c.join(",") + " }"), s.join(",")
                            },
                            Id: function (e, n) {
                                for (var t = 0; t < e.length; t++)
                                    if (e[t].key == n) return !0;
                                return !1
                            },
                            eb: function (e, n, t, i, a) {
                                e && w.O(e) ? !w.Za(e) || a && e.v() === i || e(i) : (e = n.get("_ko_property_writers")) && e[t] && e[t](i)
                            }
                        }
                    }(), w.b("expressionRewriting", w.m), w.b("expressionRewriting.bindingRewriteValidators", w.m.Ra), w.b("expressionRewriting.parseObjectLiteral", w.m.ac), w.b("expressionRewriting.preProcessBindings", w.m.vb), w.b("expressionRewriting._twoWayBindings", w.m.wa), w.b("jsonExpressionRewriting", w.m), w.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", w.m.vb),
                    function () {
                        function e(e) {
                            return 8 == e.nodeType && o.test(a ? e.text : e.nodeValue)
                        }

                        function n(e) {
                            return 8 == e.nodeType && r.test(a ? e.text : e.nodeValue)
                        }

                        function t(t, i) {
                            for (var a = t, o = 1, r = []; a = a.nextSibling;) {
                                if (n(a) && (w.a.g.set(a, d, !0), 0 == --o)) return r;
                                r.push(a), e(a) && o++
                            }
                            if (!i) throw Error("Cannot find closing comment tag to match: " + t.nodeValue);
                            return null
                        }

                        function i(e, n) {
                            var i = t(e, n);
                            return i ? 0 < i.length ? i[i.length - 1].nextSibling : e.nextSibling : null
                        }
                        var a = c && "\x3c!--test--\x3e" === c.createComment("test").text,
                            o = a ? /^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/,
                            r = a ? /^\x3c!--\s*\/ko\s*--\x3e$/ : /^\s*\/ko\s*$/,
                            s = {
                                ul: !0,
                                ol: !0
                            },
                            d = "__ko_matchedEndComment__";
                        w.h = {
                            ea: {},
                            childNodes: function (n) {
                                return e(n) ? t(n) : n.childNodes
                            },
                            Ea: function (n) {
                                if (e(n))
                                    for (var t = 0, i = (n = w.h.childNodes(n)).length; t < i; t++) w.removeNode(n[t]);
                                else w.a.Tb(n)
                            },
                            va: function (n, t) {
                                if (e(n)) {
                                    w.h.Ea(n);
                                    for (var i = n.nextSibling, a = 0, o = t.length; a < o; a++) i.parentNode.insertBefore(t[a], i)
                                } else w.a.va(n, t)
                            },
                            Vc: function (n, t) {
                                var i;
                                e(n) ? (i = n.nextSibling, n = n.parentNode) : i = n.firstChild, i ? t !== i && n.insertBefore(t, i) : n.appendChild(t)
                            },
                            Wb: function (n, t, i) {
                                i ? (i = i.nextSibling, e(n) && (n = n.parentNode), i ? t !== i && n.insertBefore(t, i) : n.appendChild(t)) : w.h.Vc(n, t)
                            },
                            firstChild: function (t) {
                                if (e(t)) return !t.nextSibling || n(t.nextSibling) ? null : t.nextSibling;
                                if (t.firstChild && n(t.firstChild)) throw Error("Found invalid end comment, as the first child of " + t);
                                return t.firstChild
                            },
                            nextSibling: function (t) {
                                if (e(t) && (t = i(t)), t.nextSibling && n(t.nextSibling)) {
                                    var a = t.nextSibling;
                                    if (n(a) && !w.a.g.get(a, d)) throw Error("Found end comment without a matching opening comment, as child of " + t);
                                    return null
                                }
                                return t.nextSibling
                            },
                            Cd: e,
                            Vd: function (e) {
                                return (e = (a ? e.text : e.nodeValue).match(o)) ? e[1] : null
                            },
                            Sc: function (t) {
                                if (s[w.a.R(t)]) {
                                    var a = t.firstChild;
                                    if (a)
                                        do {
                                            if (1 === a.nodeType) {
                                                var o, r = null;
                                                if (o = a.firstChild)
                                                    do {
                                                        if (r) r.push(o);
                                                        else if (e(o)) {
                                                            var c = i(o, !0);
                                                            c ? o = c : r = [o]
                                                        } else n(o) && (r = [o])
                                                    } while (o = o.nextSibling);
                                                if (o = r)
                                                    for (r = a.nextSibling, c = 0; c < o.length; c++) r ? t.insertBefore(o[c], r) : t.appendChild(o[c])
                                            }
                                        } while (a = a.nextSibling)
                                }
                            }
                        }
                    }(), w.b("virtualElements", w.h), w.b("virtualElements.allowedBindings", w.h.ea), w.b("virtualElements.emptyNode", w.h.Ea), w.b("virtualElements.insertAfter", w.h.Wb), w.b("virtualElements.prepend", w.h.Vc), w.b("virtualElements.setDomNodeChildren", w.h.va), w.ga = function () {
                        this.nd = {}
                    }, w.a.extend(w.ga.prototype, {
                        nodeHasBindings: function (e) {
                            switch (e.nodeType) {
                                case 1:
                                    return null != e.getAttribute("data-bind") || w.j.getComponentNameForNode(e);
                                case 8:
                                    return w.h.Cd(e);
                                default:
                                    return !1
                            }
                        },
                        getBindings: function (e, n) {
                            var t = (t = this.getBindingsString(e, n)) ? this.parseBindingsString(t, n, e) : null;
                            return w.j.tc(t, e, n, !1)
                        },
                        getBindingAccessors: function (e, n) {
                            var t = (t = this.getBindingsString(e, n)) ? this.parseBindingsString(t, n, e, {
                                valueAccessors: !0
                            }) : null;
                            return w.j.tc(t, e, n, !0)
                        },
                        getBindingsString: function (e) {
                            switch (e.nodeType) {
                                case 1:
                                    return e.getAttribute("data-bind");
                                case 8:
                                    return w.h.Vd(e);
                                default:
                                    return null
                            }
                        },
                        parseBindingsString: function (e, n, t, i) {
                            try {
                                var a, o = this.nd,
                                    r = e + (i && i.valueAccessors || "");
                                if (!(a = o[r])) {
                                    var s, c = "with($context){with($data||{}){return{" + w.m.vb(e, i) + "}}}";
                                    s = new Function("$context", "$element", c), a = o[r] = s
                                }
                                return a(n, t)
                            } catch (d) {
                                throw d.message = "Unable to parse bindings.\nBindings value: " + e + "\nMessage: " + d.message, d
                            }
                        }
                    }), w.ga.instance = new w.ga, w.b("bindingProvider", w.ga),
                    function () {
                        function e(e) {
                            var n = (e = w.a.g.get(e, S)) && e.N;
                            n && (e.N = null, n.Tc())
                        }

                        function n(n, t, i) {
                            this.node = n, this.yc = t, this.kb = [], this.H = !1, t.N || w.a.K.za(n, e), i && i.N && (i.N.kb.push(n), this.Kb = i)
                        }

                        function t(e) {
                            return function () {
                                return e
                            }
                        }

                        function i(e) {
                            return e()
                        }

                        function a(e) {
                            return w.a.Ga(w.u.G(e), (function (n, t) {
                                return function () {
                                    return e()[t]
                                }
                            }))
                        }

                        function o(e, n, i) {
                            return "function" == typeof e ? a(e.bind(null, n, i)) : w.a.Ga(e, t)
                        }

                        function d(e, n) {
                            return a(this.getBindings.bind(this, e, n))
                        }

                        function u(e, n) {
                            var t = w.h.firstChild(n);
                            if (t) {
                                var i, a = w.ga.instance,
                                    o = a.preprocessNode;
                                if (o) {
                                    for (; i = t;) t = w.h.nextSibling(i), o.call(a, i);
                                    t = w.h.firstChild(n)
                                }
                                for (; i = t;) t = w.h.nextSibling(i), p(e, i)
                            }
                            w.i.ma(n, w.i.H)
                        }

                        function p(e, n) {
                            var t = e,
                                i = 1 === n.nodeType;
                            i && w.h.Sc(n), (i || w.ga.instance.nodeHasBindings(n)) && (t = f(n, null, e).bindingContextForDescendants), t && !h[w.a.R(n)] && u(t, n)
                        }

                        function f(e, n, t) {
                            var a, o = w.a.g.Ub(e, S, {}),
                                s = o.hd;
                            if (!n) {
                                if (s) throw Error("You cannot apply bindings multiple times to the same element.");
                                o.hd = !0
                            }
                            if (s || (o.context = t), o.Zb || (o.Zb = {}), n && "function" != typeof n) a = n;
                            else {
                                var c = w.ga.instance,
                                    l = c.getBindingAccessors || d,
                                    u = w.$((function () {
                                        return (a = n ? n(t, e) : l.call(c, e, t)) && (t[m] && t[m](), t[v] && t[v]()), a
                                    }), null, {
                                        l: e
                                    });
                                a && u.ja() || (u = null)
                            }
                            var p, f = t;
                            if (a) {
                                var g = function () {
                                        return w.a.Ga(u ? u() : a, i)
                                    },
                                    b = u ? function (e) {
                                        return function () {
                                            return i(u()[e])
                                        }
                                    } : function (e) {
                                        return a[e]
                                    };
                                g.get = function (e) {
                                    return a[e] && i(b(e))
                                }, g.has = function (e) {
                                    return e in a
                                }, w.i.H in a && w.i.subscribe(e, w.i.H, (function () {
                                    var n = (0, a[w.i.H])();
                                    if (n) {
                                        var t = w.h.childNodes(e);
                                        t.length && n(t, w.Ec(t[0]))
                                    }
                                })), w.i.pa in a && (f = w.i.Cb(e, t), w.i.subscribe(e, w.i.pa, (function () {
                                    var n = (0, a[w.i.pa])();
                                    n && w.h.firstChild(e) && n(e)
                                }))), o = function (e) {
                                    var n = [],
                                        t = {},
                                        i = [];
                                    return w.a.P(e, (function a(o) {
                                        if (!t[o]) {
                                            var r = w.getBindingHandler(o);
                                            r && (r.after && (i.push(o), w.a.D(r.after, (function (n) {
                                                if (e[n]) {
                                                    if (-1 !== w.a.A(i, n)) throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + i.join(", "));
                                                    a(n)
                                                }
                                            })), i.length--), n.push({
                                                key: o,
                                                Mc: r
                                            })), t[o] = !0
                                        }
                                    })), n
                                }(a), w.a.D(o, (function (n) {
                                    var t = n.Mc.init,
                                        i = n.Mc.update,
                                        o = n.key;
                                    if (8 === e.nodeType && !w.h.ea[o]) throw Error("The binding '" + o + "' cannot be used with virtual elements");
                                    try {
                                        "function" == typeof t && w.u.G((function () {
                                            var n = t(e, b(o), g, f.$data, f);
                                            if (n && n.controlsDescendantBindings) {
                                                if (p !== r) throw Error("Multiple bindings (" + p + " and " + o + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
                                                p = o
                                            }
                                        })), "function" == typeof i && w.$((function () {
                                            i(e, b(o), g, f.$data, f)
                                        }), null, {
                                            l: e
                                        })
                                    } catch (s) {
                                        throw s.message = 'Unable to process binding "' + o + ": " + a[o] + '"\nMessage: ' + s.message, s
                                    }
                                }))
                            }
                            return {
                                shouldBindDescendants: o = p === r,
                                bindingContextForDescendants: o && f
                            }
                        }

                        function g(e, n) {
                            return e && e instanceof w.fa ? e : new w.fa(e, r, r, n)
                        }
                        var m = w.a.Da("_subscribable"),
                            b = w.a.Da("_ancestorBindingInfo"),
                            v = w.a.Da("_dataDependency");
                        w.c = {};
                        var h = {
                            script: !0,
                            textarea: !0,
                            template: !0
                        };
                        w.getBindingHandler = function (e) {
                            return w.c[e]
                        };
                        var _ = {};
                        w.fa = function (e, n, t, i, a) {
                            function o() {
                                var e = u ? l() : l,
                                    a = w.a.f(e);
                                return n ? (w.a.extend(c, n), b in n && (c[b] = n[b])) : (c.$parents = [], c.$root = a, c.ko = w), c[m] = s, d ? a = c.$data : (c.$rawData = e, c.$data = a), t && (c[t] = a), i && i(c, n, a), n && n[m] && !w.S.o().Vb(n[m]) && n[m](), p && (c[v] = p), c.$data
                            }
                            var s, c = this,
                                d = e === _,
                                l = d ? r : e,
                                u = "function" == typeof l && !w.O(l),
                                p = a && a.dataDependency;
                            a && a.exportDependencies ? o() : ((s = w.xb(o)).v(), s.ja() ? s.equalityComparer = null : c[m] = r)
                        }, w.fa.prototype.createChildContext = function (e, n, t, i) {
                            if (!i && n && "object" == typeof n && (n = (i = n).as, t = i.extend), n && i && i.noChildContext) {
                                var a = "function" == typeof e && !w.O(e);
                                return new w.fa(_, this, null, (function (i) {
                                    t && t(i), i[n] = a ? e() : e
                                }), i)
                            }
                            return new w.fa(e, this, n, (function (e, n) {
                                e.$parentContext = n, e.$parent = n.$data, e.$parents = (n.$parents || []).slice(0), e.$parents.unshift(e.$parent), t && t(e)
                            }), i)
                        }, w.fa.prototype.extend = function (e, n) {
                            return new w.fa(_, this, null, (function (n) {
                                w.a.extend(n, "function" == typeof e ? e(n) : e)
                            }), n)
                        };
                        var S = w.a.g.Z();
                        n.prototype.Tc = function () {
                            this.Kb && this.Kb.N && this.Kb.N.sd(this.node)
                        }, n.prototype.sd = function (e) {
                            w.a.Pa(this.kb, e), !this.kb.length && this.H && this.Cc()
                        }, n.prototype.Cc = function () {
                            this.H = !0, this.yc.N && !this.kb.length && (this.yc.N = null, w.a.K.yb(this.node, e), w.i.ma(this.node, w.i.pa), this.Tc())
                        }, w.i = {
                            H: "childrenComplete",
                            pa: "descendantsComplete",
                            subscribe: function (e, n, t, i, a) {
                                var o = w.a.g.Ub(e, S, {});
                                return o.Fa || (o.Fa = new w.T), a && a.notifyImmediately && o.Zb[n] && w.u.G(t, i, [e]), o.Fa.subscribe(t, i, n)
                            },
                            ma: function (e, n) {
                                var t = w.a.g.get(e, S);
                                if (t && (t.Zb[n] = !0, t.Fa && t.Fa.notifySubscribers(e, n), n == w.i.H))
                                    if (t.N) t.N.Cc();
                                    else if (t.N === r && t.Fa && t.Fa.Wa(w.i.pa)) throw Error("descendantsComplete event not supported for bindings on this node")
                            },
                            Cb: function (e, t) {
                                var i = w.a.g.Ub(e, S, {});
                                return i.N || (i.N = new n(e, i, t[b])), t[b] == i ? t : t.extend((function (e) {
                                    e[b] = i
                                }))
                            }
                        }, w.Td = function (e) {
                            return (e = w.a.g.get(e, S)) && e.context
                        }, w.ib = function (e, n, t) {
                            return 1 === e.nodeType && w.h.Sc(e), f(e, n, g(t))
                        }, w.ld = function (e, n, t) {
                            return t = g(t), w.ib(e, o(n, t, e), t)
                        }, w.Oa = function (e, n) {
                            1 !== n.nodeType && 8 !== n.nodeType || u(g(e), n)
                        }, w.vc = function (e, n, t) {
                            if (!l && s.jQuery && (l = s.jQuery), 2 > arguments.length) {
                                if (!(n = c.body)) throw Error("ko.applyBindings: could not find document.body; has the document been loaded?")
                            } else if (!n || 1 !== n.nodeType && 8 !== n.nodeType) throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
                            p(g(e, t), n)
                        }, w.Dc = function (e) {
                            return !e || 1 !== e.nodeType && 8 !== e.nodeType ? r : w.Td(e)
                        }, w.Ec = function (e) {
                            return (e = w.Dc(e)) ? e.$data : r
                        }, w.b("bindingHandlers", w.c), w.b("bindingEvent", w.i), w.b("bindingEvent.subscribe", w.i.subscribe), w.b("bindingEvent.startPossiblyAsyncContentBinding", w.i.Cb), w.b("applyBindings", w.vc), w.b("applyBindingsToDescendants", w.Oa), w.b("applyBindingAccessorsToNode", w.ib), w.b("applyBindingsToNode", w.ld), w.b("contextFor", w.Dc), w.b("dataFor", w.Ec)
                    }(),
                    function (e) {
                        function n(n, i) {
                            var r, s = Object.prototype.hasOwnProperty.call(a, n) ? a[n] : e;
                            s ? s.subscribe(i) : ((s = a[n] = new w.T).subscribe(i), t(n, (function (e, t) {
                                var i = !(!t || !t.synchronous);
                                o[n] = {
                                    definition: e,
                                    Gd: i
                                }, delete a[n], r || i ? s.notifySubscribers(e) : w.na.zb((function () {
                                    s.notifySubscribers(e)
                                }))
                            })), r = !0)
                        }

                        function t(e, n) {
                            i("getConfig", [e], (function (t) {
                                t ? i("loadComponent", [e, t], (function (e) {
                                    n(e, t)
                                })) : n(null, null)
                            }))
                        }

                        function i(n, t, a, o) {
                            o || (o = w.j.loaders.slice(0));
                            var r = o.shift();
                            if (r) {
                                var s = r[n];
                                if (s) {
                                    var c = !1;
                                    if (s.apply(r, t.concat((function (e) {
                                            c ? a(null) : null !== e ? a(e) : i(n, t, a, o)
                                        }))) !== e && (c = !0, !r.suppressLoaderExceptions)) throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.")
                                } else i(n, t, a, o)
                            } else a(null)
                        }
                        var a = {},
                            o = {};
                        w.j = {
                            get: function (t, i) {
                                var a = Object.prototype.hasOwnProperty.call(o, t) ? o[t] : e;
                                a ? a.Gd ? w.u.G((function () {
                                    i(a.definition)
                                })) : w.na.zb((function () {
                                    i(a.definition)
                                })) : n(t, i)
                            },
                            Bc: function (e) {
                                delete o[e]
                            },
                            oc: i
                        }, w.j.loaders = [], w.b("components", w.j), w.b("components.get", w.j.get), w.b("components.clearCachedDefinition", w.j.Bc)
                    }(),
                    function () {
                        function e(e, n, t, i) {
                            function o() {
                                0 == --s && i(r)
                            }
                            var r = {},
                                s = 2,
                                c = t.template;
                            t = t.viewModel, c ? a(n, c, (function (n) {
                                w.j.oc("loadTemplate", [e, n], (function (e) {
                                    r.template = e, o()
                                }))
                            })) : o(), t ? a(n, t, (function (n) {
                                w.j.oc("loadViewModel", [e, n], (function (e) {
                                    r[d] = e, o()
                                }))
                            })) : o()
                        }

                        function t(e) {
                            switch (w.a.R(e)) {
                                case "script":
                                    return w.a.ua(e.text);
                                case "textarea":
                                    return w.a.ua(e.value);
                                case "template":
                                    if (i(e.content)) return w.a.Ca(e.content.childNodes)
                            }
                            return w.a.Ca(e.childNodes)
                        }

                        function i(e) {
                            return s.DocumentFragment ? e instanceof DocumentFragment : e && 11 === e.nodeType
                        }

                        function a(e, t, i) {
                            "string" == typeof t.require ? n || s.require ? (n || s.require)([t.require], (function (e) {
                                e && "object" == typeof e && e.Xd && e["default"] && (e = e["default"]), i(e)
                            })) : e("Uses require, but no AMD loader is present") : i(t)
                        }

                        function o(e) {
                            return function (n) {
                                throw Error("Component '" + e + "': " + n)
                            }
                        }
                        var r = {};
                        w.j.register = function (e, n) {
                            if (!n) throw Error("Invalid configuration for " + e);
                            if (w.j.tb(e)) throw Error("Component " + e + " is already registered");
                            r[e] = n
                        }, w.j.tb = function (e) {
                            return Object.prototype.hasOwnProperty.call(r, e)
                        }, w.j.unregister = function (e) {
                            delete r[e], w.j.Bc(e)
                        }, w.j.Fc = {
                            getConfig: function (e, n) {
                                n(w.j.tb(e) ? r[e] : null)
                            },
                            loadComponent: function (n, t, i) {
                                var r = o(n);
                                a(r, t, (function (t) {
                                    e(n, r, t, i)
                                }))
                            },
                            loadTemplate: function (e, n, a) {
                                if (e = o(e), "string" == typeof n) a(w.a.ua(n));
                                else if (n instanceof Array) a(n);
                                else if (i(n)) a(w.a.la(n.childNodes));
                                else if (n.element)
                                    if (n = n.element, s.HTMLElement ? n instanceof HTMLElement : n && n.tagName && 1 === n.nodeType) a(t(n));
                                    else if ("string" == typeof n) {
                                    var r = c.getElementById(n);
                                    r ? a(t(r)) : e("Cannot find element with ID " + n)
                                } else e("Unknown element type: " + n);
                                else e("Unknown template value: " + n)
                            },
                            loadViewModel: function (e, n, t) {
                                ! function i(e, n, t) {
                                    if ("function" == typeof n) t((function (e) {
                                        return new n(e)
                                    }));
                                    else if ("function" == typeof n[d]) t(n[d]);
                                    else if ("instance" in n) {
                                        var a = n.instance;
                                        t((function () {
                                            return a
                                        }))
                                    } else "viewModel" in n ? i(e, n.viewModel, t) : e("Unknown viewModel value: " + n)
                                }(o(e), n, t)
                            }
                        };
                        var d = "createViewModel";
                        w.b("components.register", w.j.register), w.b("components.isRegistered", w.j.tb), w.b("components.unregister", w.j.unregister), w.b("components.defaultLoader", w.j.Fc), w.j.loaders.push(w.j.Fc), w.j.dd = r
                    }(),
                    function () {
                        function e(e, t) {
                            if (i = e.getAttribute("params")) {
                                var i = n.parseBindingsString(i, t, e, {
                                        valueAccessors: !0,
                                        bindingParams: !0
                                    }),
                                    a = (i = w.a.Ga(i, (function (n) {
                                        return w.o(n, null, {
                                            l: e
                                        })
                                    })), w.a.Ga(i, (function (n) {
                                        var t = n.v();
                                        return n.ja() ? w.o({
                                            read: function () {
                                                return w.a.f(n())
                                            },
                                            write: w.Za(t) && function (e) {
                                                n()(e)
                                            },
                                            l: e
                                        }) : t
                                    })));
                                return Object.prototype.hasOwnProperty.call(a, "$raw") || (a.$raw = i), a
                            }
                            return {
                                $raw: {}
                            }
                        }
                        w.j.getComponentNameForNode = function (e) {
                            var n = w.a.R(e);
                            if (w.j.tb(n) && (-1 != n.indexOf("-") || "[object HTMLUnknownElement]" == "" + e || 8 >= w.a.W && e.tagName === n)) return n
                        }, w.j.tc = function (n, t, i, a) {
                            if (1 === t.nodeType) {
                                var o = w.j.getComponentNameForNode(t);
                                if (o) {
                                    if ((n = n || {}).component) throw Error('Cannot use the "component" binding on a custom element matching a component');
                                    var r = {
                                        name: o,
                                        params: e(t, i)
                                    };
                                    n.component = a ? function () {
                                        return r
                                    } : r
                                }
                            }
                            return n
                        };
                        var n = new w.ga;
                        9 > w.a.W && (w.j.register = function (e) {
                            return function (n) {
                                return e.apply(this, arguments)
                            }
                        }(w.j.register), c.createDocumentFragment = function (e) {
                            return function () {
                                var n, t = e(),
                                    i = w.j.dd;
                                for (n in i);
                                return t
                            }
                        }(c.createDocumentFragment))
                    }(),
                    function () {
                        var e = 0;
                        w.c.component = {
                            init: function (n, t, i, a, o) {
                                function r() {
                                    var e = s && s.dispose;
                                    "function" == typeof e && e.call(s), d && d.s(), c = s = d = null
                                }
                                var s, c, d, l = w.a.la(w.h.childNodes(n));
                                return w.h.Ea(n), w.a.K.za(n, r), w.o((function () {
                                    var i, a, u = w.a.f(t());
                                    if ("string" == typeof u ? i = u : (i = w.a.f(u.name), a = w.a.f(u.params)), !i) throw Error("No component name specified");
                                    var p = w.i.Cb(n, o),
                                        f = c = ++e;
                                    w.j.get(i, (function (e) {
                                        if (c === f) {
                                            if (r(), !e) throw Error("Unknown component '" + i + "'");
                                            ! function (e, n, t) {
                                                if (!(n = n.template)) throw Error("Component '" + e + "' has no template");
                                                e = w.a.Ca(n), w.h.va(t, e)
                                            }(i, e, n);
                                            var t = function (e, n, t) {
                                                var i = e.createViewModel;
                                                return i ? i.call(e, n, t) : n
                                            }(e, a, {
                                                element: n,
                                                templateNodes: l
                                            });
                                            e = p.createChildContext(t, {
                                                extend: function (e) {
                                                    e.$component = t, e.$componentTemplateNodes = l
                                                }
                                            }), t && t.koDescendantsComplete && (d = w.i.subscribe(n, w.i.pa, t.koDescendantsComplete, t)), s = t, w.Oa(e, n)
                                        }
                                    }))
                                }), null, {
                                    l: n
                                }), {
                                    controlsDescendantBindings: !0
                                }
                            }
                        }, w.h.ea.component = !0
                    }();
                var A = {
                    "class": "className",
                    "for": "htmlFor"
                };
                w.c.attr = {
                        update: function (e, n) {
                            var t = w.a.f(n()) || {};
                            w.a.P(t, (function (n, t) {
                                t = w.a.f(t);
                                var i = n.indexOf(":"),
                                    a = (i = "lookupNamespaceURI" in e && 0 < i && e.lookupNamespaceURI(n.substr(0, i)), !1 === t || null === t || t === r);
                                a ? i ? e.removeAttributeNS(i, n) : e.removeAttribute(n) : t = t.toString(), 8 >= w.a.W && n in A ? (n = A[n], a ? e.removeAttribute(n) : e[n] = t) : a || (i ? e.setAttributeNS(i, n, t) : e.setAttribute(n, t)), "name" === n && w.a.Yc(e, a ? "" : t)
                            }))
                        }
                    }, w.c.checked = {
                        after: ["value", "attr"],
                        init: function (e, n, t) {
                            function i() {
                                var i = e.checked,
                                    c = a();
                                if (!w.S.Ya() && (i || !s && !w.S.qa())) {
                                    var u = w.u.G(n);
                                    if (d) {
                                        var f = l ? u.v() : u,
                                            g = p;
                                        p = c, g !== c ? i && (w.a.Na(f, c, !0), w.a.Na(f, g, !1)) : w.a.Na(f, c, i), l && w.Za(u) && u(f)
                                    } else o && (c === r ? c = i : i || (c = r)), w.m.eb(u, t, "checked", c, !0)
                                }
                            }
                            var a = w.xb((function () {
                                    return t.has("checkedValue") ? w.a.f(t.get("checkedValue")) : u ? t.has("value") ? w.a.f(t.get("value")) : e.value : void 0
                                })),
                                o = "checkbox" == e.type,
                                s = "radio" == e.type;
                            if (o || s) {
                                var c = n(),
                                    d = o && w.a.f(c) instanceof Array,
                                    l = !(d && c.push && c.splice),
                                    u = s || d,
                                    p = d ? a() : r;
                                s && !e.name && w.c.uniqueName.init(e, (function () {
                                    return !0
                                })), w.o(i, null, {
                                    l: e
                                }), w.a.B(e, "click", i), w.o((function () {
                                    var t = w.a.f(n()),
                                        i = a();
                                    d ? (e.checked = 0 <= w.a.A(t, i), p = i) : e.checked = o && i === r ? !!t : a() === t
                                }), null, {
                                    l: e
                                }), c = r
                            }
                        }
                    }, w.m.wa.checked = !0, w.c.checkedValue = {
                        update: function (e, n) {
                            e.value = w.a.f(n())
                        }
                    }, w.c["class"] = {
                        update: function (e, n) {
                            var t = w.a.Db(w.a.f(n()));
                            w.a.Eb(e, e.__ko__cssValue, !1), e.__ko__cssValue = t, w.a.Eb(e, t, !0)
                        }
                    }, w.c.css = {
                        update: function (e, n) {
                            var t = w.a.f(n());
                            null !== t && "object" == typeof t ? w.a.P(t, (function (n, t) {
                                t = w.a.f(t), w.a.Eb(e, n, t)
                            })) : w.c["class"].update(e, n)
                        }
                    }, w.c.enable = {
                        update: function (e, n) {
                            var t = w.a.f(n());
                            t && e.disabled ? e.removeAttribute("disabled") : t || e.disabled || (e.disabled = !0)
                        }
                    }, w.c.disable = {
                        update: function (e, n) {
                            w.c.enable.update(e, (function () {
                                return !w.a.f(n())
                            }))
                        }
                    }, w.c.event = {
                        init: function (e, n, t, i, a) {
                            var o = n() || {};
                            w.a.P(o, (function (o) {
                                "string" == typeof o && w.a.B(e, o, (function (e) {
                                    var r, s = n()[o];
                                    if (s) {
                                        try {
                                            var c = w.a.la(arguments);
                                            i = a.$data, c.unshift(i), r = s.apply(i, c)
                                        } finally {
                                            !0 !== r && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
                                        }!1 === t.get(o + "Bubble") && (e.cancelBubble = !0, e.stopPropagation && e.stopPropagation())
                                    }
                                }))
                            }))
                        }
                    }, w.c.foreach = {
                        Rc: function (e) {
                            return function () {
                                var n = e(),
                                    t = w.a.bc(n);
                                return t && "number" != typeof t.length ? (w.a.f(n), {
                                    foreach: t.data,
                                    as: t.as,
                                    noChildContext: t.noChildContext,
                                    includeDestroyed: t.includeDestroyed,
                                    afterAdd: t.afterAdd,
                                    beforeRemove: t.beforeRemove,
                                    afterRender: t.afterRender,
                                    beforeMove: t.beforeMove,
                                    afterMove: t.afterMove,
                                    templateEngine: w.ba.Ma
                                }) : {
                                    foreach: n,
                                    templateEngine: w.ba.Ma
                                }
                            }
                        },
                        init: function (e, n) {
                            return w.c.template.init(e, w.c.foreach.Rc(n))
                        },
                        update: function (e, n, t, i, a) {
                            return w.c.template.update(e, w.c.foreach.Rc(n), t, i, a)
                        }
                    }, w.m.Ra.foreach = !1, w.h.ea.foreach = !0, w.c.hasfocus = {
                        init: function (e, n, t) {
                            function i(i) {
                                e.__ko_hasfocusUpdating = !0;
                                var a = e.ownerDocument;
                                if ("activeElement" in a) {
                                    var o;
                                    try {
                                        o = a.activeElement
                                    } catch (r) {
                                        o = a.body
                                    }
                                    i = o === e
                                }
                                a = n(), w.m.eb(a, t, "hasfocus", i, !0), e.__ko_hasfocusLastValue = i, e.__ko_hasfocusUpdating = !1
                            }
                            var a = i.bind(null, !0),
                                o = i.bind(null, !1);
                            w.a.B(e, "focus", a), w.a.B(e, "focusin", a), w.a.B(e, "blur", o), w.a.B(e, "focusout", o), e.__ko_hasfocusLastValue = !1
                        },
                        update: function (e, n) {
                            var t = !!w.a.f(n());
                            e.__ko_hasfocusUpdating || e.__ko_hasfocusLastValue === t || (t ? e.focus() : e.blur(), !t && e.__ko_hasfocusLastValue && e.ownerDocument.body.focus(), w.u.G(w.a.Fb, null, [e, t ? "focusin" : "focusout"]))
                        }
                    }, w.m.wa.hasfocus = !0, w.c.hasFocus = w.c.hasfocus, w.m.wa.hasFocus = "hasfocus", w.c.html = {
                        init: function () {
                            return {
                                controlsDescendantBindings: !0
                            }
                        },
                        update: function (e, n) {
                            w.a.fc(e, n())
                        }
                    },
                    function () {
                        function e(e, n, t) {
                            w.c[e] = {
                                init: function (e, i, a, o, r) {
                                    var s, c, d, l, u, p = {};
                                    if (n) {
                                        o = a.get("as");
                                        var f = a.get("noChildContext");
                                        p = {
                                            as: o,
                                            noChildContext: f,
                                            exportDependencies: u = !(o && f)
                                        }
                                    }
                                    return l = (d = "render" == a.get("completeOn")) || a.has(w.i.pa), w.o((function () {
                                        var a, o = w.a.f(i()),
                                            f = !t != !o,
                                            g = !c;
                                        (u || f !== s) && (l && (r = w.i.Cb(e, r)), f && (n && !u || (p.dataDependency = w.S.o()), a = n ? r.createChildContext("function" == typeof o ? o : i, p) : w.S.qa() ? r.extend(null, p) : r), g && w.S.qa() && (c = w.a.Ca(w.h.childNodes(e), !0)), f ? (g || w.h.va(e, w.a.Ca(c)), w.Oa(a, e)) : (w.h.Ea(e), d || w.i.ma(e, w.i.H)), s = f)
                                    }), null, {
                                        l: e
                                    }), {
                                        controlsDescendantBindings: !0
                                    }
                                }
                            }, w.m.Ra[e] = !1, w.h.ea[e] = !0
                        }
                        e("if"), e("ifnot", !1, !0), e("with", !0)
                    }(), w.c["let"] = {
                        init: function (e, n, t, i, a) {
                            return n = a.extend(n), w.Oa(n, e), {
                                controlsDescendantBindings: !0
                            }
                        }
                    }, w.h.ea["let"] = !0;
                var R = {};
                w.c.options = {
                        init: function (e) {
                            if ("select" !== w.a.R(e)) throw Error("options binding applies only to SELECT elements");
                            for (; 0 < e.length;) e.remove(0);
                            return {
                                controlsDescendantBindings: !0
                            }
                        },
                        update: function (e, n, t) {
                            function i() {
                                return w.a.jb(e.options, (function (e) {
                                    return e.selected
                                }))
                            }

                            function a(e, n, t) {
                                var i = typeof n;
                                return "function" == i ? n(e) : "string" == i ? e[n] : t
                            }

                            function o(n, t) {
                                if (g && l) w.i.ma(e, w.i.H);
                                else if (f.length) {
                                    var i = 0 <= w.a.A(f, w.w.M(t[0]));
                                    w.a.Zc(t[0], i), g && !i && w.u.G(w.a.Fb, null, [e, "change"])
                                }
                            }
                            var s = e.multiple,
                                c = 0 != e.length && s ? e.scrollTop : null,
                                d = w.a.f(n()),
                                l = t.get("valueAllowUnset") && t.has("value"),
                                u = t.get("optionsIncludeDestroyed");
                            n = {};
                            var p, f = [];
                            l || (s ? f = w.a.Mb(i(), w.w.M) : 0 <= e.selectedIndex && f.push(w.w.M(e.options[e.selectedIndex]))), d && ("undefined" == typeof d.length && (d = [d]), p = w.a.jb(d, (function (e) {
                                return u || e === r || null === e || !w.a.f(e._destroy)
                            })), t.has("optionsCaption") && null !== (d = w.a.f(t.get("optionsCaption"))) && d !== r && p.unshift(R));
                            var g = !1;
                            n.beforeRemove = function (n) {
                                e.removeChild(n)
                            }, d = o, t.has("optionsAfterRender") && "function" == typeof t.get("optionsAfterRender") && (d = function (e, n) {
                                o(0, n), w.u.G(t.get("optionsAfterRender"), null, [n[0], e !== R ? e : r])
                            }), w.a.ec(e, p, (function (n, i, o) {
                                return o.length && (f = !l && o[0].selected ? [w.w.M(o[0])] : [], g = !0), i = e.ownerDocument.createElement("option"), n === R ? (w.a.Bb(i, t.get("optionsCaption")), w.w.cb(i, r)) : (o = a(n, t.get("optionsValue"), n), w.w.cb(i, w.a.f(o)), n = a(n, t.get("optionsText"), o), w.a.Bb(i, n)), [i]
                            }), n, d), l || (s ? f.length && i().length < f.length : f.length && 0 <= e.selectedIndex ? w.w.M(e.options[e.selectedIndex]) !== f[0] : f.length || 0 <= e.selectedIndex) && w.u.G(w.a.Fb, null, [e, "change"]), (l || w.S.Ya()) && w.i.ma(e, w.i.H), w.a.wd(e), c && 20 < Math.abs(c - e.scrollTop) && (e.scrollTop = c)
                        }
                    }, w.c.options.$b = w.a.g.Z(), w.c.selectedOptions = {
                        init: function (e, n, t) {
                            function i() {
                                var i = n(),
                                    a = [];
                                w.a.D(e.getElementsByTagName("option"), (function (e) {
                                    e.selected && a.push(w.w.M(e))
                                })), w.m.eb(i, t, "selectedOptions", a)
                            }

                            function a() {
                                var t = w.a.f(n()),
                                    i = e.scrollTop;
                                t && "number" == typeof t.length && w.a.D(e.getElementsByTagName("option"), (function (e) {
                                    var n = 0 <= w.a.A(t, w.w.M(e));
                                    e.selected != n && w.a.Zc(e, n)
                                })), e.scrollTop = i
                            }
                            if ("select" != w.a.R(e)) throw Error("selectedOptions binding applies only to SELECT elements");
                            var o;
                            w.i.subscribe(e, w.i.H, (function () {
                                o ? i() : (w.a.B(e, "change", i), o = w.o(a, null, {
                                    l: e
                                }))
                            }), null, {
                                notifyImmediately: !0
                            })
                        },
                        update: function () {}
                    }, w.m.wa.selectedOptions = !0, w.c.style = {
                        update: function (e, n) {
                            var t = w.a.f(n() || {});
                            w.a.P(t, (function (n, t) {
                                if (null !== (t = w.a.f(t)) && t !== r && !1 !== t || (t = ""), l) l(e).css(n, t);
                                else if (/^--/.test(n)) e.style.setProperty(n, t);
                                else {
                                    n = n.replace(/-(\w)/g, (function (e, n) {
                                        return n.toUpperCase()
                                    }));
                                    var i = e.style[n];
                                    e.style[n] = t, t === i || e.style[n] != i || isNaN(t) || (e.style[n] = t + "px")
                                }
                            }))
                        }
                    }, w.c.submit = {
                        init: function (e, n, t, i, a) {
                            if ("function" != typeof n()) throw Error("The value for a submit binding must be a function");
                            w.a.B(e, "submit", (function (t) {
                                var i, o = n();
                                try {
                                    i = o.call(a.$data, e)
                                } finally {
                                    !0 !== i && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
                                }
                            }))
                        }
                    }, w.c.text = {
                        init: function () {
                            return {
                                controlsDescendantBindings: !0
                            }
                        },
                        update: function (e, n) {
                            w.a.Bb(e, n())
                        }
                    }, w.h.ea.text = !0,
                    function () {
                        if (s && s.navigator) {
                            var e, n, t, i, a, o = function (e) {
                                    if (e) return parseFloat(e[1])
                                },
                                c = s.navigator.userAgent;
                            (e = s.opera && s.opera.version && parseInt(s.opera.version())) || (a = o(c.match(/Edge\/([^ ]+)$/))) || o(c.match(/Chrome\/([^ ]+)/)) || (n = o(c.match(/Version\/([^ ]+) Safari/))) || (t = o(c.match(/Firefox\/([^ ]+)/))) || (i = w.a.W || o(c.match(/MSIE ([^ ]+)/))) || (i = o(c.match(/rv:([^ )]+)/)))
                        }
                        if (8 <= i && 10 > i) var d = w.a.g.Z(),
                            l = w.a.g.Z(),
                            u = function (e) {
                                var n = this.activeElement;
                                (n = n && w.a.g.get(n, l)) && n(e)
                            },
                            p = function (e, n) {
                                var t = e.ownerDocument;
                                w.a.g.get(t, d) || (w.a.g.set(t, d, !0), w.a.B(t, "selectionchange", u)), w.a.g.set(e, l, n)
                            };
                        w.c.textInput = {
                            init: function (o, s, c) {
                                function d(e, n) {
                                    w.a.B(o, e, n)
                                }

                                function l() {
                                    f || (g = o.value, f = w.a.setTimeout(u, 4))
                                }

                                function u() {
                                    clearTimeout(f), g = f = r;
                                    var e = o.value;
                                    m !== e && (m = e, w.m.eb(s(), c, "textInput", e))
                                }
                                var f, g, m = o.value,
                                    b = 9 == w.a.W ? l : u,
                                    v = !1;
                                i && d("keypress", u), 11 > i && d("propertychange", (function (e) {
                                    v || "value" !== e.propertyName || b(e)
                                })), 8 == i && (d("keyup", u), d("keydown", u)), p && (p(o, b), d("dragend", l)), (!i || 9 <= i) && d("input", b), 5 > n && "textarea" === w.a.R(o) ? (d("keydown", l), d("paste", l), d("cut", l)) : 11 > e ? d("keydown", l) : 4 > t ? (d("DOMAutoComplete", u), d("dragdrop", u), d("drop", u)) : a && "number" === o.type && d("keydown", l), d("change", u), d("blur", u), w.o((function h() {
                                    var e = w.a.f(s());
                                    null !== e && e !== r || (e = ""), g !== r && e === g ? w.a.setTimeout(h, 4) : o.value !== e && (v = !0, o.value = e, v = !1, m = o.value)
                                }), null, {
                                    l: o
                                })
                            }
                        }, w.m.wa.textInput = !0, w.c.textinput = {
                            preprocess: function (e, n, t) {
                                t("textInput", e)
                            }
                        }
                    }(), w.c.uniqueName = {
                        init: function (e, n) {
                            if (n()) {
                                var t = "ko_unique_" + ++w.c.uniqueName.rd;
                                w.a.Yc(e, t)
                            }
                        }
                    }, w.c.uniqueName.rd = 0, w.c.using = {
                        init: function (e, n, t, i, a) {
                            var o;
                            return t.has("as") && (o = {
                                as: t.get("as"),
                                noChildContext: t.get("noChildContext")
                            }), n = a.createChildContext(n, o), w.Oa(n, e), {
                                controlsDescendantBindings: !0
                            }
                        }
                    }, w.h.ea.using = !0, w.c.value = {
                        init: function (e, n, t) {
                            var i = w.a.R(e),
                                a = "input" == i;
                            if (!a || "checkbox" != e.type && "radio" != e.type) {
                                var o = [],
                                    s = t.get("valueUpdate"),
                                    c = !1,
                                    d = null;
                                s && (o = "string" == typeof s ? [s] : w.a.wc(s), w.a.Pa(o, "change"));
                                var l, u, p = function () {
                                    d = null, c = !1;
                                    var i = n(),
                                        a = w.w.M(e);
                                    w.m.eb(i, t, "value", a)
                                };
                                !w.a.W || !a || "text" != e.type || "off" == e.autocomplete || e.form && "off" == e.form.autocomplete || -1 != w.a.A(o, "propertychange") || (w.a.B(e, "propertychange", (function () {
                                    c = !0
                                })), w.a.B(e, "focus", (function () {
                                    c = !1
                                })), w.a.B(e, "blur", (function () {
                                    c && p()
                                }))), w.a.D(o, (function (n) {
                                    var t = p;
                                    w.a.Ud(n, "after") && (t = function () {
                                        d = w.w.M(e), w.a.setTimeout(p, 0)
                                    }, n = n.substring(5)), w.a.B(e, n, t)
                                })), l = a && "file" == e.type ? function () {
                                    var t = w.a.f(n());
                                    null === t || t === r || "" === t ? e.value = "" : w.u.G(p)
                                } : function () {
                                    var a = w.a.f(n()),
                                        o = w.w.M(e);
                                    null !== d && a === d ? w.a.setTimeout(l, 0) : a === o && o !== r || ("select" === i ? (o = t.get("valueAllowUnset"), w.w.cb(e, a, o), o || a === w.w.M(e) || w.u.G(p)) : w.w.cb(e, a))
                                }, "select" === i ? w.i.subscribe(e, w.i.H, (function () {
                                    u ? t.get("valueAllowUnset") ? l() : p() : (w.a.B(e, "change", p), u = w.o(l, null, {
                                        l: e
                                    }))
                                }), null, {
                                    notifyImmediately: !0
                                }) : (w.a.B(e, "change", p), w.o(l, null, {
                                    l: e
                                }))
                            } else w.ib(e, {
                                checkedValue: n
                            })
                        },
                        update: function () {}
                    }, w.m.wa.value = !0, w.c.visible = {
                        update: function (e, n) {
                            var t = w.a.f(n()),
                                i = "none" != e.style.display;
                            t && !i ? e.style.display = "" : !t && i && (e.style.display = "none")
                        }
                    }, w.c.hidden = {
                        update: function (e, n) {
                            w.c.visible.update(e, (function () {
                                return !w.a.f(n())
                            }))
                        }
                    },
                    function (e) {
                        w.c[e] = {
                            init: function (n, t, i, a, o) {
                                return w.c.event.init.call(this, n, (function () {
                                    var n = {};
                                    return n[e] = t(), n
                                }), i, a, o)
                            }
                        }
                    }("click"), w.ca = function () {}, w.ca.prototype.renderTemplateSource = function () {
                        throw Error("Override renderTemplateSource")
                    }, w.ca.prototype.createJavaScriptEvaluatorBlock = function () {
                        throw Error("Override createJavaScriptEvaluatorBlock")
                    }, w.ca.prototype.makeTemplateSource = function (e, n) {
                        if ("string" == typeof e) {
                            var t = (n = n || c).getElementById(e);
                            if (!t) throw Error("Cannot find template with ID " + e);
                            return new w.C.F(t)
                        }
                        if (1 == e.nodeType || 8 == e.nodeType) return new w.C.ia(e);
                        throw Error("Unknown template type: " + e)
                    }, w.ca.prototype.renderTemplate = function (e, n, t, i) {
                        return e = this.makeTemplateSource(e, i), this.renderTemplateSource(e, n, t, i)
                    }, w.ca.prototype.isTemplateRewritten = function (e, n) {
                        return !1 === this.allowTemplateRewriting || this.makeTemplateSource(e, n).data("isRewritten")
                    }, w.ca.prototype.rewriteTemplate = function (e, n, t) {
                        n = n((e = this.makeTemplateSource(e, t)).text()), e.text(n), e.data("isRewritten", !0)
                    }, w.b("templateEngine", w.ca), w.kc = function () {
                        function e(e, n, t, i) {
                            e = w.m.ac(e);
                            for (var a = w.m.Ra, o = 0; o < e.length; o++) {
                                var r = e[o].key;
                                if (Object.prototype.hasOwnProperty.call(a, r)) {
                                    var s = a[r];
                                    if ("function" == typeof s) {
                                        if (r = s(e[o].value)) throw Error(r)
                                    } else if (!s) throw Error("This template engine does not support the '" + r + "' binding within its templates")
                                }
                            }
                            return t = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + w.m.vb(e, {
                                valueAccessors: !0
                            }) + " } })()},'" + t.toLowerCase() + "')", i.createJavaScriptEvaluatorBlock(t) + n
                        }
                        var n = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,
                            t = /\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;
                        return {
                            xd: function (e, n, t) {
                                n.isTemplateRewritten(e, t) || n.rewriteTemplate(e, (function (e) {
                                    return w.kc.Ld(e, n)
                                }), t)
                            },
                            Ld: function (i, a) {
                                return i.replace(n, (function (n, t, i, o, r) {
                                    return e(r, t, i, a)
                                })).replace(t, (function (n, t) {
                                    return e(t, "\x3c!-- ko --\x3e", "#comment", a)
                                }))
                            },
                            md: function (e, n) {
                                return w.aa.Xb((function (t, i) {
                                    var a = t.nextSibling;
                                    a && a.nodeName.toLowerCase() === n && w.ib(a, e, i)
                                }))
                            }
                        }
                    }(), w.b("__tr_ambtns", w.kc.md),
                    function () {
                        w.C = {}, w.C.F = function (e) {
                            if (this.F = e) {
                                var n = w.a.R(e);
                                this.ab = "script" === n ? 1 : "textarea" === n ? 2 : "template" == n && e.content && 11 === e.content.nodeType ? 3 : 4
                            }
                        }, w.C.F.prototype.text = function () {
                            var e = 1 === this.ab ? "text" : 2 === this.ab ? "value" : "innerHTML";
                            if (0 == arguments.length) return this.F[e];
                            var n = arguments[0];
                            "innerHTML" === e ? w.a.fc(this.F, n) : this.F[e] = n
                        };
                        var e = w.a.g.Z() + "_";
                        w.C.F.prototype.data = function (n) {
                            if (1 === arguments.length) return w.a.g.get(this.F, e + n);
                            w.a.g.set(this.F, e + n, arguments[1])
                        };
                        var n = w.a.g.Z();
                        w.C.F.prototype.nodes = function () {
                            var e = this.F;
                            if (0 == arguments.length) {
                                var t = w.a.g.get(e, n) || {},
                                    i = t.lb || (3 === this.ab ? e.content : 4 === this.ab ? e : r);
                                if (!i || t.jd) {
                                    var a = this.text();
                                    a && a !== t.bb && (i = w.a.Md(a, e.ownerDocument), w.a.g.set(e, n, {
                                        lb: i,
                                        bb: a,
                                        jd: !0
                                    }))
                                }
                                return i
                            }
                            t = arguments[0], this.ab !== r && this.text(""), w.a.g.set(e, n, {
                                lb: t
                            })
                        }, w.C.ia = function (e) {
                            this.F = e
                        }, w.C.ia.prototype = new w.C.F, w.C.ia.prototype.constructor = w.C.ia, w.C.ia.prototype.text = function () {
                            if (0 == arguments.length) {
                                var e = w.a.g.get(this.F, n) || {};
                                return e.bb === r && e.lb && (e.bb = e.lb.innerHTML), e.bb
                            }
                            w.a.g.set(this.F, n, {
                                bb: arguments[0]
                            })
                        }, w.b("templateSources", w.C), w.b("templateSources.domElement", w.C.F), w.b("templateSources.anonymousTemplate", w.C.ia)
                    }(),
                    function () {
                        function e(e, n, t) {
                            var i;
                            for (n = w.h.nextSibling(n); e && (i = e) !== n;) t(i, e = w.h.nextSibling(i))
                        }

                        function n(n, t) {
                            if (n.length) {
                                var i = n[0],
                                    a = n[n.length - 1],
                                    o = i.parentNode,
                                    r = w.ga.instance,
                                    s = r.preprocessNode;
                                if (s) {
                                    if (e(i, a, (function (e, n) {
                                            var t = e.previousSibling,
                                                o = s.call(r, e);
                                            o && (e === i && (i = o[0] || n), e === a && (a = o[o.length - 1] || t))
                                        })), n.length = 0, !i) return;
                                    i === a ? n.push(i) : (n.push(i, a), w.a.Ua(n, o))
                                }
                                e(i, a, (function (e) {
                                    1 !== e.nodeType && 8 !== e.nodeType || w.vc(t, e)
                                })), e(i, a, (function (e) {
                                    1 !== e.nodeType && 8 !== e.nodeType || w.aa.cd(e, [t])
                                })), w.a.Ua(n, o)
                            }
                        }

                        function t(e) {
                            return e.nodeType ? e : 0 < e.length ? e[0] : null
                        }

                        function i(e, i, a, r, s) {
                            s = s || {};
                            var c = (e && t(e) || a || {}).ownerDocument,
                                d = s.templateEngine || o;
                            if (w.kc.xd(a, d, c), "number" != typeof (a = d.renderTemplate(a, r, s, c)).length || 0 < a.length && "number" != typeof a[0].nodeType) throw Error("Template engine must return an array of DOM nodes");
                            switch (c = !1, i) {
                                case "replaceChildren":
                                    w.h.va(e, a), c = !0;
                                    break;
                                case "replaceNode":
                                    w.a.Xc(e, a), c = !0;
                                    break;
                                case "ignoreTargetNode":
                                    break;
                                default:
                                    throw Error("Unknown renderMode: " + i)
                            }
                            return c && (n(a, r), s.afterRender && w.u.G(s.afterRender, null, [a, r[s.as || "$data"]]), "replaceChildren" == i && w.i.ma(e, w.i.H)), a
                        }

                        function a(e, n, t) {
                            return w.O(e) ? e() : "function" == typeof e ? e(n, t) : e
                        }
                        var o;
                        w.gc = function (e) {
                            if (e != r && !(e instanceof w.ca)) throw Error("templateEngine must inherit from ko.templateEngine");
                            o = e
                        }, w.dc = function (e, n, s, c, d) {
                            if (((s = s || {}).templateEngine || o) == r) throw Error("Set a template engine before calling renderTemplate");
                            if (d = d || "replaceChildren", c) {
                                var l = t(c);
                                return w.$((function () {
                                    var o = n && n instanceof w.fa ? n : new w.fa(n, null, null, null, {
                                            exportDependencies: !0
                                        }),
                                        r = a(e, o.$data, o);
                                    o = i(c, d, r, o, s), "replaceNode" == d && (l = t(c = o))
                                }), null, {
                                    Sa: function () {
                                        return !l || !w.a.Sb(l)
                                    },
                                    l: l && "replaceNode" == d ? l.parentNode : l
                                })
                            }
                            return w.aa.Xb((function (t) {
                                w.dc(e, n, s, t, "replaceNode")
                            }))
                        }, w.Qd = function (e, t, o, s, c) {
                            function d(e, n) {
                                w.u.G(w.a.ec, null, [s, e, u, o, l, n]), w.i.ma(s, w.i.H)
                            }

                            function l(e, t) {
                                n(t, p), o.afterRender && o.afterRender(t, e), p = null
                            }

                            function u(n, t) {
                                p = c.createChildContext(n, {
                                    as: f,
                                    noChildContext: o.noChildContext,
                                    extend: function (e) {
                                        e.$index = t, f && (e[f + "Index"] = t)
                                    }
                                });
                                var r = a(e, n, p);
                                return i(s, "ignoreTargetNode", r, p, o)
                            }
                            var p, f = o.as,
                                g = !1 === o.includeDestroyed || w.options.foreachHidesDestroyed && !o.includeDestroyed;
                            if (g || o.beforeRemove || !w.Pc(t)) return w.$((function () {
                                var e = w.a.f(t) || [];
                                "undefined" == typeof e.length && (e = [e]), g && (e = w.a.jb(e, (function (e) {
                                    return e === r || null === e || !w.a.f(e._destroy)
                                }))), d(e)
                            }), null, {
                                l: s
                            });
                            d(t.v());
                            var m = t.subscribe((function (e) {
                                d(t(), e)
                            }), null, "arrayChange");
                            return m.l(s), m
                        };
                        var s = w.a.g.Z(),
                            c = w.a.g.Z();
                        w.c.template = {
                            init: function (e, n) {
                                var t = w.a.f(n());
                                if ("string" == typeof t || "name" in t) w.h.Ea(e);
                                else if ("nodes" in t) {
                                    if (t = t.nodes || [], w.O(t)) throw Error('The "nodes" option must be a plain, non-observable array.');
                                    var i = t[0] && t[0].parentNode;
                                    i && w.a.g.get(i, c) || (i = w.a.Yb(t), w.a.g.set(i, c, !0)), new w.C.ia(e).nodes(i)
                                } else {
                                    if (!(0 < (t = w.h.childNodes(e)).length)) throw Error("Anonymous template defined, but no template content was provided");
                                    i = w.a.Yb(t), new w.C.ia(e).nodes(i)
                                }
                                return {
                                    controlsDescendantBindings: !0
                                }
                            },
                            update: function (e, n, t, i, a) {
                                var o = n();
                                t = !0, i = null, "string" == typeof (n = w.a.f(o)) ? n = {} : (o = "name" in n ? n.name : e, "if" in n && (t = w.a.f(n["if"])), t && "ifnot" in n && (t = !w.a.f(n.ifnot)), t && !o && (t = !1)), "foreach" in n ? i = w.Qd(o, t && n.foreach || [], n, e, a) : t ? (t = a, "data" in n && (t = a.createChildContext(n.data, {
                                    as: n.as,
                                    noChildContext: n.noChildContext,
                                    exportDependencies: !0
                                })), i = w.dc(o, t, n, e)) : w.h.Ea(e), a = i, (n = w.a.g.get(e, s)) && "function" == typeof n.s && n.s(), w.a.g.set(e, s, !a || a.ja && !a.ja() ? r : a)
                            }
                        }, w.m.Ra.template = function (e) {
                            return 1 == (e = w.m.ac(e)).length && e[0].unknown || w.m.Id(e, "name") ? null : "This template engine does not support anonymous templates nested within its templates"
                        }, w.h.ea.template = !0
                    }(), w.b("setTemplateEngine", w.gc), w.b("renderTemplate", w.dc), w.a.Kc = function (e, n, t) {
                        var i, a, o, r, s;
                        if (e.length && n.length)
                            for (i = a = 0;
                                (!t || i < t) && (r = e[a]); ++a) {
                                for (o = 0; s = n[o]; ++o)
                                    if (r.value === s.value) {
                                        r.moved = s.index, s.moved = r.index, n.splice(o, 1), i = o = 0;
                                        break
                                    } i += o
                            }
                    }, w.a.Pb = function () {
                        function e(e, n, t, i, a) {
                            var o, r, s, c, d, l = Math.min,
                                u = Math.max,
                                p = [],
                                f = e.length,
                                g = n.length,
                                m = g - f || 1,
                                b = f + g + 1;
                            for (o = 0; o <= f; o++)
                                for (c = s, p.push(s = []), d = l(g, o + m), r = u(0, o - 1); r <= d; r++) s[r] = r ? o ? e[o - 1] === n[r - 1] ? c[r - 1] : l(c[r] || b, s[r - 1] || b) + 1 : r + 1 : o + 1;
                            for (l = [], u = [], m = [], o = f, r = g; o || r;) g = p[o][r] - 1, r && g === p[o][r - 1] ? u.push(l[l.length] = {
                                status: t,
                                value: n[--r],
                                index: r
                            }) : o && g === p[o - 1][r] ? m.push(l[l.length] = {
                                status: i,
                                value: e[--o],
                                index: o
                            }) : (--r, --o, a.sparse || l.push({
                                status: "retained",
                                value: n[r]
                            }));
                            return w.a.Kc(m, u, !a.dontLimitMoves && 10 * f), l.reverse()
                        }
                        return function (n, t, i) {
                            return i = "boolean" == typeof i ? {
                                dontLimitMoves: i
                            } : i || {}, t = t || [], (n = n || []).length < t.length ? e(n, t, "added", "deleted", i) : e(t, n, "deleted", "added", i)
                        }
                    }(), w.b("utils.compareArrays", w.a.Pb),
                    function () {
                        function e(e, n, t, i, a) {
                            var o = [],
                                s = w.$((function () {
                                    var r = n(t, a, w.a.Ua(o, e)) || [];
                                    0 < o.length && (w.a.Xc(o, r), i && w.u.G(i, null, [t, r, a])), o.length = 0, w.a.Nb(o, r)
                                }), null, {
                                    l: e,
                                    Sa: function () {
                                        return !w.a.kd(o)
                                    }
                                });
                            return {
                                Y: o,
                                $: s.ja() ? s : r
                            }
                        }
                        var n = w.a.g.Z(),
                            t = w.a.g.Z();
                        w.a.ec = function (i, a, o, s, c, d) {
                            function l(e) {
                                f = {
                                    Aa: e,
                                    pb: w.ta(C++)
                                }, _.push(f), h || P.push(f)
                            }

                            function u(e) {
                                f = v[e], C !== f.pb.v() && T.push(f), f.pb(C++), w.a.Ua(f.Y, i), _.push(f)
                            }

                            function p(e, n) {
                                if (e)
                                    for (var t = 0, i = n.length; t < i; t++) w.a.D(n[t].Y, (function (i) {
                                        e(i, t, n[t].Aa)
                                    }))
                            }
                            "undefined" == typeof (a = a || []).length && (a = [a]), s = s || {};
                            var f, g, m, b, v = w.a.g.get(i, n),
                                h = !v,
                                _ = [],
                                S = 0,
                                C = 0,
                                x = [],
                                y = [],
                                k = [],
                                T = [],
                                P = [],
                                D = 0;
                            if (h) w.a.D(a, l);
                            else {
                                if (!d || v && v._countWaitingForRemove) {
                                    var E = w.a.Mb(v, (function (e) {
                                        return e.Aa
                                    }));
                                    d = w.a.Pb(E, a, {
                                        dontLimitMoves: s.dontLimitMoves,
                                        sparse: !0
                                    })
                                }
                                var A, R, L;
                                for (E = 0; A = d[E]; E++) switch (R = A.moved, L = A.index, A.status) {
                                    case "deleted":
                                        for (; S < L;) u(S++);
                                        R === r && ((f = v[S]).$ && (f.$.s(), f.$ = r), w.a.Ua(f.Y, i).length && (s.beforeRemove && (_.push(f), D++, f.Aa === t ? f = null : k.push(f)), f && x.push.apply(x, f.Y))), S++;
                                        break;
                                    case "added":
                                        for (; C < L;) u(S++);
                                        R !== r ? (y.push(_.length), u(R)) : l(A.value)
                                }
                                for (; C < a.length;) u(S++);
                                _._countWaitingForRemove = D
                            }
                            w.a.g.set(i, n, _), p(s.beforeMove, T), w.a.D(x, s.beforeRemove ? w.oa : w.removeNode);
                            try {
                                b = i.ownerDocument.activeElement
                            } catch (I) {}
                            if (y.length)
                                for (;
                                    (E = y.shift()) != r;) {
                                    for (f = _[E], g = r; E;)
                                        if ((m = _[--E].Y) && m.length) {
                                            g = m[m.length - 1];
                                            break
                                        } for (a = 0; S = f.Y[a]; g = S, a++) w.h.Wb(i, S, g)
                                }
                            for (E = 0; f = _[E]; E++) {
                                for (f.Y || w.a.extend(f, e(i, o, f.Aa, c, f.pb)), a = 0; S = f.Y[a]; g = S, a++) w.h.Wb(i, S, g);
                                !f.Ed && c && (c(f.Aa, f.Y, f.pb), f.Ed = !0, g = f.Y[f.Y.length - 1])
                            }
                            for (b && i.ownerDocument.activeElement != b && b.focus(), p(s.beforeRemove, k), E = 0; E < k.length; ++E) k[E].Aa = t;
                            p(s.afterMove, T), p(s.afterAdd, P)
                        }
                    }(), w.b("utils.setDomNodeChildrenFromArrayMapping", w.a.ec), w.ba = function () {
                        this.allowTemplateRewriting = !1
                    }, w.ba.prototype = new w.ca, w.ba.prototype.constructor = w.ba, w.ba.prototype.renderTemplateSource = function (e, n, t, i) {
                        return (n = 9 > w.a.W || !e.nodes ? null : e.nodes()) ? w.a.la(n.cloneNode(!0).childNodes) : (e = e.text(), w.a.ua(e, i))
                    }, w.ba.Ma = new w.ba, w.gc(w.ba.Ma), w.b("nativeTemplateEngine", w.ba),
                    function () {
                        w.$a = function () {
                            var e = this.Hd = function () {
                                if (!l || !l.tmpl) return 0;
                                try {
                                    if (0 <= l.tmpl.tag.tmpl.open.toString().indexOf("__")) return 2
                                } catch (e) {}
                                return 1
                            }();
                            this.renderTemplateSource = function (n, t, i, a) {
                                if (a = a || c, i = i || {}, 2 > e) throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");
                                var o = n.data("precompiled");
                                return o || (o = n.text() || "", o = l.template(null, "{{ko_with $item.koBindingContext}}" + o + "{{/ko_with}}"), n.data("precompiled", o)), n = [t.$data], t = l.extend({
                                    koBindingContext: t
                                }, i.templateOptions), (t = l.tmpl(o, n, t)).appendTo(a.createElement("div")), l.fragments = {}, t
                            }, this.createJavaScriptEvaluatorBlock = function (e) {
                                return "{{ko_code ((function() { return " + e + " })()) }}"
                            }, this.addTemplate = function (e, n) {
                                c.write("<script type='text/html' id='" + e + "'>" + n + "<\/script>")
                            }, 0 < e && (l.tmpl.tag.ko_code = {
                                open: "__.push($1 || '');"
                            }, l.tmpl.tag.ko_with = {
                                open: "with($1) {",
                                close: "} "
                            })
                        }, w.$a.prototype = new w.ca, w.$a.prototype.constructor = w.$a;
                        var e = new w.$a;
                        0 < e.Hd && w.gc(e), w.b("jqueryTmplTemplateEngine", w.$a)
                    }()
            }))
    }()
}, function (e, n, t) {
    var i = t(0),
        a = t(3),
        o = t(1),
        r = t(4),
        s = t(10).getInstance(window.ServerData),
        c = a.String,
        d = o.Helper,
        l = i.KeyCode;

    function u(e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = !1
    }
    n.applyExtensions = function (e) {
        var n, i = 1,
            a = {};
        e.components.loaders.unshift({
            loadComponent: function (n, t, i) {
                e.components.defaultLoader.loadComponent(n, t, (function (n) {
                    var o;
                    t.enableExtensions && (o = n.createViewModel, n.createViewModel = function (n, t) {
                        var i = o(n, t);
                        return function (n, t) {
                            var i = t.componentId;
                            if (i && a[i]) {
                                var o = a[i],
                                    c = o.parentViewModel,
                                    d = o.alias,
                                    l = e.unwrap(o.events) || {};
                                d && ("string" == typeof d && (d = c[d]), e.isWritableObservable(d) && (d(n), e.utils.domNodeDisposal.addDisposeCallback(t, (function () {
                                    d(null)
                                })))), e.utils.objectForEach(l, (function (e, t) {
                                    e && t && ("load" === e ? t.call(c, n) : (e = "on" + e.charAt(0).toUpperCase() + e.substr(1), r.isComponentEvent(n[e]) && n[e].subscribe((function (i) {
                                        return n[e].tracingOptions && s.logComponentEvent(n, n[e].tracingOptions, e, i), t.apply(c, i)
                                    }))))
                                }))
                            }
                        }(i, t.element), i
                    }), i(n)
                }))
            }
        }), n = e.bindingHandlers.component.init, e.bindingHandlers.component.init = function (t, o, r, s, c) {
            var d = e.unwrap(o());
            if ("string" != typeof d) {
                var l = d.publicMethods,
                    u = d.event;
                if (d.disabled) return;
                if (l || u) {
                    var p = t.componentId = i++;
                    a[p] = {
                        parentViewModel: s,
                        alias: l,
                        events: u
                    }, e.utils.domNodeDisposal.addDisposeCallback(t, (function () {
                        delete a[p]
                    }))
                }
            }
            return n(t, o, r, s, c)
        }, e.bindingHandlers.pageViewComponent = {
            init: function (n, t, i, a, o) {
                var r = e.unwrap(t());
                r.publicMethods = a.viewInterfaces[o.$index()], r.event = r.event || {}, r.event.load = a.view_onLoad, r.event.switchView = a.view_onSwitchView;
                return e.bindingHandlers.component.init(n, (function () {
                    return r
                }), i, a, o)
            }
        }, e.bindingHandlers.component.preprocess = function (e) {
            return !e || '"' !== e.charAt(0) && "'" !== e.charAt(0) ? e : c.format("{ name: {0}, params: { } }", e)
        }, e.bindingHandlers.defineGlobals = {
            init: function (n, t, i, a, o) {
                function r(e) {
                    var n = "";
                    try {
                        var t = document.createElement("div");
                        t.innerHTML = e, t.childNodes.length > 0 && t.childNodes[0].value && (n = t.childNodes[0].value)
                    } catch (i) {}
                    return n
                }
                var s = e.unwrap(t());
                s.sFT = r(s.sFT) || s.sFT || r(s.sFTTag);
                var c = o.extend({
                    svr: s,
                    str: s.str,
                    html: s.html,
                    $location: e.observable()
                });
                if (c.$location.subscribe((function (e) {
                        e && document.location.replace(e)
                    })), i.has("bodyCssClass")) {
                    var l = d.getIEVersion();
                    if (l) {
                        var u = {
                            css: {}
                        };
                        u.css["IE_M" + l] = !0, e.applyBindingsToNode(n, u)
                    }
                    if (d.isHighContrast()) {
                        var p = d.getHighContrastTheme(),
                            f = "black" === p;
                        if (f || "white" === p) {
                            var g = f ? "theme-dark" : "theme-light",
                                m = {
                                    css: {}
                                };
                            m.css[g] = !0, e.applyBindingsToNode(n, m)
                        }
                    }
                }
                return e.applyBindingsToDescendants(c, n), {
                    controlsDescendantBindings: !0
                }
            }
        }, e.bindingHandlers.autoSubmit = {
            update: function (n, t) {
                var i = t();
                e.unwrap(i) && (e.isWritableObservable(i) && i(!1), n.submit())
            }
        }, e.bindingHandlers.postRedirectForm = {
            init: function (e) {
                e.setAttribute("method", "POST"), e.setAttribute("aria-hidden", "true"), e.setAttribute("target", "_top")
            },
            update: function (n, t) {
                var i = e.unwrap(t());
                i && i.url && (n.setAttribute("action", i.url), i.target && n.setAttribute("target", i.target), i.postParams && e.utils.objectForEach(i.postParams, (function (e, t) {
                    "unsafe_" === e.substr(0, 7) && (e = e.substr(7)), null !== t && t !== undefined || (t = "");
                    var i = document.createElement("input");
                    i.setAttribute("type", "hidden"), i.setAttribute("name", e), i.setAttribute("value", t), n.appendChild(i)
                })), n.submit())
            }
        }, e.bindingHandlers.href = {
            update: function (n, t) {
                e.bindingHandlers.attr.update(n, (function () {
                    return {
                        href: t()
                    }
                }))
            }
        }, e.bindingHandlers.placeholder = {
            update: function (n, t) {
                e.bindingHandlers.attr.update(n, (function () {
                    return {
                        placeholder: t()
                    }
                }))
            }
        }, e.bindingHandlers.ariaLabel = {
            update: function (n, t) {
                e.bindingHandlers.attr.update(n, (function () {
                    return {
                        "aria-label": t()
                    }
                }))
            }
        }, e.bindingHandlers.ariaDescribedBy = {
            update: function (n, t) {
                e.bindingHandlers.attr.update(n, (function () {
                    return {
                        "aria-describedby": t()
                    }
                }))
            }
        }, e.bindingHandlers.htmlWithBindings = {
            init: function () {
                return {
                    controlsDescendantBindings: !0
                }
            },
            update: function (n, t, i, a, o) {
                e.utils.setHtml(n, t());
                var r = i.get("childBindings");
                if (r)
                    for (var s in r)
                        if (r.hasOwnProperty(s)) {
                            var c = document.getElementById(s);
                            c && e.applyBindingsToNode(c, r[s], o)
                        } e.applyBindingsToDescendants(o, n)
            }
        }, e.bindingHandlers.backgroundImage = {
            update: function (e, n) {
                var t = n();

                function i(n) {
                    e.style.backgroundImage = n ? c.format("url('{0}')", n) : ""
                }
                var a = window.$Loader,
                    o = new Image;
                o.onerror = function () {
                    a && a.On && a.On(o, !0, i)
                }, o.src = t, i(t)
            }
        }, e.bindingHandlers.wizardCssCheck = {
            update: function (e, n, t, i, a) {
                if (CSSLoadFail()) {
                    var o = document.getElementById("mainDiv");
                    o && (o.style.display = "none")
                }
            }
        }, e.bindingHandlers.withProperties = {
            init: function (n, t, i, a, o) {
                var r = o.extend(t);
                return e.applyBindingsToDescendants(r, n), {
                    controlsDescendantBindings: !0
                }
            }
        }, e.bindingHandlers.clickExpr = {
            preprocess: function (e) {
                return "function ($data, $event) { " + e + " }"
            },
            init: function (n, t, i, a, o) {
                return e.bindingHandlers.click.init.call(this, n, t, i, a, o)
            }
        }, e.bindingHandlers.imgSrc = {
            init: function (e) {
                var n = window.$Loader;
                e.onerror = function () {
                    if (n && n.On) return n.On(e, !0, (function (n) {
                        e.src = n
                    }))
                }, d.isSvgImgSupported() ? e.src = e.getAttribute("svgSrc") : e.src = e.getAttribute("pngSrc")
            }
        }, e.bindingHandlers.svgSrc = {
            update: function (n, t, i) {
                var a = e.unwrap(t());
                e.bindingHandlers.attr.update(n, (function () {
                    a && d.isSvgImgSupported() && (a = a.replace(new RegExp(".png$"), ".svg"));
                    var e = i.get("format");
                    if (e)
                        for (var n in e) e.hasOwnProperty(n) && !e[n] && (a = a.replace(n, ""));
                    return {
                        src: a
                    }
                }))
            }
        }, e.bindingHandlers.injectScript = {
            init: function (n, t) {
                var i = e.unwrap(t()),
                    a = document.createElement("script");
                return a.type = "text/javascript", a.src = i, n.appendChild(a), {
                    controlsDescendantBindings: !0
                }
            }
        }, e.bindingHandlers.injectIframe = {
            init: function (n, t) {
                var i = e.unwrap(t());
                if (i && i.url) {
                    var a = document.createElement("iframe");
                    a.height = "0", a.width = "0", a.style.display = "none", a.src = e.unwrap(i.url), i.onload && (a.onload = function () {
                        i.onload(a)
                    }), n.appendChild(a)
                }
                return {
                    controlsDescendantBindings: !0
                }
            }
        }, e.bindingHandlers.injectDfpIframe = {
            init: function (n, t) {
                var i = e.unwrap(t());
                if (i && i.url) {
                    var a = document.createElement("iframe");
                    a.id = "iDeviceFingerPrinting", a.setAttribute("style", "color:#000000;float:left;visibility:hidden;position:absolute;width:1px;height:1px;left:-10000px;top:-10000px;border:0px"), a.src = e.unwrap(i.url), i.onload && (a.onload = function () {
                        i.onload(a)
                    }), n.appendChild(a)
                }
                return {
                    controlsDescendantBindings: !0
                }
            }
        }, e.bindingHandlers.hasFocusEx = {
            init: e.bindingHandlers.hasFocus.init,
            update: function (n, t, i, a, o) {
                if (e.bindingHandlers.hasFocus.update(n, t, i, a, o), e.unwrap(t())) {
                    if (n.value) {
                        var r = n.value.length;
                        if ("selectionStart" in n) setTimeout((function () {
                            try {
                                n.selectionStart = r, n.selectionEnd = r
                            } catch (e) {}
                        }), 0);
                        else if ("createTextRange" in n) {
                            var s = n.createTextRange();
                            s.moveStart("character", r), s.collapse(), s.moveEnd("character", r), s.select()
                        }
                    }
                    n.focus()
                } else n.blur()
            }
        }, e.bindingHandlers.preventTabbing = {
            init: function (n, t) {
                var i = e.unwrap(t()) || {};
                "none" !== i.direction && e.utils.registerEventHandler(n, "keydown", (function (e) {
                    return "Tab" !== (e = e || window.event).code && e.keyCode !== l.Tab || !(!i.direction || "both" === i.direction || "up" === i.direction && e.shiftKey || "down" === i.direction && !e.shiftKey) || (u(e), !1)
                }))
            }
        }, e.bindingHandlers.ariaHidden = {
            update: function (n, t) {
                e.bindingHandlers.attr.update(n, (function () {
                    return {
                        "aria-hidden": e.unwrap(t())
                    }
                }))
            }
        }, e.bindingHandlers.moveOffScreen = {
            update: function (n, t) {
                var i = e.unwrap(t());
                if ("object" != typeof i) {
                    var a = !1 !== i;
                    i = {
                        setClass: a,
                        setTabIndex: a,
                        setAriaHidden: a
                    }
                }
                e.bindingHandlers.css.update(n, (function () {
                    return {
                        moveOffScreen: !1 !== i.setClass
                    }
                })), e.bindingHandlers.attr.update(n, (function () {
                    return {
                        tabindex: !1 !== i.setTabIndex ? -1 : 0
                    }
                })), e.bindingHandlers.ariaHidden.update(n, (function () {
                    return !1 !== i.setAriaHidden
                }))
            }
        }, e.bindingHandlers.pressEnter = {
            init: function (n, t, i, a, o) {
                var r = e.unwrap(t()),
                    s = o.$data;
                e.utils.registerEventHandler(n, "keydown", (function (e) {
                    return "Enter" !== (e = e || window.event).code && e.keyCode !== l.Enter || (u(e), r(s, e), !1)
                }))
            }
        }, e.bindingHandlers.isScrolledToBottom = {
            init: function (n, t) {
                var i = e.unwrap(t()),
                    a = i.disabled,
                    o = i.value,
                    r = i.sticky;

                function s() {
                    var e = n.scrollTop + n.offsetHeight >= n.scrollHeight;
                    return o(e), r && e && c(), e
                }

                function c() {
                    d.removeEventListener(n, "scroll", s), d.removeEventListener(window, "resize", s)
                }!a && e.isWritableObservable(o) && (r && s() || (d.addEventListener(n, "scroll", s), d.addEventListener(window, "resize", s), e.utils.domNodeDisposal.addDisposeCallback(n, c)))
            },
            update: function (n, t) {
                e.unwrap(t()).value() && (n.scrollTop = n.scrollHeight)
            }
        }, e.bindingHandlers.animationEnd = {
            init: function (n, t, i, a, o) {
                var r = d.getAnimationEndEventName();
                r && e.bindingHandlers.event.init(n, (function () {
                    var n = {};
                    return n[r] = e.unwrap(t()), n
                }), i, a, o)
            }
        }, e.bindingHandlers.htmlWithMods = {
            init: function (n, t, i) {
                var a = e.unwrap(t());
                if (a) {
                    var o = i.get("htmlMods");
                    if (o && o.filterLinks) {
                        var r = document.createElement("div");
                        r.innerHTML = a;
                        for (var s = r.getElementsByTagName("a"), c = s.length - 1; c >= 0; c--) {
                            var d = s[c],
                                l = d.innerText,
                                u = d.protocol;
                            if ("mailto:" === u || "tel:" === u) {
                                if (!1 !== o.allowContactProtocols) continue;
                                l = f(l, d.pathname)
                            } else l = f(l, d.getAttribute("href"));
                            var p = document.createElement("span");
                            p.innerText = l, d.parentNode.replaceChild(p, d)
                        }
                        a = r.innerHTML
                    }
                    e.utils.setHtml(n, a)
                }

                function f(e, n) {
                    return e !== n ? e + " (" + n + ")" : e
                }
            }
        }, e.bindingHandlers.externalCss = {
            update: function (n, t) {
                e.utils.objectForEach(e.unwrap(t()), (function (t, i) {
                    var a = e.unwrap(i);
                    e.utils.toggleDomNodeCssClass(n, t, a), e.utils.toggleDomNodeCssClass(n, "ext-" + t, a)
                }))
            }
        }, e.virtualElements.allowedBindings.withProperties = !0, (e.options = e.options || {}).createChildContextWithAs = !0, t(63).applyExtensions(e)
    }
}, function (e, n) {
    e.exports = {
        format: function (e) {
            if (e)
                for (var n = 1; n < arguments.length; n++) e = e.replace(new RegExp("\\{" + (n - 1) + "\\}", "g"), arguments[n]);
            return e
        }
    }
}, function (e, n, t) {
    var i = t(3),
        a = t(1),
        o = i.String;
    n.applyExtensions = function (e) {
        var n;
        n = e.bindingProvider.instance.preprocessNode, e.bindingProvider.instance.preprocessNode = function (t) {
            if (1 === t.nodeType && t.tagName && "select" === t.tagName.toLowerCase() && a.Helper.isIEOlderThan(8)) {
                var i = t.getAttribute("data-bind");
                if (i) {
                    var r = [],
                        s = o.doubleSplit(i, ",", ":", !1, o.trim),
                        c = {
                            hasFocus: "hasFocusBasic"
                        };
                    e.utils.objectForEach(s, (function (e) {
                        var n = c[e] || e + "Ex";
                        r.push(n + ":" + s[e])
                    })), t.setAttribute("data-bind", r.join())
                }
            }
            n && n(t)
        }, e.bindingHandlers.optionsEx = {
            init: function (n, t, i, a, o) {
                var r = e.unwrap(t()),
                    s = i.get("optionsValueEx"),
                    c = i.get("optionsTextEx"),
                    d = i.get("valueEx");

                function l(n, t) {
                    var i = typeof t;
                    return "function" === i ? e.unwrap(t(n)) : "string" === i && n[t] ? "function" == typeof n[t] ? e.unwrap(n[t]()) : e.unwrap(n[t]) : void 0
                }
                e.utils.arrayForEach(r, (function (e) {
                    var t = document.createElement("option");
                    t.$data = e, s && (t.value = l(e, s));
                    var i = l(e, c),
                        a = document.createTextNode(i);
                    t.appendChild(a), n.appendChild(t)
                })), e.applyBindingsToNode(n, {
                    event: {
                        change: function () {
                            var e = n.options[n.selectedIndex].$data;
                            n.$data = e;
                            var t = d.peek();
                            d("object" == typeof t ? e : n.value)
                        }
                    }
                });
                var u, p = d.subscribe((function (e) {
                    if (e) {
                        var t = typeof e,
                            i = "object" === t,
                            a = "string" === t;
                        if (i && n.$data !== e || a && n.value !== e)
                            for (var o = 0; o < n.options.length; o++) {
                                var r = n.options[o];
                                if (i && r.$data === e || a && r.value === e) return r.selected = !0, void(n.$data = r.$data)
                            }
                    }
                }));
                u = p, e.utils.domNodeDisposal.addDisposeCallback(n, (function () {
                    u.dispose()
                })), d.peek() ? d.valueHasMutated() : (d(n.options[0].value), n.$data = n.options[0].$data)
            }
        }, e.bindingHandlers.hasFocusBasic = {
            init: e.bindingHandlers.hasFocus.init,
            update: function (n, t) {
                e.unwrap(t()) ? n.focus() : n.blur()
            }
        }
    }
}, function (e, n) {
    var t = window;
    t.StringRepository = e.exports = t.StringRepository || new function () {
        var e = {};
        this.registerSource = function (n, t) {
            e[n] = e[n] || [], e[n].push(t)
        }, this.getStrings = function (n, t) {
            for (var i = {}, a = e[n] || [], o = 0, r = a.length; o < r; o++) a[o](i, t);
            return i
        }
    }
}, function (e, n, t) {
    var i = t(2),
        a = t(3),
        o = t(14),
        r = t(42),
        s = t(0),
        c = t(1),
        d = t(290),
        l = t(43),
        u = t(5),
        p = t(22),
        f = t(44),
        g = (t(17), t(9)),
        m = t(10).getInstance(window.ServerData),
        b = t(6),
        v = t(45),
        h = t(293);
    var _ = window,
        w = s.Error,
        S = s.EstsError,
        C = a.String,
        x = a.Object,
        y = a.ErrorData,
        k = s.LoginMode,
        T = s.PaginatedState,
        P = s.CredentialType,
        D = s.AnimationState,
        E = s.AnimationName,
        I = c.Helper,
        A = c.QueryString,
        R = c.Cookies,
        L = p.GctResultAction,
        O = p.GctRequestHelperFlags,
        B = r.CanaryValidationSuccessAction;
    e.exports = function (e) {
        var n = this,
            a = e,
            s = [],
            c = null,
            N = {},
            U = [],
            F = null,
            M = !1,
            V = null,
            j = i.observable(),
            H = i.observable(!1),
            W = i.observable(!1),
            $ = a.str,
            G = a.html,
            q = a.f,
            z = a.AB,
            K = a.fPOST_ForceSignin,
            J = a.sFTTag,
            X = a.bO,
            Q = a.C,
            Y = a.Az,
            Z = a.D,
            ee = a.urlPost,
            ne = a.F,
            te = a.urlBack,
            ie = a.r,
            ae = a.At,
            oe = a.AD,
            re = a.c,
            se = a.i,
            ce = a.aj,
            de = a.Ap || "",
            le = a.I,
            ue = a.sErrTxt,
            pe = a.o,
            fe = a.A3,
            ge = a.staticTenantBranding,
            me = a.b,
            be = a.B,
            ve = a.sResetPasswordPrefillParam || "mn",
            he = a.Ae,
            _e = a.O,
            we = a.AF,
            Se = a.n,
            Ce = a.AN,
            xe = a.desktopSsoConfig,
            ye = a.Ao,
            ke = a.ag,
            Te = a.bS,
            Pe = a.bs,
            De = a.bR,
            Ee = a.fPOST_IsSignupPost,
            Ie = a.AV,
            Ae = a.ab,
            Re = a.Y,
            Le = a.X,
            Oe = a.a5,
            Be = a.ah,
            Ne = !!a.Aj,
            Ue = !!a.af,
            Fe = a.iSessionPullType,
            Me = a.fIsDebugTracingEnabled,
            Ve = a.a3,
            je = a.A0,
            He = a.aR,
            We = a.bZ,
            $e = a.bY,
            Ge = a.isGlobalTenant,
            qe = (a.a0, a.fShowTilesAfterSessionPull),
            ze = a.Ax,
            Ke = a.j,
            Je = a.Al,
            Xe = a.AK,
            Qe = a.fShowRemoteConnectLocationPage,
            Ye = a.fIsRestrictedWsi,
            Ze = a.AX,
            en = a.Ag,
            nn = a.d,
            tn = a.arrLivePreviewOrigins,
            an = a.fShouldSupportTargetCredentialForRecovery,
            on = a.iCurrentTargetCredentialForRecovery;

        function rn(e, t) {
            var i = n.paginationControlMethods(),
                a = i.getCurrentView(),
                o = i.getSharedDataItem("otherIdpRedirectUrl");
            o = A.add(o, t), i.setSharedDataItem("otherIdpRedirectUrl", o), s = s.concat(f.mergeSessions(i.getSharedDataItem("sessions"), e)), a && n.asyncTileRequestCount <= 0 && (a.viewId === T.Tiles ? (a.viewInterface.addNewSessions(s), s = []) : a.viewId === T.Username && (!n.newSession() && s.length > 0 && n.newSession(s[0]), s = []))
        }

        function sn(e, i) {
            e ? u.resolve().then(function () {
                t(26), n.showDebugDetails(!0), i && n.debugDetailsMethods() && n.debugDetailsMethods().activateFocus()
            }.bind(null, t))["catch"](t.oe) : n.showDebugDetails(!1), !e && n.footerMethods() && n.footerMethods().focusMoreInfoLink()
        }

        function cn(e) {
            if (!e || !e.confirmationViewId) throw "No view ID was specified to handle the canary validation failure.";
            F = e.confirmationViewId, n.postCanaryValidationAction = e.postConfirmationAction
        }

        function dn(e) {
            n.postCanaryValidationAction = e
        }

        function ln(e) {
            var n = "";
            try {
                var t = document.createElement("div");
                t.innerHTML = e, t.childNodes.length > 0 && t.childNodes[0].value && (n = t.childNodes[0].value)
            } catch (i) {}
            return n
        }

        function un() {
            return n.paginationControlMethods() && n.paginationControlMethods().currentViewHasMetadata("showFedCredButton") && !Ye
        }

        function pn() {
            return un() && n.otherSigninOptions() && n.otherSigninOptions().length > 0
        }

        function fn(e, t) {
            var i = o.loadTenantBranding(ye && ye.EstsProperties && ye.EstsProperties.UserTenantBranding),
                r = o.loadTenantBranding(ge),
                s = o.getMergedBranding(r, i, Ge);
            if (n.initialSharedData = {
                    username: C.cleanseUsername(e),
                    displayName: e,
                    remoteNgcParams: {
                        sessionIdentifier: Te,
                        entropy: Pe,
                        defaultType: De
                    },
                    otcParams: {},
                    fidoParams: {
                        allowList: Ie
                    },
                    hipRequiredForUsername: ae ? C.cleanseUsername(e) : "",
                    sessions: _e || [],
                    flowToken: ln(a.sFT) || a.sFT || ln(J),
                    userTenantBranding: s || {},
                    callMetadata: {},
                    availableCreds: [],
                    evictedCreds: [],
                    otcCredential: {},
                    showCredViewBrandingDesc: !(!me || !me.showDescOnCredViews),
                    unsafe_desktopSsoDomainToUse: xe && xe.startDesktopSsoOnPageLoad ? xe.hintedDomainName : null,
                    isSignupPost: Ee,
                    otherIdpRedirectUrl: we,
                    recoveryCredentialsData: {}
                }, ye) {
                (parseInt(ke) || T.Unknown) === T.OneTimeCode && (ye.Credentials && ye.Credentials.PrefCredential !== P.PublicIdentifierCode && ye.Credentials.PrefCredential !== P.NoPreferredCredential && (ye.Credentials.PrefCredential = P.OneTimeCode), Be && (n.initialSharedData.proofConfirmation = Be));
                var d = c.getGctSharedData(ye, t, !1);
                n.initialSharedData.preferredCredential = d.preferredCredential, n.initialSharedData.availableCreds = d.availableCreds || [], n.initialSharedData.evictedCreds = d.evictedCreds || [], n.initialSharedData.otcCredential = d.otcCredential, n.initialSharedData.otcParams = d.otcParams, n.initialSharedData.idpRedirectUrl = d.fedRedirectParams.idpRedirectUrl, n.initialSharedData.idpRedirectPostParams = d.fedRedirectParams.idpRedirectPostParams, n.initialSharedData.idpRedirectProvider = d.fedRedirectParams.idpRedirectProvider, n.initialSharedData.supportsNativeCredentialRecovery = d.supportsNativeCredentialRecovery
            }
            an && (n.initialSharedData.targetCredentialForRecovery = on), (q === k.Signup || ze && !Ke) && (n.initialSharedData.availableSignupCreds = [].concat(He ? {
                credType: P.OtherMicrosoftIdpFederation,
                redirectUrl: He
            } : [], We ? {
                credType: P.Google,
                redirectUrl: We
            } : [], $e ? {
                credType: P.Facebook,
                redirectUrl: $e
            } : []))
        }

        function gn(e, t) {
            n.isFidoSupported(e), fn(t, e),
                function (e, t) {
                    var a = [k.ForceSignin, k.ForceSigninMobile, k.ForceSigninHost],
                        o = -1 !== i.utils.arrayIndexOf(a, q) || K,
                        r = !o && _e && _e.length ? T.Tiles : T.Username,
                        s = r;
                    switch (q) {
                        case k.LWAConsent:
                            r = s = T.LwaConsent;
                            break;
                        case k.Tiles:
                            r = s = T.Tiles;
                            break;
                        case k.FedConflict:
                            r = s = T.FedConflict;
                            break;
                        case k.ProofFedConflict:
                            r = s = T.ProofFedConflict;
                            break;
                        case k.AadFedConflict:
                            r = s = T.AadFedConflict;
                            break;
                        case k.FedLink:
                            r = s = T.FedLink;
                            break;
                        case k.Win10Host_HIP_Login:
                        case k.Win10Host_HIP_Login_PhoneSignIn:
                            r = s = T.Password;
                            break;
                        case k.Fido:
                            r = s = T.Fido;
                            break;
                        case k.UserCredentialPolicyBlocked:
                        case k.CredentialPicker:
                            r = s = T.CredentialPicker;
                            break;
                        case k.FedBoundLink:
                            s = T.FedLink;
                            break;
                        case k.Signup:
                            s = n.initialSharedData.availableSignupCreds.length > 0 ? T.SignupCredentialPicker : T.SignupUsername;
                            break;
                        default:
                            var d = parseInt(ke) || T.Unknown;
                            if (d !== T.Unknown && d !== T.FetchSessionsProgress) s = d;
                            else if (ye) {
                                var l = c.getResult(n.initialSharedData.otherIdpRedirectUrl, e, ye, t);
                                switch (l.action) {
                                    case L.ShowError:
                                        s = q === k.FetchSessionsProgress ? T.FetchSessionsProgress : r;
                                        break;
                                    case L.SwitchView:
                                        i.utils.extend(n.initialSharedData, i.utils.extend(l.sharedData, l.viewParams || {})), s = q === k.FetchSessionsProgress ? T.FetchSessionsProgress : l.viewId;
                                        break;
                                    case L.Redirect:
                                        if (q !== k.FetchSessionsProgress || !qe) {
                                            n.view_onRedirect({
                                                url: l.redirectUrl,
                                                eventOptions: {
                                                    eventId: l.eventId
                                                }
                                            }, l.redirectPostParams, l.isIdpRedirect);
                                            break
                                        }
                                }
                            } else q === k.FetchSessionsProgress ? s = T.FetchSessionsProgress : se && n.getServerError() && (s = T.Username);
                            (oe || o || le || ce) && (r = s)
                    }
                    Qe && (r = s = T.RemoteConnectLocation), n.initialViewId = r, n.currentViewId = s
                }(t, e)
        }

        function mn(e, n) {
            return C.format("./signin-{0}{1}.{2}", e, n ? "-white" : "", M ? "svg" : "png")
        }

        function bn(e, n) {
            n ? document.location.replace(e) : document.location.assign(e)
        }
        n.learnMore = null, n.initialViewId = null, n.currentViewId = null, n.postCanaryValidationAction = null, n.initialSharedData = {}, n.prefillNames = [], n.agreementType = null, n.asyncTileRequestCount = 0, n.useCssAnimations = !1, n.sessionPullType = Fe, n.isDebugTracingEnabled = Me, n.showFedCredAndNewSession = !0, n.paginationControlMethods = i.observable(), n.backgroundControlMethods = i.observable(), n.learnMoreMethods = i.observable(), n.instrumentationMethods = i.observable(), n.footerMethods = i.observable(), n.debugDetailsMethods = i.observable(), n.asyncInitReady = i.observable(!1), n.ctx = i.observable(), n.postUrl = i.observable(), n.userClickedCentipede = i.observable(!1), n.pageSubmitted = i.observable(!1), n.forceSubmit = i.observable(!1), n.ariaHidden = i.observable(!1), n.wasLearnMoreShown = i.observable(!1), n.postRedirect = i.observable(), n.postedLoginStateViewId = i.observable(), n.postedLoginStateViewRNGCEntropy = i.observable(), n.postedLoginStateViewRNGCDefaultType = i.observable(), n.postedLoginStateViewRNGCSLK = i.observable(), n.password = i.observable(), n.isRequestPending = i.observable(!1), n.showLightboxProgress = i.observable(!1), n.bannerLogoUrl = i.observable(), n.backgroundLogoUrl = i.observable(), n.useDefaultBackground = i.observable(!1), n.newSession = i.observable(), n.fadeInLightBox = i.observable(!1), n.activeDialog = i.observable(), n.isFidoSupported = i.observable(!1).extend({
                logValue: m.getPropertyLogOption(n, {
                    eventId: b.ClientTracingEventIds.PropertyValue_LoginPaginatedPageView_IsFidoSupported,
                    tracingChange: !1
                })
            }), n.showDebugDetails = i.observable(!1), n.isSignupPost = i.observable(!1), n.isRecoveryAttemptPost = i.observable(!1), n.targetCredentialForRecovery = i.observable(), n.loadBannerLogo = i.observable(!1), n.availableCredsWithoutUsername = i.observableArray([]), n.paginationControlHelper = new v(a, n.paginationControlMethods, n.backgroundLogoUrl), n.animate = i.utils.extend(i.observable(E.None), {
                isSlideOutNext: i.pureComputed((function () {
                    return n.animate() === E.SlideOutNext
                })),
                isSlideInNext: i.pureComputed((function () {
                    return n.animate() === E.SlideInNext
                })),
                isSlideOutBack: i.pureComputed((function () {
                    return n.animate() === E.SlideOutBack
                })),
                isSlideInBack: i.pureComputed((function () {
                    return n.animate() === E.SlideInBack
                }))
            }), n.flowToken = i.pureComputed((function () {
                return j() || a.sFT
            })), n.newSessionInfo = i.pureComputed((function () {
                if (n.newSession()) {
                    var e = {},
                        t = n.newSession(),
                        i = I.htmlUnescape(t.displayName),
                        a = I.htmlUnescape(t.fullName),
                        o = t.isSignedIn && a;
                    return o ? (e.unsafe_newSessionFullName = o, e.unsafe_newSessionDisplayName = i) : e.unsafe_newSessionFullName = i, e
                }
                return null
            })), n.showFedCredButtons = i.pureComputed((function () {
                return n.useCssAnimations ? (n.animate(E.None), H()) : pn()
            })), n.otherSigninOptions = i.pureComputed((function () {
                var e = [],
                    t = [];
                if (!un() || Ye) return null;
                Ae && e.push(Ae), i.utils.arrayForEach(e, (function (e) {
                    t.push(function (e) {
                        var n = null,
                            t = null,
                            i = null,
                            a = null;
                        switch (e) {
                            case P.LinkedIn:
                                n = $.CT_PWD_STR_UseLinkedIn_Link, t = Re, i = h(mn("linkedin", !0)), a = h(mn("linkedin", !1));
                                break;
                            case P.GitHub:
                                n = $.CT_PWD_STR_UseGitHub_Link, t = Le, i = h(mn("github", !0)), a = h(mn("github", !1))
                        }
                        return {
                            text: n,
                            signInUrl: t,
                            lightIconUrl: i,
                            darkIconUrl: a,
                            credType: e,
                            testId: "fedCredButton" + e
                        }
                    }(e))
                }));
                var a = n.availableCredsWithoutUsername().length > 0 || Xe || en,
                    o = 1 === n.availableCredsWithoutUsername().length && W();
                return Je && (a || o) && t.push({
                    text: $.CT_PWD_STR_SwitchToCredPicker_Link_NoUser,
                    lightIconUrl: h(mn("options", !0)),
                    darkIconUrl: h(mn("options", !1)),
                    testId: "signinOptions"
                }), t
            })), n.dispose = function () {
                0
            }, n.getServerError = function () {
                var e = null,
                    t = null;
                if (ue) e = ue;
                else if (pe && pe.length) switch (pe[0]) {
                    case w.EmptyFields:
                    case w.UsernameInvalid:
                    case w.PP_E_MISSING_MEMBERNAME:
                    case w.PP_E_NAME_INVALID:
                    case w.PP_E_EMAIL_RIGHT_TOO_LONG:
                    case w.PP_E_NAME_TOO_LONG:
                    case w.PP_E_INVALID_PHONENUMBER:
                    case w.PP_E_LIBPHONENUMBERINTEROP_NUMBERPARSE_EXCEPTION:
                        e = $.CT_PWD_STR_Error_InvalidUsername;
                        break;
                    case w.PP_E_EXCLUDED:
                        e = $.CT_PWD_STR_SSSU_Error_InvalidEmailOrPassword || G.CT_PWD_STR_Error_WrongCreds;
                        break;
                    case w.PP_E_BAD_PASSWORD:
                    case w.PP_E_PREVIOUS_PASSWORD:
                    case w.PP_E_INVALID_MEMBERNAME:
                    case w.PP_E_DB_MEMBERDOESNOTEXIST:
                    case w.PP_E_PE_RULEFALSE:
                    case S.InvalidUserNameOrPassword:
                    case S.ProtectedKeyMisuse:
                    case S.InvalidPasswordExpiredPassword:
                    case S.UserAccountNotFound:
                    case S.UserAccountDeleted:
                    case S.UserAccountNotFoundNotConfiguredForRemoteNgc:
                    case S.UserAccountNotFoundFailedToCreateRemoteSignIn:
                    case S.UserUnauthorizedApiVersionNotSupported:
                    case S.UserUnauthorizedMsaGuestUsersNotSupported:
                    case S.InvalidTenantName:
                    case S.InvalidTenantNameEmptyGuidIdentifier:
                    case S.InvalidTenantNameEmptyIdentifier:
                    case S.InvalidTenantNameFormat:
                    case S.InvalidDomainName:
                        e = $.CT_PWD_STR_SSSU_Error_InvalidEmailOrPassword || G[ae ? "CT_IHL_STR_Error_WrongHip" : "CT_PWD_STR_Error_WrongCreds"];
                        break;
                    case S.UserUnauthorized:
                        e = G.CT_PWD_STR_Error_UsernameNotExist_Guest_SignupAllowed;
                        break;
                    case S.InvalidPassword:
                        e = $.CT_PWD_STR_Error_InvalidPassword;
                        break;
                    case w.PP_E_OLD_SKYPE_PASSWORD:
                        e = $.CT_IL_STR_Error_OldSkypePwd;
                        break;
                    case w.PP_E_ALIAS_AUTH_NOTPERMITTED:
                        e = $.CT_PWD_STR_Error_AliasNotAllowed;
                        break;
                    case w.PP_E_FEDERATION_INLINELOGIN_DISALLOWED:
                        e = $.CT_PWD_STR_Error_FedNotAllowed;
                        break;
                    case w.PasswordEmpty:
                    case w.PP_E_MISSING_PASSWORD:
                    case S.InvalidPasswordNullPassword:
                        e = $.CT_PWD_STR_Error_MissingPassword;
                        break;
                    case w.PP_E_IDP_LINKEDIN_BINDING_NOT_ALLOWED:
                        e = $.CT_STR_Error_FedUserNotFound_LinkedIn;
                        break;
                    case w.PP_E_IDP_GOOGLE_BINDING_NOT_ALLOWED:
                        e = $.CT_STR_Error_FedUserNotFound_Google;
                        break;
                    case w.PP_E_IDP_GITHUB_BINDING_NOT_ALLOWED:
                        e = $.CT_STR_Error_FedUserNotFound_GitHub;
                        break;
                    case w.PP_E_OTT_DATA_INVALID:
                    case w.PP_E_OTT_ALREADY_CONSUMED:
                    case w.PP_E_OTT_INVALID_PURPOSE:
                    case w.PP_E_PPSA_RPT_NOTOADDRESS:
                    case S.InvalidOneTimePasscode:
                    case S.ExpiredOneTimePasscode:
                    case S.OneTimePasscodeCacheError:
                    case S.OneTimePasscodeEntryNotExist:
                    case S.InvalidOneTimePasscodeOTPNotGiven:
                    case S.PublicIdentifierSasEndCallNonRetriableError:
                    case S.PublicIdentifierSasEndCallRetriableError:
                        e = $.CT_OTC_STR_Error_CodeIncorrect;
                        break;
                    case S.FlowTokenExpired:
                        e = $.CT_PWD_STR_Error_FlowTokenExpired;
                        break;
                    case S.IdsLocked:
                        e = $.CT_PWD_STR_SSSU_Error_AccountLocked || $.CT_PWD_STR_Error_IdsLocked;
                        break;
                    case S.UserDisabled:
                    case S.GuestUserDisabled:
                        e = $.CT_PWD_STR_Error_UserDisabled;
                        break;
                    case S.MissingCustomSigningKey:
                        e = $.CT_PWD_STR_Error_MissingCustomSigningKey;
                        break;
                    case S.BlockedAdalVersion:
                        e = $.CT_PWD_STR_Error_BlockedAdalVersion;
                        break;
                    case S.BlockedClientId:
                        e = $.CT_PWD_STR_Error_BlockedClientId;
                        break;
                    case S.UserAccountSelectionInvalid:
                        e = $.CT_PWD_STR_Error_SelectedAccountInvalid;
                        break;
                    case S.IdpLoopDetected:
                        e = $.CT_PWD_STR_Error_IdpLoopDetected;
                        break;
                    case S.InvalidPasswordLastPasswordUsed:
                        e = $.CT_PWD_STR_Error_LastPasswordUsed;
                        break;
                    case S.PhoneSignInBlockedByUserCredentialPolicy:
                        e = $.STR_UserCredentialPolicy_Blocked, t = $.STR_UserCredentialPolicy_Blocked_PhoneSignIn_Remediation;
                        break;
                    case S.PublicIdentifierAuthUserNotAllowedByPolicy:
                        e = $.STR_UserCredentialPolicy_Blocked;
                        break;
                    case S.FidoBlockedByPolicy:
                        e = $.STR_UserCredentialPolicy_Blocked, t = $.STR_UserCredentialPolicy_Blocked_Fido_Remediation;
                        break;
                    case S.UserAccountNotFoundForFidoSignIn:
                        e = $.CT_FIDO_STR_Error_NotFound;
                        break;
                    case S.AccessPassBlockedByPolicy:
                        e = $.CT_PWD_STR_Error_AccessPassBlocked;
                        break;
                    case S.InvalidAccessPass:
                        e = $.CT_PWD_STR_Error_IncorrectAccessPass;
                        break;
                    case S.AccessPassExpired:
                        e = $.CT_PWD_STR_Error_AccessPassExpired;
                        break;
                    case S.AccessPassAlreadyUsed:
                        e = $.CT_PWD_STR_Error_AccessPassAlreadyUsed;
                        break;
                    case S.CertificateValidationBlockedByPolicy:
                        e = $.STR_CertBaseAuthPolicy_Block;
                        break;
                    case S.InvalidCredentialDueToMfaClassification:
                    case S.ProofupBlockedDueToMfaClassification:
                        e = $.STR_InvalidCredentialDueToMfaClassification;
                        break;
                    default:
                        e = null
                } else if (ye) {
                    var i = c.getResult(n.initialSharedData.otherIdpRedirectUrl, n.initialSharedData.displayName, ye, !1);
                    i.action === L.ShowError && (e = i.error)
                } return e ? new y(e, t) : null
            }, n.fetchSessions_onUpdateUserTiles = function (e, n) {
                setTimeout((function () {
                    rn(e, n)
                }))
            }, n.fetchSessions_onIncrementAsyncTileRequestCount = function () {
                n.asyncTileRequestCount++
            }, n.fetchSessions_onDecrementAsyncTileRequestCount = function () {
                n.asyncTileRequestCount--
            }, n.fetchSessions_onExecuteGctResult = function () {
                g.throwUnhandledExceptionOnRejection(u.all(U).then((function () {
                    var e = c.getResult(n.initialSharedData.otherIdpRedirectUrl, I.htmlUnescape(oe), ye, n.isFidoSupported());
                    switch (e.action) {
                        case L.ShowError:
                            n.paginationControlMethods().view_onSwitchView(T.Username, !0);
                            break;
                        case L.SwitchView:
                            n.paginationControlMethods().view_onSwitchView(e.viewId, !0);
                            break;
                        case L.Redirect:
                            n.view_onRedirect({
                                url: e.redirectUrl,
                                eventOptions: {
                                    eventId: e.eventId
                                }
                            })
                    }
                })))
            }, n.paginationControl_onCancel = function () {
                if (Z && ne) {
                    var e = ne;
                    re && (Ce ? Ce.username = re : e = A.appendOrReplace(e, "username", re)), n.view_onRedirect(e, Ce)
                } else te && (n.view_onSetPendingRequest(!0), bn(te, !0))
            }, n.view_onSubmitReady = function (e) {
                var t = n.paginationControlMethods().getCurrentViewId(),
                    i = n.paginationControlMethods().getSharedData();
                n.postedLoginStateViewRNGCDefaultType(i.remoteNgcParams.defaultType), n.postedLoginStateViewRNGCEntropy(i.remoteNgcParams.entropy), n.postedLoginStateViewRNGCSLK(i.remoteNgcParams.sessionIdentifier), n.isSignupPost(i.isSignupPost), an ? n.targetCredentialForRecovery(i.targetCredentialForRecovery) : n.isRecoveryAttemptPost(i.isRecoveryAttemptPost), t === T.Hip && (t = T.Password), n.postedLoginStateViewId(t), !j() && i.flowToken && j(i.flowToken);
                var a = (_.UserTracker || {}).destroy;
                if (a) try {
                    a()
                } catch (o) {}! function (e) {
                    try {
                        var n = R.getObject("wlidperf");
                        n.FR = "L", n.ST = (new Date).getTime(), R.write("wlidperf", n, !0, !0, !0, e)
                    } catch (t) {}
                }(fe), n.instrumentationMethods().recordSubmit(), n.pageSubmitted(!0), n.forceSubmit(!0), n.isRequestPending(!0), n.showLightboxProgress(!e)
            }, n.view_onRedirect = function (e, t, i, a) {
                var o = {
                        postParams: t,
                        isIdpRedirect: i,
                        useViewProgress: a
                    },
                    r = m.logRedirection(e, o);
                i && X && n.flowToken() && R.write(X, n.flowToken(), !Y), t ? n.postRedirect({
                    url: r,
                    postParams: t
                }) : bn(r), n.isRequestPending(!0), n.showLightboxProgress(!a)
            }, n.view_onLoadView = function (e) {
                var a = function (e) {
                    0;
                    var n = [T.Password, T.ProofConfirmation, T.OneTimeCode, T.OneTimeCodeRecovery, T.ConfirmSignup, T.ConfirmRecoverUsername, T.LearnMore, T.ResetPasswordSplitter, T.RemoteNGC, T.PhoneDisambiguation, T.IdpDisambiguation, T.IdpRedirect, T.IdpRedirectSpeedbump, T.ViewAgreement, T.ConfirmSend, T.CredentialPicker, T.Fido, T.FedConflict, T.ProofFedConflict, T.AadFedConflict, T.FedLink, T.RemoteConnectCanaryValidation, T.FetchSessionsProgress, T.Tiles, T.LwaConsent, T.Hip, T.RemoteLoginPolling, T.TenantDisambiguation, T.SearchOrganization, T.AccessPass, T.SignupUsername, T.SignupCredentialPicker, T.LearnMoreOfflineAccount, T.RemoteConnectLocation, T.WebNativeBridge];
                    if (!i.utils.arrayFirst(n, (function (n) {
                            return e === n
                        }))) return null;
                    return new u((function (n) {
                        switch (e) {
                            case T.Password:
                                t.e(24).then(function () {
                                    t(452), n()
                                }.bind(null, t))["catch"](t.oe);
                                break;
                            case T.ProofConfirmation:
                                t.e(27).then(function () {
                                    t(453), n()
                                }.bind(null, t))["catch"](t.oe);
                                break;
                            case T.OneTimeCode:
                            case T.OneTimeCodeRecovery:
                                t.e(23).then(function () {
                                    t(454), n()
                                }.bind(null, t))["catch"](t.oe);
                                break;
                            case T.ConfirmSignup:
                                t.e(5).then(function () {
                                    t(455), n()
                                }.bind(null, t))["catch"](t.oe);
                                break;
                            case T.ConfirmRecoverUsername:
                                t.e(3).then(function () {
                                    t(456), n()
                                }.bind(null, t))["catch"](t.oe);
                                break;
                            case T.LearnMore:
                                t.e(20).then(function () {
                                    t(457), n()
                                }.bind(null, t))["catch"](t.oe);
                                break;
                            case T.ResetPasswordSplitter:
                                t.e(32).then(function () {
                                    t(458), n()
                                }.bind(null, t))["catch"](t.oe);
                                break;
                            case T.RemoteNGC:
                                t.e(31).then(function () {
                                    t(459), n()
                                }.bind(null, t))["catch"](t.oe);
                                break;
                            case T.PhoneDisambiguation:
                                t.e(25).then(function () {
                                    t(460), n()
                                }.bind(null, t))["catch"](t.oe);
                                break;
                            case T.IdpDisambiguation:
                                t.e(17).then(function () {
                                    t(461), n()
                                }.bind(null, t))["catch"](t.oe);
                                break;
                            case T.IdpRedirect:
                                t.e(18).then(function () {
                                    t(462), n()
                                }.bind(null, t))["catch"](t.oe);
                                break;
                            case T.IdpRedirectSpeedbump:
                                t.e(19).then(function () {
                                    t(463), n()
                                }.bind(null, t))["catch"](t.oe);
                                break;
                            case T.ViewAgreement:
                                t.e(35).then(function () {
                                    t(447), n()
                                }.bind(null, t))["catch"](t.oe);
                                break;
                            case T.ConfirmSend:
                                t.e(4).then(function () {
                                    t(464), n()
                                }.bind(null, t))["catch"](t.oe);
                                break;
                            case T.CredentialPicker:
                            case T.SignupCredentialPicker:
                                t.e(6).then(function () {
                                    t(465), n()
                                }.bind(null, t))["catch"](t.oe);
                                break;
                            case T.Fido:
                                t.e(16).then(function () {
                                    t(466), n()
                                }.bind(null, t))["catch"](t.oe);
                                break;
                            case T.FedConflict:
                                t.e(13).then(function () {
                                    t(467), n()
                                }.bind(null, t))["catch"](t.oe);
                                break;
                            case T.ProofFedConflict:
                                t.e(28).then(function () {
                                    t(468), n()
                                }.bind(null, t))["catch"](t.oe);
                                break;
                            case T.AadFedConflict:
                                t.e(0).then(function () {
                                    t(469), n()
                                }.bind(null, t))["catch"](t.oe);
                                break;
                            case T.FedLink:
                                t.e(14).then(function () {
                                    t(470), n()
                                }.bind(null, t))["catch"](t.oe);
                                break;
                            case T.RemoteConnectCanaryValidation:
                                t.e(29).then(function () {
                                    t(471), n()
                                }.bind(null, t))["catch"](t.oe);
                                break;
                            case T.RemoteConnectLocation:
                                t.e(30).then(function () {
                                    t(472), n()
                                }.bind(null, t))["catch"](t.oe);
                                break;
                            case T.FetchSessionsProgress:
                                t.e(15).then(function () {
                                    t(473), n()
                                }.bind(null, t))["catch"](t.oe);
                                break;
                            case T.Tiles:
                                t.e(33).then(function () {
                                    t(474), n()
                                }.bind(null, t))["catch"](t.oe);
                                break;
                            case T.LwaConsent:
                                t.e(1).then(function () {
                                    t(475), n()
                                }.bind(null, t))["catch"](t.oe);
                                break;
                            case T.Hip:
                                t.e(1).then(function () {
                                    t(476), n()
                                }.bind(null, t))["catch"](t.oe);
                                break;
                            case T.RemoteLoginPolling:
                                t.e(9).then(function () {
                                    t(477), n()
                                }.bind(null, t))["catch"](t.oe);
                                break;
                            case T.TenantDisambiguation:
                                t.e(12).then(function () {
                                    t(478), n()
                                }.bind(null, t))["catch"](t.oe);
                                break;
                            case T.AccessPass:
                                t.e(8).then(function () {
                                    t(479), n()
                                }.bind(null, t))["catch"](t.oe);
                                break;
                            case T.SignupUsername:
                                t.e(11).then(function () {
                                    t(480), n()
                                }.bind(null, t))["catch"](t.oe);
                                break;
                            case T.SearchOrganization:
                                t.e(10).then(function () {
                                    t(481), n()
                                }.bind(null, t))["catch"](t.oe);
                                break;
                            case T.LearnMoreOfflineAccount:
                                t.e(21).then(function () {
                                    t(482), n()
                                }.bind(null, t))["catch"](t.oe);
                                break;
                            case T.WebNativeBridge:
                                t.e(36).then(function () {
                                    t(483), n()
                                }.bind(null, t))["catch"](t.oe)
                        }
                    }))
                }(e);
                return a ? (n.view_onSetPendingRequest(!0), a.then((function () {
                    n.view_onSetPendingRequest(!1)
                }))) : null
            }, n.view_onShow = function (e, t) {
                tn || function (e) {
                    o.updateMergedBrandingObservables(n, e), o.updateFavicon(e, nn), !1;
                    var t = o.getPageBranding(e, me, be);
                    n.backgroundControlMethods() && n.backgroundControlMethods().updateBranding(t);
                    n.bannerLogoUrl(t.bannerLogoUrl), n.backgroundLogoUrl(t.backgroundLogoUrl), n.useDefaultBackground(t.useDefaultBackground), n.loadBannerLogo(n.paginationControlHelper.showLogo())
                }(e.dynamicBranding ? n.paginationControlMethods().getSharedDataItem("userTenantBranding") : o.loadTenantBranding(ge));
                t !== T.Username && n.newSession(null), s.length > 0 && (t !== T.Username && t !== T.Tiles || (t === T.Username && n.newSession(s[0]), s = []))
            }, n.view_onRestoreIsRecoveryAttemptPost = function () {
                an ? n.paginationControlMethods().setSharedDataItem("targetCredentialForRecovery", P.None) : n.paginationControlMethods().setSharedDataItem("isRecoveryAttemptPost", !1)
            }, n.view_onUpdateFlowToken = function (e) {
                j(e), n.paginationControlMethods().setSharedDataItem("flowToken", e)
            }, n.view_onUpdateAvailableCreds = function (e) {
                n.availableCredsWithoutUsername(e), 1 === e.length && W(!!e[0].shownOnlyOnPicker)
            }, n.view_onUpdateRemoteNgcParams = function (e, t, i) {
                var a = n.paginationControlMethods().getSharedDataItem("remoteNgcParams");
                a.sessionIdentifier = e, a.entropy = t, a.defaultType = i
            }, n.view_onSetLightBoxFadeIn = function (e) {
                n.fadeInLightBox(e)
            }, n.view_onSetPendingRequest = function (e) {
                n.isRequestPending(e), n.showLightboxProgress(e)
            }, n.footer_agreementClick = function (e) {
                n.agreementType = e, n.paginationControlMethods().view_onSwitchView(T.ViewAgreement)
            }, n.closeDebugDetails_onClick = function () {
                sn(!1), n.footerMethods() && n.footerMethods().setDebugDetailsState(!1)
            }, n.toggleDebugDetails_onClick = function () {
                sn(!n.showDebugDetails(), !0)
            }, n.setDebugTracing_onClick = function () {
                n.isDebugTracingEnabled = !n.isDebugTracingEnabled
            }, n.learnMore_onShow = function () {
                n.ariaHidden(!0), n.wasLearnMoreShown(!0), n.learnMoreMethods().open()
            }, n.learnMore_onHide = function () {
                n.ariaHidden(!1), n.paginationControlMethods().setDefaultFocus()
            }, n.passwordView_onResetPassword = function (e) {
                bn(function (e, n, t) {
                    if (t) return A.appendOrReplace(e, n, encodeURIComponent(C.trim(t)));
                    return e
                }(ie, ve, e)), n.view_onSetPendingRequest(!0)
            }, n.newSession_onClick = function () {
                var e = n.newSession();
                if (e.isOtherIdp) {
                    var t = C.trim(e.displayName),
                        i = A.appendOrReplace(n.initialSharedData.otherIdpRedirectUrl, "username", encodeURIComponent(t)),
                        o = Se ? x.clone(Se) : null;
                    o && (o.username = t), n.view_onRedirect(i, o, !0)
                } else if (e.isWindowsSso) {
                    var r = new l(a);
                    g.throwUnhandledExceptionOnRejection(r.loginWindowsUserAsync(e.ssoLink).then(null, (function () {
                        return null
                    })).then((function (e) {
                        e && n.view_onRedirect(e)
                    })))
                }
            }, n.newSessionClose_onClick = function () {
                n.newSession(null)
            }, n.otherSigninOptionsButton_onClick = function (e) {
                "signinOptions" === e.testId ? (n.paginationControlMethods().setSharedDataItem("availableCreds", n.availableCredsWithoutUsername()), Ze && n.paginationControlMethods().setSharedDataItem("useCredWithoutUsername", !0), n.paginationControlMethods().view_onSwitchView(T.CredentialPicker)) : n.view_onRedirect(e.signInUrl)
            }, n.paginationControl_onAnimationStateChange = function (e, t, i) {
                var a = pn();
                switch (e) {
                    case D.Begin:
                        a && i && n.animate(t ? E.SlideOutBack : E.SlideOutNext);
                        break;
                    case D.RenderNewView:
                        H(!1);
                        break;
                    case D.AnimateNewView:
                        a && (H(!0), n.animate(t ? E.SlideInBack : E.SlideInNext));
                        break;
                    case D.End:
                        H(a), n.animate(E.None)
                }
            }, n.view_onRegisterDialog = function (e, n) {
                N[e] = {
                    templateNodes: n.templateNodes,
                    data: n.data
                }
            }, n.view_onUnregisterDialog = function (e) {
                delete N[e]
            }, n.view_onShowDialog = function (e) {
                return n.activeDialog(N[e]), setTimeout((function () {
                    n.activeDialog(N[e])
                }), 0), new u((function (e) {
                    V = {
                        resolve: e
                    }
                }))
            }, n.dialog_onClose = function () {
                n.activeDialog(null), n.paginationControlMethods().getCurrentView().viewInterface.setDefaultFocus(), V && V.resolve()
            }, n.dispose = function () {
                null
            },
            function () {
                (o.createMergedBrandingObservables(n), M = I.isSvgImgSupported(), Ve) && (new d).writeCookie();
                c = new p(a, O.DisableDesktopSsoPreferredCred | O.DisableAutoSend | O.IsPostRequest);
                var t, s = de ? de.split(",") : [],
                    b = I.htmlUnescape(se || re || oe || ce || "");
                s.sort(), n.prefillNames = n.prefillNames.concat(i.utils.arrayMap(s, I.htmlUnescape)), n.useCssAnimations = Oe && I.isCSSAnimationSupported(), n.ctx(Q), n.postUrl((t = ee, he && i.utils.objectForEach(C.doubleSplit(he, "&", "="), (function (e, n) {
                    t = A.addIfNotExist(t, e, n)
                })), t));
                var v = I.isFidoSupportedAsync(Ne).then((function (e) {
                    gn(e, b)
                }), (function () {
                    gn(!1, b)
                }));
                U.push(v), U.push(m.createLoadClientTracingPromise());
                var h = new r(e);
                if (Ue) {
                    n.view_onSetPendingRequest(!0);
                    var _ = h.validateAsync().then(dn, cn);
                    U.push(_)
                }
                if (!je && z) {
                    var w = C.format("[{0}]", z),
                        S = R.getObject("WLOpt"),
                        x = S.act || ""; - 1 === x.indexOf(w) && (x += w), S.act = x, R.write("WLOpt", S, !1, !0)
                }
                var y = new l(a);
                y.isEnabled() && (n.asyncTileRequestCount++, g.throwUnhandledExceptionOnRejection(y.pullBrowserSsoCookieAsync().then(null, (function () {
                    return null
                })).then((function (e) {
                    n.asyncTileRequestCount--, (e = e || {}).newSessions ? rn(f.parseBssoSessions(e.newSessions)) : e.redirectUrl ? bn(e.redirectUrl, !0) : rn([])
                })))), g.throwUnhandledExceptionOnRejection(u.all(U).then((function () {
                    n.postCanaryValidationAction && (n.postCanaryValidationAction.action === B.SwitchView && (n.postCanaryValidationAction.viewId = n.currentViewId), F ? n.initialViewId = n.currentViewId = F : n.postCanaryValidationAction.action === B.Redirect && n.view_onRedirect(n.postCanaryValidationAction.redirectUrl, n.postCanaryValidationAction.redirectPostParams, n.postCanaryValidationAction.isIdpRedirect)), n.view_onSetPendingRequest(!1), m.setPageViewModel(n), n.asyncInitReady(!0)
                })))
            }()
    }
}, function (e, n, t) {
    var i = {
        "./0-small.jpg": 67,
        "./0.jpg": 68,
        "./1-small.jpg": 69,
        "./1.jpg": 70,
        "./2-small.jpg": 71,
        "./2.jpg": 72,
        "./2.svg": 73
    };

    function a(e) {
        var n = o(e);
        return t(n)
    }

    function o(e) {
        if (!t.o(i, e)) {
            var n = new Error("Cannot find module '" + e + "'");
            throw n.code = "MODULE_NOT_FOUND", n
        }
        return i[e]
    }
    a.keys = function () {
        return Object.keys(i)
    }, a.resolve = o, e.exports = a, a.id = 66
}, function (e, n, t) {
    e.exports = t.p + "content/images/backgrounds/0-small_138bcee624fa04ef9b75e86211a9fe0d.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/backgrounds/0_a5dbd4393ff6a725c7e62b61df7e72f0.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/backgrounds/1-small_847cd24c3f6a1cd5c794c95821ce5315.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/backgrounds/1_9d657dcc199acbe9559b89e3e7afac9c.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/backgrounds/2-small_e58aafc980614a9cd7796bea7b5ea8f0.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/backgrounds/2_7916a894ebde7d29c2cc29b267f1299f.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/backgrounds/2_bc3d32a696895f78c19df6c717586a5d.svg"
}, function (e, n, t) {
    var i = {
        "./0-small.jpg": 75,
        "./0.jpg": 76,
        "./1-small.jpg": 77,
        "./1.jpg": 78,
        "./10-small.jpg": 79,
        "./10.jpg": 80,
        "./11-small.jpg": 81,
        "./11.jpg": 82,
        "./13-small.jpg": 83,
        "./13.jpg": 84,
        "./14-small.jpg": 85,
        "./14.jpg": 86,
        "./15-small.jpg": 87,
        "./15.jpg": 88,
        "./16-small.jpg": 89,
        "./16.jpg": 90,
        "./17-small.jpg": 91,
        "./17.jpg": 92,
        "./18-small.jpg": 93,
        "./18.jpg": 94,
        "./19-small.jpg": 95,
        "./19.jpg": 96,
        "./2-small.jpg": 97,
        "./2.jpg": 98,
        "./20-small.jpg": 99,
        "./20.jpg": 100,
        "./21-small.jpg": 101,
        "./21.jpg": 102,
        "./22-small.jpg": 103,
        "./22.jpg": 104,
        "./23-small.jpg": 105,
        "./23.jpg": 106,
        "./24-small.jpg": 107,
        "./24.jpg": 108,
        "./25-small.jpg": 109,
        "./25.jpg": 110,
        "./26-small.jpg": 111,
        "./26.jpg": 112,
        "./27-small.jpg": 113,
        "./27.jpg": 114,
        "./28-small.jpg": 115,
        "./28.jpg": 116,
        "./29-small.jpg": 117,
        "./29.jpg": 118,
        "./3-small.jpg": 119,
        "./3.jpg": 120,
        "./30-small.jpg": 121,
        "./30.jpg": 122,
        "./31-small.jpg": 123,
        "./31.jpg": 124,
        "./32-small.jpg": 125,
        "./32.jpg": 126,
        "./33-small.jpg": 127,
        "./33.jpg": 128,
        "./34-small.jpg": 129,
        "./34.jpg": 130,
        "./35-small.jpg": 131,
        "./35.jpg": 132,
        "./36-small.jpg": 133,
        "./36.jpg": 134,
        "./37-small.jpg": 135,
        "./37.jpg": 136,
        "./38-small.jpg": 137,
        "./38.jpg": 138,
        "./39-small.jpg": 139,
        "./39.jpg": 140,
        "./4-small.jpg": 141,
        "./4.jpg": 142,
        "./40-small.jpg": 143,
        "./40.jpg": 144,
        "./41-small.jpg": 145,
        "./41.jpg": 146,
        "./42-small.jpg": 147,
        "./42.jpg": 148,
        "./43-small.jpg": 149,
        "./43.jpg": 150,
        "./44-small.jpg": 151,
        "./44.jpg": 152,
        "./45-small.jpg": 153,
        "./45.jpg": 154,
        "./46-small.jpg": 155,
        "./46.jpg": 156,
        "./47-small.jpg": 157,
        "./47.jpg": 158,
        "./48-small.jpg": 159,
        "./48.jpg": 160,
        "./49-small.jpg": 161,
        "./49.jpg": 162,
        "./5-small.jpg": 163,
        "./5.jpg": 164,
        "./50-small.jpg": 165,
        "./50.jpg": 166,
        "./51-small.jpg": 167,
        "./51.jpg": 168,
        "./52-small.jpg": 169,
        "./52.jpg": 170,
        "./53-small.jpg": 171,
        "./53.jpg": 172,
        "./54-small.jpg": 173,
        "./54.jpg": 174,
        "./55-small.jpg": 175,
        "./55.jpg": 176,
        "./56-small.jpg": 177,
        "./56.jpg": 178,
        "./57-small.jpg": 179,
        "./57.jpg": 180,
        "./58-small.jpg": 181,
        "./58.jpg": 182,
        "./59-small.jpg": 183,
        "./59.jpg": 184,
        "./6-small.jpg": 185,
        "./6.jpg": 186,
        "./60-small.jpg": 187,
        "./60.jpg": 188,
        "./61-small.jpg": 189,
        "./61.jpg": 190,
        "./62-small.jpg": 191,
        "./62.jpg": 192,
        "./63-small.jpg": 193,
        "./63.jpg": 194,
        "./64-small.jpg": 195,
        "./64.jpg": 196,
        "./65-small.jpg": 197,
        "./65.jpg": 198,
        "./66-small.jpg": 199,
        "./66.jpg": 200,
        "./67-small.jpg": 201,
        "./67.jpg": 202,
        "./68-small.jpg": 203,
        "./68.jpg": 204,
        "./69-small.jpg": 205,
        "./69.jpg": 206,
        "./7-small.jpg": 207,
        "./7.jpg": 208,
        "./70-small.jpg": 209,
        "./70.jpg": 210,
        "./71-small.jpg": 211,
        "./71.jpg": 212,
        "./72-small.jpg": 213,
        "./72.jpg": 214,
        "./8-small.jpg": 215,
        "./8.jpg": 216,
        "./9-small.jpg": 217,
        "./9.jpg": 218
    };

    function a(e) {
        var n = o(e);
        return t(n)
    }

    function o(e) {
        if (!t.o(i, e)) {
            var n = new Error("Cannot find module '" + e + "'");
            throw n.code = "MODULE_NOT_FOUND", n
        }
        return i[e]
    }
    a.keys = function () {
        return Object.keys(i)
    }, a.resolve = o, e.exports = a, a.id = 74
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/0-small_e4609ff3d3040b6cd9773ac01b9f93cb.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/0_018052905902821de9d4582b8fee8dff.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/1-small_c1521a732148032caaea57fe54c0592b.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/1_e82204f3715767fb3e89570bd3192ca6.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/10-small_d3978bbcb80c80865282847c54f2955c.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/10_954935061a5b76c674efdec7a310540f.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/11-small_5685955dc41987ed06e1ee3ade26b01f.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/11_cfe9cb62ebb6605e03fb8d285c611b48.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/13-small_a19e7bca4466059eadd344ab11e6904f.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/13_bbe2954e5ade3a8671e70904f32303b1.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/14-small_886156059d0730fbd2f056dd3f35c325.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/14_06019f5fb6b2ba38b86dce6a23f75cdd.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/15-small_fb2ae5a11d1f4505db855c2b63e8ca95.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/15_6028ea8133b464df430f44727872f384.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/16-small_e7ab9bba629cbe84dbeb87f69d2a0f6c.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/16_112f8f03c4affe4b3ac72fccffde1c7e.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/17-small_af6fcff57f13db6a19af43e541c67391.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/17_a33c806b2c7a6e5789b9cdc9423218ec.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/18-small_2cb079b6ea3bef0252a9219ed64c5c14.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/18_5c3341219c88b0391008d38f6f3e3571.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/19-small_2d7064925c8ab86081ac2dc0b8b91506.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/19_8cec1cb1024c6dedfdf6d4e62688d1e5.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/2-small_a0d21be5213bfa2667a01ddc00e59885.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/2_49d31aa7849c067b208f0457d8b1bb75.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/20-small_13b828e3155ff8aaa21867a85522aac7.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/20_6e2f411c0f786507adc756f40972e58d.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/21-small_8c6511fe45944b668b3ebac906238b23.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/21_a09c8a583598d484972faa59f0838f06.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/22-small_d96b81b394eab085204f0ce6e1b0052a.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/22_077c3ca4905a70723346fef218e435fa.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/23-small_a0dba82f70ff302592ff9156bec990ff.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/23_eadb5cd3f199f9128d4c468fa19783b9.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/24-small_2b123d90ad518a70d48d8a8e219064d6.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/24_be8959e35a7f0fe45bdcee972c541fc2.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/25-small_d920b96dc46ec8da241ea5b5b453166c.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/25_0e9d7bb00abc81eb1bf70cbf3961b23b.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/26-small_4d5fbc9b2bd95873fd126564d3e9e1b4.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/26_18fb6468a9fd0d0c3708fba54aa84436.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/27-small_35050a9ab94e2f8c61e6f12f2abe033c.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/27_15a4db7c40818c2f86d582d4e73718b4.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/28-small_988ca0b33b4198a7ffeea9f0db308048.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/28_65f7aacca6193a75765a132ca8e72690.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/29-small_fd966cc8825926550f93a9c6349b36df.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/29_01a74da6416cacc533424b5435c0ebc2.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/3-small_81eb6f5b568144df6ce35ea3cfd4832c.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/3_7367a94727cb52538e42e71b737c9d88.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/30-small_85c49d6453621fae88c17c5e789ca513.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/30_7ab3d020cf010c982e79dcb55974d6f4.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/31-small_7216f77b42179a7f187fde776e0da0fc.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/31_ccc3687244419d816a6ae1ac93054bc5.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/32-small_12f6538b26569fe03d3db3898f2a4bad.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/32_ace30fab677a248627cf91a2c43b148f.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/33-small_138bcee624fa04ef9b75e86211a9fe0d.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/33_a5dbd4393ff6a725c7e62b61df7e72f0.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/34-small_2dcb9c9f766bc9909dd98464f839d071.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/34_b372af7f03b2106dde3c8511653257e6.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/35-small_23ca25bea7fbf8780a31c4b5b5c58eef.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/35_6be57adbad6e5441fc635fdc5942082c.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/36-small_9b04358e203193db389581fc309edc54.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/36_2b750ff1292bfb120d7c612c8f9e2856.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/37-small_3d57f8086094d5813ca0395e11b2115d.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/37_9ddf671278ede1c15b3b9a528af0894a.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/38-small_bb819181da26de937406e3c4cade0732.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/38_7be6c2b083de1ac7f6d5fcf12113e71e.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/39-small_7b3091c2f5ddc534c31b21146e7108b6.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/39_931da3b73841f9d534309a60a64fd10b.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/4-small_67004a0d7bad092a477597b0175c6062.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/4_8bc274514c6c4c4a88ee82de7cfeb906.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/40-small_990398e28b32b28f52589bef6d1f0a5f.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/40_0f688a118e24b56c171348244b9b07f8.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/41-small_c64c9feb49d696f6831408ba59afb5ec.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/41_d65ab7fa9a93afad08f26a33d7054b38.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/42-small_5ce05a2ae6ca6e2a1fc46688dbe42e80.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/42_155c5fcf08dc0abfd8f14c65d7d5654d.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/43-small_0b0fe537e343aff2d632fb1b17d2e12a.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/43_942c4acfa465c3e9e3ff4c5a34c64cd3.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/44-small_329a39a3a8c98b4cb6e7f4675443a19a.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/44_7f22acb6ad4a17ae0265769fce5c22a6.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/45-small_d1bd671935adc1cdf63956e8eb9afac2.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/45_4bd86b5aafbf253bf94ec89250b80bee.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/46-small_71b85b1d515bbc42f54201cca08971de.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/46_cbaa4425ea30ee8459d2f76bd5cf3bcf.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/47-small_847cd24c3f6a1cd5c794c95821ce5315.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/47_9d657dcc199acbe9559b89e3e7afac9c.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/48-small_73f519660cd876c61346bea0c6a595d7.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/48_2ca150cbb1d0f7fd49ee52f69ed33ef7.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/49-small_e58aafc980614a9cd7796bea7b5ea8f0.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/49_7916a894ebde7d29c2cc29b267f1299f.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/5-small_f5ba2e25bc3764aa83a85853deb53d87.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/5_8556cca21df3b7e3eb714443b6cec208.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/50-small_525faaabc032a102c86dbb6f67befe81.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/50_65b589df22035a9d9861e4ae67af9df1.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/51-small_ed4680a143084feeef4da8bdf0b0e2ec.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/51_d8fdd39cc3a14e2a94f9f9af3afd368d.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/52-small_8e3471fa3c7a719ba91074634c4d7979.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/52_1af3f668169cae7e9923df859e17c7d6.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/53-small_2f8e1af2a83efe19f53e9d3b1a981d6a.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/53_a6b165f577f0d6f1a774cdaf09c70e60.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/54-small_2275d4552d98c42f3a9cf75516295758.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/54_ad58d2495947725b8ad9f2bad4b1d01d.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/55-small_12546da3840024e711aadb226feba380.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/55_07ad3566d3997f8a37b761e33f247820.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/56-small_1a3b1873bcb7bac27b075a8d45bf9f17.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/56_bd4c1c7ec5407db09b9be74bb12d65d5.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/57-small_02306fe41d7232724bd764f7d62d755c.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/57_1df5d0ad9cfc1eb5e05dbb63c46c593d.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/58-small_0e9fc466a45938f2b2d6a4e26dfef57a.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/58_fe6d7d3e76a658af3d94906efff4cdf5.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/59-small_c3c4e9785b1b6a5089b6f56866994197.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/59_19957e749b80764f610f1e7e9732c080.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/6-small_c249ac53bc5f0b79972dd44b1ca95009.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/6_d405ce4edf49d83c99648a67afef9054.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/60-small_650e2794017e0f1b04e8754abb5d4194.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/60_e19e22190a8df7c2a9bd1a40753b131b.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/61-small_56d55629e4a64c5e4d8b2320a4e483bc.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/61_46eae11d9afe75ac772102a019a2f08e.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/62-small_ecf75d941a14f2416e85cb929f8aebc1.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/62_c7cba536f0b0a7896c96e85e8e4c8d43.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/63-small_941bdeef6eccbcd09e3ea75cc1b8c24f.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/63_68a4257ebf128293b9bf0d82e0c2e5d5.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/64-small_def9179dec348ba591d22664c4818b61.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/64_35a3091e70e729d08a6c6cb1967d5479.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/65-small_1967ca19126796d97e6111a1a3a4a9d1.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/65_ed63356a11bfc3680e50504982d1fbcb.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/66-small_94996701df3039209fb26add4efcf666.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/66_b2c20bcb1b10fd13dfb8630af5fd990e.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/67-small_4f63c437a209a7ad0bcf7c532a4b5c2b.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/67_74962d96ed4498a53b273d7c7f97cd95.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/68-small_060e2bb909589247c408c14f6a6033cb.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/68_bfadf2e94bf6d1a32fa142aad2535b19.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/69-small_222b64e79ebfa53dc317f356f88f79d7.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/69_823ae15c1b8b6fd2804952776aa4416b.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/7-small_e1873e6ad53a0af444f5addb67eaced6.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/7_28c6789c809592f948d6ad165bc97b4d.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/70-small_b824eab0c5ff788375e1d813066e7870.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/70_2ffdc06ed22bb4307cfd09798008b468.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/71-small_fe1f189f36d31cc7d0d5bad03d145fa9.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/71_ddc3beab54ee7aa3c4a367b9afc8e185.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/72-small_fbe8809b74691dcc03297bcb9e264008.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/72_a3c9b6c7f86f1ee06773b69a3c623092.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/8-small_552832c1e01cb3e3d5b224748901e127.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/8_128cd117ec14155b6859d175083c3095.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/9-small_accdf35d13519e58309a75bd0f5340a6.jpg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appbackgrounds/9_832d21976c5d596f2ce1e6714bb26802.jpg"
}, function (e, n, t) {
    var i = {
        "./0.png": 220,
        "./1.png": 221,
        "./10.png": 222,
        "./11.png": 223,
        "./12.png": 224,
        "./13.png": 225,
        "./14.png": 226,
        "./15.png": 227,
        "./17.png": 228,
        "./18.png": 229,
        "./19.png": 230,
        "./2.png": 231,
        "./20.png": 232,
        "./21.png": 233,
        "./22.png": 234,
        "./23.png": 235,
        "./24.png": 236,
        "./25.png": 237,
        "./26.png": 238,
        "./27.png": 239,
        "./28.png": 240,
        "./29.png": 241,
        "./3.png": 242,
        "./30.png": 243,
        "./31.png": 244,
        "./32.png": 245,
        "./33.png": 246,
        "./34.png": 247,
        "./35.png": 248,
        "./36.png": 249,
        "./37.png": 250,
        "./38.png": 251,
        "./39.png": 252,
        "./4.png": 253,
        "./40.png": 254,
        "./41.png": 255,
        "./42.png": 256,
        "./43.png": 257,
        "./44.png": 258,
        "./45.png": 259,
        "./46.png": 260,
        "./47.png": 261,
        "./48.png": 262,
        "./49.png": 263,
        "./5.png": 264,
        "./50.png": 265,
        "./51.png": 266,
        "./52.png": 267,
        "./53.png": 268,
        "./54.png": 269,
        "./55.png": 270,
        "./56.png": 271,
        "./57.png": 272,
        "./58.png": 273,
        "./59.png": 274,
        "./6.png": 275,
        "./60.png": 276,
        "./61.png": 277,
        "./62.png": 278,
        "./63.png": 279,
        "./64.png": 280,
        "./65.png": 281,
        "./66.png": 282,
        "./67.png": 283,
        "./68.png": 284,
        "./69.png": 285,
        "./7.png": 286,
        "./70.png": 287,
        "./71.png": 288,
        "./8.png": 289
    };

    function a(e) {
        var n = o(e);
        return t(n)
    }

    function o(e) {
        if (!t.o(i, e)) {
            var n = new Error("Cannot find module '" + e + "'");
            throw n.code = "MODULE_NOT_FOUND", n
        }
        return i[e]
    }
    a.keys = function () {
        return Object.keys(i)
    }, a.resolve = o, e.exports = a, a.id = 219
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/0_3b6f07e6d8c54e6e73095ec6dcbd124b.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/1_79ce9f07b32f13120b26926d7664f049.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/10_17fd0688756bf40a8d12f6ee52f7f1a7.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/11_982c43a3fb429f9992a1f78188deb510.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/12_e15869494a1446169159c7b1a5e959c0.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/13_95a0535e3464ebf94716badee4ed5a6f.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/14_298176657f8069ea5220c23adb6b70be.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/15_a846416602fb9578abe49da652bbcdc1.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/17_37e4ecbf38b26bf96a8e1265dd15375b.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/18_14049125ec20bdd5d6c6f82cefca4619.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/19_be793b7662d61fa9d560843178160f1b.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/2_c601ddb7e99a8e694619af9ca05d965d.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/20_71c5dd371596273fd346bd0c6ebe8fb9.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/21_ccf9445164fc98fb7351544a3d42a86d.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/22_ad08321ba2930b17abffc60dfd23469e.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/23_40c874683e32641f783179e8f56603b7.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/24_e967ae43b5a92fc57c5d4db47fd890d5.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/25_c62e84af0239fb879610b9cefcc1ce98.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/26_7bded57cb99fb8d542e1d50e86712e19.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/27_851887caaab1b7a4e45096fbebf8757f.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/28_773a25b62616268080ebda5f23c4ef56.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/29_711964270f5d3df82e86e974c9c139a4.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/3_917c95184fc4f9f6e5d8d1cf7faa71af.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/30_1f5b0414416dd7c4c6c9cb3ffbf86d0f.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/31_e16d5096036767bd40d22bc36e5adf8f.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/32_d12a281acc1be40a6e39c218c891bf68.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/33_fb658f9c7a23a0be62ee598f5c614f3f.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/34_8d844103fd2054011720487455e5c3a1.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/35_e6bf30970611c44921a9d16c6d75baed.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/36_8b51e861f6330a37a181c5c48ab18cf7.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/37_533e293f0c8947ada653b47c00e394e2.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/38_40cd428567644eabf2ede3752cfe4b3c.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/39_6510264d46b91e3541a0c907d79a2193.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/4_1d92902596773fef1efc33d99ea1860a.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/40_02e793fece1433e6ad0351c24519fd93.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/41_c963ae2006abb4855c2b2bcec9b90f41.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/42_347c2dacbfe040a614ee467aac3ab791.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/43_9a829ce32e657eb0854ca9bfd7933ace.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/44_08ed657e48f1458641b5f879d82004cd.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/45_e945186f8a1c151dfc0e0b7eff98aa1f.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/46_c4f7bd87302da51b62e877bdd41aadec.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/47_816591beeaa38f576fd537e3b542c983.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/48_1064cc22a5c8901979cf24ef4b7bc3bb.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/49_2387c6214462eb235a3be8ab9d01ed2d.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/5_b37baba9ebd2098f91aeeee5dae36aa5.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/50_67daefc45a533a221d706eda9145ae51.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/51_9a829ce32e657eb0854ca9bfd7933ace.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/52_30f31a5ddeb05f5b5fc9785d9ca8e287.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/53_8b36337037cff88c3df203bb73d58e41.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/54_3492034f81f2a08f6e56cfcc20f562a4.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/55_bba518bf4f8a76d759172ea1f5788422.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/56_32ac3572066eaf431c60e7a44e3cbdf4.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/57_f97a4dbda953e527e8ff72a30d278fda.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/58_4f65354e08ac4f70495d92375b26c794.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/59_5f060f3b0dc7994f1106fd26a4c93f95.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/6_b09574fe38718dccfcb89521d2079d9d.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/60_17b7970e23a4e45768b586e1d427eaf3.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/61_c95ca8771b79ae7d0ae92d9f69d0e0f4.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/62_5f6014c05f1b5997b16f42477cb3d302.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/63_da9c33d6525a8b7114230e36147dcab6.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/64_ef5d88e683b59ee7e896ae27c028d42a.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/65_cb349a807a812d18c808df40f83fda90.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/66_979682a771723da065c80eedc3f6ee17.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/67_d4d2f4e555357c16966afc663c4f75e7.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/68_98cde97cf0ffa73b71b6a2695eb2c065.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/69_7b986e36efc8cc7dac3b71c8f2038ef9.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/7_d8789a0ce2c0e1a63b0ab9faad3a6982.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/70_2f8d4fc6f3adc4552fd9bd5cead3045e.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/71_9772bad22f36e7904b0ad31b67bcf671.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/applogos/8_8a58659b05a0ce2da0c4b5cd6e2c7b20.png"
}, function (e, n, t) {
    var i = t(1),
        a = i.Helper,
        o = i.Cookies,
        r = 0,
        s = 1;
    e.exports = function () {
        var e = r;
        this.writeCookie = function () {
            o.write("brcap", e, !0, !0)
        }, a.isOnTouchStartEventSupported() && (e |= s)
    }
}, function (e, n, t) {
    var i = t(12),
        a = t(1),
        o = t(5),
        r = window,
        s = r.document,
        c = a.QueryString,
        d = a.Cookies,
        l = -2147186943;

    function u(e, n, t, i, a) {
        var d = "53ee284d-920a-4b59-9d30-a60315b26836",
            p = e,
            f = n,
            g = t,
            m = i,
            b = a,
            v = {},
            h = 0,
            _ = null,
            w = null,
            S = null,
            C = null;

        function x(e) {
            if (e.source === r) {
                var n = e.data,
                    t = n && n.channel,
                    i = n && n.responseId,
                    a = n && n.body,
                    o = a && a.method;
                if (t === d && i && ("CreateProviderAsync" === o || "Response" === o)) {
                    p.logMessage("Received message for method " + o);
                    var s = v[i];
                    delete v[i], setTimeout((function () {
                        s(a.response || {})
                    }), 0)
                }
            }
        }

        function y(e, n) {
            return new o((function (t) {
                var i = {
                    channel: d,
                    responseId: ++h,
                    body: e
                };
                n && (i.extensionId = n), v[i.responseId] = t, p.logMessage("Sending message for method " + (e || {}).method || !1), r.postMessage(i, "*")
            })).then((function (e) {
                return "Success" === e.status ? o.resolve(e.result || {}) : o.reject(new u.Error(e.code, e.description, e.ext))
            }))
        }

        function k() {
            return C || (r.addEventListener && r.addEventListener("message", x), p.logMessage("Creating ChromeBrowserCore provider"), C = y({
                method: "CreateProviderAsync",
                response: {
                    status: "Success"
                }
            }).then(T)), C
        }

        function T() {
            for (var e = null, n = _.firstChild; n;) !n.id || null !== e && "ppnbnpeolgkicgegkbkbjmhlideopiji" !== n.id || (e = n.id), _.removeChild(n), n = _.firstChild;
            if (!e) throw new u.Error("NoExtension", "Extension is not installed.", null);
            return p.logDataPoint("extension.id", e), p.logMessage("Using Chrome extension with id " + e), e
        }

        function P(e) {
            return "OSError" === e.code && e.externalData && e.externalData.error === l ? (p.logMessage("GetCookies method not found, falling back to GetCookie"), k().then((function (e) {
                return y({
                    method: "GetCookie",
                    uri: w
                }, e)
            }))) : o.reject(e)
        }

        function D(e) {
            var n = e.response || [];
            if (n && n.length)
                for (var t = 0, i = n.length; t < i; ++t) {
                    var a = a = n[t].data || "",
                        o = a.indexOf(";"); - 1 !== o && (a = a.substr(0, o)), n[t].data = a + S
                }
            return n
        }
        this.getCookiesAsync = function () {
                return k().then((function (e) {
                    return p.logMessage("Pulling SSO cookies"), y({
                        method: "GetCookies",
                        uri: w
                    }, e).then(null, P).then(D)
                }))
            },
            function () {
                if (w = c.appendOrReplace(r.location.href, "sso_nonce", f), b) {
                    var e = c.parse(w);
                    e.fragment && (e.fragment = null, w = c.join(e))
                }
                S = "; path=/; domain=" + g + (m ? "" : "; secure");
                (_ = s.getElementById("ch-53ee284d-920a-4b59-9d30-a60315b26836")) || ((_ = s.createElement("div")).id = "ch-53ee284d-920a-4b59-9d30-a60315b26836", s.body.appendChild(_))
            }()
    }
    u.Error = function (e, n, t) {
        var a = e,
            o = n,
            r = t;
        this.code = a, this.description = o, this.externalData = r, this.toString = function () {
            var e = "ChromeBrowserCore error " + (a || "") + ": " + (o || "");
            return r && (e += " (ext: " + i.stringify(r) + ")"), e
        }, this.toCookieString = function () {
            var e = "NA";
            if (d.isCookieSafeValue(a)) {
                e += "|" + a;
                var n = r ? encodeURIComponent(i.stringify(r)) : null;
                n && d.isCookieSafeValue(n) && (e += "|" + n)
            }
            return e
        }
    }, e.exports = u
}, function (e, n, t) {
    var i = t(1),
        a = t(5),
        o = window,
        r = i.Cookies;
    e.exports = function (e, n, t, i) {
        var s = e,
            c = n,
            d = t,
            l = i;

        function u(e, n, t) {
            var i = (new Date).getTime();
            return function (e, n, t) {
                return new a((function (n, t) {
                    o.navigator.msLaunchUri(e, n, t), setTimeout((function () {
                        t("timeout")
                    }), c)
                })).then((function () {
                    var e = (new Date).getTime() - t;
                    s.logDataPoint("msLaunchUri.success.ms", e), s.logMessage(n + " initiated successfully (took " + e + " ms)")
                }), (function (e) {
                    if ("timeout" === e) s.logDataPoint("msLaunchUri.response", l ? "timeout" : "timeout-continue"), s.logMessage("");
                    else {
                        var i = (new Date).getTime() - t;
                        s.logDataPoint("msLaunchUri.failure.ms", i), s.logMessage(n + " was NOT initiated successfully (took " + i + " ms)")
                    }
                    if ("timeout" !== e || l) return a.reject(e || "noHandler")
                }))
            }(e, n, i).then((function () {
                return function (e, n, t) {
                    return new a((function (i, a) {
                        var o = setInterval((function () {
                            var e = t ? null : r.getCookie("ESTSUSERLIST"),
                                a = r.getCookie("ESTSSSO");
                            (e || a) && (clearInterval(o), s.logDataPoint((e ? "ESTSUSERLIST" : "ESTSSSO") + ".cookie.ms", (new Date).getTime() - n), e ? (s.logMessage("Users list cookie detected"), r.remove("ESTSUSERLIST"), i({
                                userList: decodeURIComponent(e).replace(/\+/g, " ")
                            })) : i({
                                reload: !0
                            }))
                        }), 250);
                        setTimeout((function () {
                            clearInterval(o), s.logDataPoint("TB.response.timeout.ms", (new Date).getTime() - n), s.logMessage(e + " timed out."), a("timeout")
                        }), d)
                    }))
                }(n, i, t)
            }))
        }
        this.pullBrowserSsoCookieAsync = function (e) {
            return u(e, "cookie pull", !1)
        }, this.loginWindowsUserAsync = function (e) {
            return u(e, "Windows user login", !0)
        }
    }
}, function (e, n, t) {
    var i = {
        "./signin-facebook.png": 294,
        "./signin-github-white.png": 295,
        "./signin-github-white.svg": 296,
        "./signin-github.png": 297,
        "./signin-github.svg": 298,
        "./signin-google.png": 299,
        "./signin-google.svg": 300,
        "./signin-linkedin-white.png": 301,
        "./signin-linkedin-white.svg": 302,
        "./signin-linkedin.png": 303,
        "./signin-linkedin.svg": 304,
        "./signin-microsoft.png": 305,
        "./signin-microsoft.svg": 306,
        "./signin-options-white.png": 307,
        "./signin-options-white.svg": 308,
        "./signin-options.png": 309,
        "./signin-options.svg": 310
    };

    function a(e) {
        var n = o(e);
        return t(n)
    }

    function o(e) {
        if (!t.o(i, e)) {
            var n = new Error("Cannot find module '" + e + "'");
            throw n.code = "MODULE_NOT_FOUND", n
        }
        return i[e]
    }
    a.keys = function () {
        return Object.keys(i)
    }, a.resolve = o, e.exports = a, a.id = 293
}, function (e, n, t) {
    e.exports = t.p + "content/images/signin-facebook_10215239ff5f8a0c7f70c82ddde777d2.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/signin-github-white_8084e7ef63aa90944b7cf3f2e6af4197.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/signin-github-white_ba5454e1847816a7281d1e883bb1b835.svg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/signin-github_e63e21329755d994d04e95a3bff0b7b6.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/signin-github_d551e60e6ee4fc726f4b2dad17ca609f.svg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/signin-google_786fd388cd89b8279260f9dd85a909df.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/signin-google_dc4acd404e611f5d6aa269c9e1ad06a4.svg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/signin-linkedin-white_5262a35e0a35f08faed36d9845f2b574.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/signin-linkedin-white_d81eb44cd97d9ab5d52e1b8f606a1fde.svg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/signin-linkedin_53015fa876c6792e4ef04c8de6d51738.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/signin-linkedin_f9e2439867cd3f19ea46e15b8586e598.svg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/signin-microsoft_4d5d920db48acaaafec3c3f161a829d3.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/signin-microsoft_f9be8214406896ed69f9c6051b104764.svg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/signin-options-white_4a3401f01aa69c9c9c2ca37f72f5767c.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/signin-options-white_635b77f7a8eb76f94bef8b38a5882253.svg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/signin-options_d3e469e85de84565c8280620b6874fda.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/signin-options_4e48046ce74f4b89d45037c90576bfac.svg"
}, function (e, n) {
    var t = window;
    t.Telemetry = t.Telemetry || {}, t.Telemetry.EClientEvent = {
        Account_Signup_SwitchSignupType: 1e4,
        Account_Signup_MemberName_ValidationError: 10001,
        Account_ResetPW_SeeMoreVerificationOptions: 11e3,
        Account_ResetPW_SelectedVerificationOption: 11001,
        Account_ResetPW_OTT_ValidationError: 11002,
        Account_ResetPW_SeeMoreSecondaryAction: 11003,
        Account_Signup_Phone: 11004,
        Account_Signup_EASI: 11005,
        Account_Signup_Live: 11006,
        Account_DeviceFingerPrinting_Iframe_Load: 11007,
        Signin_Email_Phone_Skype: 11008,
        Signin_Submit: 11009,
        Signup_ChinaPIPLConsent_UserAction: 11010
    }
}, function (e, n, t) {
    window,
    e.exports = function (e) {
        function n(n) {
            for (var t, a, o = n[0], r = n[1], s = 0, d = []; s < o.length; s++) a = o[s], Object.prototype.hasOwnProperty.call(i, a) && i[a] && d.push(i[a][0]), i[a] = 0;
            for (t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);
            for (c && c(n); d.length;) d.shift()()
        }
        var t = {},
            i = {
                1: 0,
                0: 0
            };

        function a(n) {
            if (t[n]) return t[n].exports;
            var i = t[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(i.exports, i, i.exports, a), i.l = !0, i.exports
        }
        a.e = function (e) {
            var n = [],
                t = i[e];
            if (0 !== t)
                if (t) n.push(t[2]);
                else {
                    var o = new Promise((function (n, a) {
                        t = i[e] = [n, a]
                    }));
                    n.push(t[2] = o);
                    var r, s = document.createElement("script");
                    s.charset = "utf-8", s.timeout = 120, a.nc && s.setAttribute("nonce", a.nc), s.src = a.p + "oneDs_641b1cf809bdc17b42ab.js";
                    var c = new Error;
                    r = function (n) {
                        s.onerror = s.onload = null, clearTimeout(d);
                        var t = i[e];
                        if (0 !== t) {
                            if (t) {
                                var a = n && ("load" === n.type ? "missing" : n.type),
                                    o = n && n.target && n.target.src;
                                c.message = "Loading chunk " + e + " failed.\n(" + a + ": " + o + ")", c.name = "ChunkLoadError", c.type = a, c.request = o, t[1](c)
                            }
                            i[e] = void 0
                        }
                    };
                    var d = setTimeout((function () {
                        r({
                            type: "timeout",
                            target: s
                        })
                    }), 12e4);
                    s.onerror = s.onload = r, document.head.appendChild(s)
                } return Promise.all(n)
        }, a.m = e, a.c = t, a.d = function (e, n, t) {
            a.o(e, n) || Object.defineProperty(e, n, {
                enumerable: !0,
                get: t
            })
        }, a.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, a.t = function (e, n) {
            if (1 & n && (e = a(e)), 8 & n) return e;
            if (4 & n && "object" == typeof e && e && e.__esModule) return e;
            var t = Object.create(null);
            if (a.r(t), Object.defineProperty(t, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & n && "string" != typeof e)
                for (var i in e) a.d(t, i, function (n) {
                    return e[n]
                }.bind(null, i));
            return t
        }, a.n = function (e) {
            var n = e && e.__esModule ? function () {
                return e["default"]
            } : function () {
                return e
            };
            return a.d(n, "a", n), n
        }, a.o = function (e, n) {
            return Object.prototype.hasOwnProperty.call(e, n)
        }, a.p = "", a.oe = function (e) {
            throw console.error(e), e
        };
        var o = window.telemetry_webpackJsonp = window.telemetry_webpackJsonp || [],
            r = o.push.bind(o);
        o.push = n, o = o.slice();
        for (var s = 0; s < o.length; s++) n(o[s]);
        var c = r;
        return a(a.s = 7)
    }([function (e, n) {
        e.exports = {
            ReportEventIdAttr: "data-report-event",
            ReportEventValueAttr: "data-report-value",
            ReportEventTriggerAttr: "data-report-trigger",
            ReportEventValueAttrBinding: "attr:",
            ReportEventHandlerAttachedAttr: "data-report-attached",
            DataViewId: "data-viewid",
            NonIndexedDataPointKey: "Data",
            Click: "click",
            Dblclick: "dblclick",
            Keypress: "keypress",
            Cut: "cut",
            Copy: "copy",
            Paste: "paste",
            Change: "change",
            Focus: "focus",
            Scroll: "scroll",
            Submit: "submit",
            Reset: "reset",
            Input: "input",
            A: "a",
            Radio: "radio",
            Checkbox: "checkbox",
            Button: "button",
            ExceptionData: "ExceptionData",
            PageActionData: "PageActionData",
            ExceptionsTablesuffix: "Exceptions",
            PageActtionsTablesuffix: "UserActions"
        }
    }, function (e, n) {
        var t;
        ! function (e) {
            e.AddListener = function (e, n, t) {
                if (e && "function" == typeof e.addEventListener) e.addEventListener(n, t);
                else {
                    if (!e || !e.attachEvent) throw "Browser supports neither addEventListener nor attachEvent";
                    e.attachEvent("on" + n, t)
                }
            }, e.GenerateGUID = function () {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function (e) {
                    var n, t, i = (n = 0, t = 16, Math.floor(Math.random() * Math.floor(t - n)) + n);
                    return "y" === e && (i &= 11), i.toString(16)
                }))
            }, Object.keys || (Object.keys = function () {
                "use strict";
                var e = Object.prototype.hasOwnProperty,
                    n = !{
                        toString: null
                    }.propertyIsEnumerable("toString"),
                    t = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                    i = t.length;
                return function (a) {
                    if ("function" != typeof a && ("object" != typeof a || null === a)) throw new TypeError("Object.keys called on non-object");
                    var o, r, s = [];
                    for (o in a) e.call(a, o) && s.push(o);
                    if (n)
                        for (r = 0; r < i; r++) e.call(a, t[r]) && s.push(t[r]);
                    return s
                }
            }()), Array.prototype.indexOf || (Array.prototype.indexOf = function (e, n) {
                if (null == this) throw new TypeError("'this' is null or not defined");
                var t = this.length >>> 0;
                for (n = +n || 0, Math.abs(n) === 1 / 0 && (n = 0), n < 0 && (n += t) < 0 && (n = 0); n < t; n++)
                    if (this[n] === e) return n;
                return -1
            })
        }(t || (t = {})), n.AddListener = t.AddListener, n.GenerateGUID = t.GenerateGUID
    }, function (e, n, t) {
        var i, a = window.ServerData || {},
            o = window.document.querySelector("script[nonce]"),
            r = o ? o.nonce || o.getAttribute("nonce") : void 0;
        t.nc = r, t.p = (a.urlCdn || a.a) + "content/js/",
            function (e) {
                var n = t(0),
                    i = t(1),
                    a = window,
                    o = function () {
                        function e(e) {
                            this._preSendHandlers = [], this._eventProvider = e
                        }
                        return e.prototype.initialize = function (e) {
                            return this._eventApiConfig = e, this._eventDict = {}, this._eventProvider.initialize(e)
                        }, e.prototype.set = function (e, n, t) {
                            void 0 === t && (t = "data"), void 0 === this._eventDict[t] && (this._eventDict[t] = {}), null != n && (this._eventDict[t][e] = n)
                        }, e.prototype.get = function (e, n) {
                            return void 0 === n && (n = "data"), this._eventDict[n][e]
                        }, e.prototype.hasEvents = function () {
                            return this._numEvents() > 0
                        }, e.prototype.hasEvent = function (e, n) {
                            return void 0 === n && (n = "data"), void 0 !== this._eventDict[n][e]
                        }, e.prototype.clear = function () {
                            this._eventDict = {}
                        }, e.prototype.post = function (e, n) {
                            for (var t = 0, i = this._preSendHandlers; t < i.length; t++)(0, i[t])(n);
                            if (this.hasEvents()) {
                                var a = [];
                                if (e) {
                                    var o = this._eventDict.data;
                                    delete this._eventDict.data, a = [o, this._eventDict.cloud, this._eventDict.app], this.validKeysPresent(a) && this._eventProvider.post({
                                        name: e,
                                        data: o,
                                        ext: this._eventDict
                                    })
                                } else a = [this._eventDict.cloud, this._eventDict.app], this.validKeysPresent(a) && this._eventProvider.post(this._eventDict);
                                this.clear()
                            }
                        }, e.prototype.validKeysPresent = function (e) {
                            for (var n = /^\w+$/, t = 0; t < e.length; t++)
                                for (var i in e[t])
                                    if (e[t].hasOwnProperty(i) && !n.test(i)) return !1;
                            return !0
                        }, e.prototype.addPreSendHandler = function (e, n) {
                            this._preSendHandlers.push((function (t) {
                                e(n, t)
                            }))
                        }, e.prototype._numEvents = function () {
                            return Object.keys(this._eventDict).length
                        }, e
                    }();
                e.EventApi = o;
                var s = function () {
                    function e() {
                        this._iduxProviderUrl = "https://js.monitor.azure.com/scripts/c/ms.analytics-web-2.min.js", this._isAppInsightsLoaded = !1, this._pendingEventQueue = []
                    }
                    return e.prototype.initialize = function (e) {
                        var n = this,
                            o = this;
                        return this._args = e, a.Telemetry.appInsights ? (o._isAppInsightsLoaded = !0, !0) : (this._args.providerUrl ? o._checkIfOneDsScriptExists(this._args.providerUrl) ? o._initializeAppInsights(new a.oneDS.AppInsightsCore, new a.oneDS.PostChannel, new a.oneDS.PropertiesPlugin, new a.oneDS.ApplicationInsights) : i.AddListener(a, "load", (function () {
                            var e = a.document.createElement("script");
                            e.src = n._args.providerUrl || n._iduxProviderUrl, e.type = "text/javascript", r && e.setAttribute("nonce", r), i.AddListener(e, "load", (function () {
                                o._initializeAppInsights(new a.oneDS.AppInsightsCore, new a.oneDS.PostChannel, new a.oneDS.PropertiesPlugin, new a.oneDS.ApplicationInsights)
                            })), a.document.body.appendChild(e)
                        })) : t.e(2).then(function () {
                            var e = t(3),
                                n = t(4),
                                i = t(6),
                                a = t(5);
                            o._initializeAppInsights(new e.AppInsightsCore, new n.PostChannel, new a.PropertiesPlugin, new i.ApplicationInsights)
                        }.bind(null, t))["catch"](t.oe), !0)
                    }, e.prototype.post = function (e) {
                        this._isAppInsightsLoaded ? this._postToAppInsights([e]) : this._pendingEventQueue.push(e)
                    }, e.prototype._postToAppInsights = function (e) {
                        for (var n = 0, t = e; n < t.length; n++) {
                            var i = t[n];
                            this._isAppInsightsManager(a.Telemetry.appInsights) ? (this._appInsights || (this._appInsights = a.Telemetry.appInsights.newInst(this._args.appInsightsConfig.instrumentationKey, [], [])), this._appInsights.track(i)) : a.Telemetry.appInsights.track(i)
                        }
                    }, e.prototype._initializeAppInsights = function (e, n, t, i) {
                        a.Telemetry.appInsights || (this._args.appInsightObject ? a.Telemetry.appInsights = this._args.appInsightObject : a.Telemetry.appInsights = this._createAppInsightsCore(e, n, t, i)), this._isAppInsightsLoaded = !0, this._pendingEventQueue.length > 0 && this._postToAppInsights(this._pendingEventQueue)
                    }, e.prototype._checkIfOneDsScriptExists = function (e) {
                        for (var n = document.getElementsByTagName("script"), t = 0; t < n.length; t++)
                            if (n[t].src === e) return !0;
                        return !1
                    }, e.prototype._isAppInsightsManager = function (e) {
                        return "function" == typeof e.newInst
                    }, e.prototype._createAppInsightsCore = function (e, t, i, o) {
                        var r = null;
                        if (!0 === a.ServerData.fAutoCaptureEvents) {
                            var s = {
                                instrumentationKey: this._args.appInsightsConfig.instrumentationKey,
                                extensions: [i],
                                channelConfiguration: {
                                    eventsLimitInMem: 50
                                },
                                extensionConfig: [],
                                webAnalyticsConfiguration: {
                                    autoCapture: {
                                        scroll: !1,
                                        pageView: !1,
                                        onLoad: !1,
                                        onUnload: !1,
                                        click: a.ServerData.fAutoCaptureClicks,
                                        resize: !1,
                                        jsError: a.ServerData.fAutoCaptureJsErrors
                                    }
                                }
                            };
                            o.initialize(s, []), o.addTelemetryInitializer((function (e) {
                                var t = i.getPropertiesContext(),
                                    o = "";
                                e.baseType !== n.ExceptionData && e.baseType !== n.PageActionData || (t.cloud.role = a.ServerData.serverDetails.dc, t.cloud.roleInstance = a.ServerData.serverDetails.ri, t.cloud.roleVer = a.ServerData.serverDetails.ver, t.app.id = a.ServerData.clientEvents.appId, t.app.ver = a.ServerData.serverDetails.ver, t.app.env = a.ServerData.environment, t.app.sesId = a.ServerData.correlationId), e.baseType === n.ExceptionData ? (o = a.ServerData.clientEvents.defaultEventName + n.ExceptionsTablesuffix, e.name = o, t.app.name = o) : e.baseType === n.PageActionData && (o = a.ServerData.clientEvents.defaultEventName + n.PageActtionsTablesuffix, e.name = o, t.app.name = o)
                            })), r = o
                        } else {
                            var c = {
                                instrumentationKey: this._args.appInsightsConfig.instrumentationKey,
                                extensions: [t],
                                extensionConfig: []
                            };
                            c.extensionConfig[t.identifier] = {
                                eventsLimitInMem: 50
                            }, this._args.appInsightsConfig && (c.extensionConfig = this._args.appInsightsConfig), e.initialize(c, []), r = e
                        }
                        return r
                    }, e
                }();
                e.OneDSEventProvider = s;
                var c = function () {
                    function e() {}
                    return e.prototype.initialize = function () {
                        return !0
                    }, e.prototype.post = function () {}, e
                }();
                e.EmptyEventProvider = c
            }(i || (i = {})), n.EventApi = i.EventApi, n.OneDSEventProvider = i.OneDSEventProvider, n.EmptyEventProvider = i.EmptyEventProvider
    }, , , , , function (e, n, t) {
        var i;
        ! function (e) {
            var n = t(1),
                i = t(2),
                a = i.EventApi,
                o = i.EmptyEventProvider,
                r = i.OneDSEventProvider,
                s = window,
                c = t(0),
                d = function () {
                    function e(e) {
                        var n = this;
                        if (this._nonIndexedDataPoint = {}, this._enabled = !0, this._clientEventsConfig = e || {}, this._enabled = this._clientEventsConfig.telemetryEnabled, this._enabled) {
                            if (this._clientEventsConfig.useOneDSEventApi ? this._eventApi = new a(new r) : this._eventApi = new a(new o), this._serverPageID = this._clientEventsConfig.hostPageID ? this._clientEventsConfig.hostPageID.toString() : "", this._serviceID = this._clientEventsConfig.serviceID ? this._clientEventsConfig.serviceID.toString() : "", this._eventApi.initialize(this._clientEventsConfig), this.addPreSendHandler((function (e) {
                                    n._setPerRequestDataPoints(e)
                                })), this._clientEventsConfig.autoPost) {
                                var t = this;
                                setInterval((function () {
                                    (t.hasPageEvents() || t._eventApi.hasEvents()) && t.post(!1)
                                }), this._clientEventsConfig.flush)
                            }
                            this._addUnloadHandlers()
                        }
                    }
                    return e.prototype.get = function (e, n, t) {
                        if (void 0 === n && (n = "data"), void 0 === t && (t = !1), this._enabled) return t ? this._eventApi.get(e, n) : this._nonIndexedDataPoint[e]
                    }, e.prototype.set = function (e, n, t, i) {
                        void 0 === t && (t = !1), this._enabled && (t ? this._eventApi.set(e, n, i) : this._nonIndexedDataPoint[e] = n)
                    }, e.prototype.append = function (e, n, t) {
                        var i;
                        void 0 === t && (t = !1), this._enabled && ((i = t ? this._eventApi.get(e) : this._nonIndexedDataPoint[e]) ? i instanceof Array || (i = [i]) : i = [], i.push(n), t ? this._eventApi.set(e, i) : this._nonIndexedDataPoint[e] = i)
                    }, e.prototype.appendClientEvent = function (e, n, t) {
                        if (this._enabled) {
                            this._isNumeric(e) && (e = this._getNumericValue(e));
                            var i = "number" == typeof e ? e : s.Telemetry.EClientEvent[e];
                            this.append("ClientEvents", {
                                ID: i,
                                EventTime: this._getCurrentTime(),
                                Value: n,
                                DataViewID: t
                            })
                        }
                    }, e.prototype.addPreSendHandler = function (e, n) {
                        this._enabled && this._eventApi.addPreSendHandler((function (n, t) {
                            e(t && t.isViewTransition, n)
                        }), n)
                    }, e.prototype.post = function (e, n) {
                        if (this._enabled) {
                            n = n || this._clientEventsConfig.defaultEventName;
                            var t = Object.keys(this._nonIndexedDataPoint).length;
                            (t > 0 && e || t >= this._clientEventsConfig.minEvents) && (this._eventApi.set(c.NonIndexedDataPointKey, JSON.stringify(this._nonIndexedDataPoint)), this._nonIndexedDataPoint = {}), this._eventApi.hasEvents() && this._eventApi.post(n, {
                                isViewTransition: e
                            })
                        }
                    }, e.prototype.postPageView = function (e, n) {
                        this._enabled && (n = n || this._clientEventsConfig.defaultEventName, this.set("ViewID", e, !0), this._eventApi.post(n, !1))
                    }, e.prototype.applyClientEventBindings = function (e) {
                        if (this._enabled)
                            for (var t = this, i = e.querySelectorAll("[" + c.ReportEventIdAttr + "]"), a = e.getAttribute(c.DataViewId) ? e.getAttribute(c.DataViewId) : "", o = function (e) {
                                    var o = i[e];
                                    if (o.getAttribute(c.ReportEventHandlerAttachedAttr)) return {
                                        value: void 0
                                    };
                                    var r = o.getAttribute(c.ReportEventIdAttr),
                                        s = o.getAttribute(c.ReportEventValueAttr),
                                        d = o.getAttribute(c.ReportEventTriggerAttr);
                                    if (s) {
                                        if (0 === s.indexOf(c.ReportEventValueAttrBinding)) {
                                            var l = s.slice(c.ReportEventValueAttrBinding.length).trim();
                                            s = o.getAttribute(l)
                                        }
                                    } else s = t._inferClientEventValue(o);
                                    var u = [c.Click, c.Dblclick, c.Keypress, c.Cut, c.Copy, c.Paste, c.Change, c.Focus, c.Scroll, c.Submit, c.Reset],
                                        p = d && d.split(",") || [c.Click];
                                    if (p.length > 0)
                                        for (var f = function (e) {
                                                -1 !== p.indexOf(u[e]) && (n.AddListener(o, u[e], (function () {
                                                    var n;
                                                    n = u[e], s || (s = n), t.appendClientEvent(r, s, a)
                                                })), o.setAttribute(c.ReportEventHandlerAttachedAttr, "1"))
                                            }, g = 0; g < u.length; g++) f(g)
                                }, r = 0; r < i.length; r++) {
                                var s = o(r);
                                if ("object" == typeof s) return s.value
                            }
                    }, e.prototype._getCurrentTime = function () {
                        return Date.now ? Date.now() : (new Date).getTime()
                    }, e.prototype.hasPageEvents = function () {
                        return Object.keys(this._nonIndexedDataPoint).length > 0
                    }, e.prototype._addUnloadHandlers = function () {
                        var e = this,
                            t = function () {
                                e.post(!0)
                            };
                        n.AddListener(s.document, "visibilitychange", (function () {
                            "hidden" === s.document.visibilityState && t()
                        })), n.AddListener(s, "pagehide", t)
                    }, e.prototype._inferClientEventValue = function (e) {
                        var n;
                        if (e) switch (e.tagName.toLowerCase()) {
                            case c.Input:
                                e instanceof HTMLInputElement ? e.type !== c.Radio && e.type !== c.Checkbox || (n = e.checked ? "checked" : "unchecked") : e instanceof HTMLButtonElement && (n = e.type === c.Button ? "clicked" : e.getAttribute(c.ReportEventIdAttr));
                                break;
                            case c.A:
                                e instanceof HTMLAnchorElement && (n = "clicked");
                                break;
                            default:
                                n = e.getAttribute(c.ReportEventIdAttr)
                        }
                        return n
                    }, e.prototype._setPerRequestDataPoints = function (e) {
                        this.set("ServerPageID", this._serverPageID, !0, "data"), this.set("PageName", this._clientEventsConfig.pageName, !0, "data"), this.set("ServiceID", this._serviceID, !0, "data"), this.set("id", this._clientEventsConfig.appId, !0, "app"), this.set("ver", this._clientEventsConfig.serverDetails.version, !0, "app"), this.set("name", this._clientEventsConfig.defaultEventName, !0, "app"), this.set("sesId", this._getCorrelationID(), !0, "app"), this.set("userId", "p: " + this._clientEventsConfig.actorID, !0, "app"), this.set("env", this._clientEventsConfig.environment, !0, "app"), this.set("role", this._getCloudrole(), !0, "cloud"), this.set("roleInstance", this._clientEventsConfig.serverDetails.roleInstance, !0, "cloud"), this.set("roleVer", this._clientEventsConfig.serverDetails.version, !0, "cloud")
                    }, e.prototype._getCloudrole = function () {
                        return this._clientEventsConfig.serverDetails.datacenter || "-"
                    }, e.prototype._getCorrelationID = function () {
                        var e = this._clientEventsConfig.correlationID;
                        return e || (e = n.GenerateGUID(), this._clientEventsConfig.correlationID = e), e
                    }, e.prototype._isNumeric = function (e) {
                        return !isNaN(e)
                    }, e.prototype._getNumericValue = function (e) {
                        return Number(e)
                    }, e
                }();
            e.TelemetryHelper = d
        }(i || (i = {})), n.TelemetryHelper = i.TelemetryHelper
    }])
}, function (e, n, t) {
    e.exports = "\x3c!-- " + (t(314), t(321), t(46), t(47), t(15), t(48), t(52), t(434), t(443), t(445), ' --\x3e\n\n\x3c!--  --\x3e\n\n<div data-bind="if: activeDialog">\n    <div data-bind="component: { name: \'dialog-control\',\n        params: {\n            templateNodes: activeDialog().templateNodes,\n            data: activeDialog().data },\n        event: {\n            close: dialog_onClose } }">\n    </div>\n</div>\n\n<form name="f1" id="i0281" novalidate="novalidate" spellcheck="false"\n    method="post" target="_top" autocomplete="off"\n    data-bind="autoSubmit: forceSubmit, attr: { action: postUrl }, ariaHidden: !!activeDialog(), css: { \'provide-min-height\': svr.cl }">\n    \x3c!-- ko withProperties: { \'$loginPage\': $data } --\x3e\n    <div class="login-paginated-page" data-bind="component: { name: \'master-page\',\n        publicMethods: masterPageMethods,\n        params: {\n            serverData: svr,\n            showButtons: svr.e,\n            showFooterLinks: true,\n            useWizardBehavior: svr.bc,\n            handleWizardButtons: false,\n            password: password,\n            hideFromAria: ariaHidden },\n        event: {\n            footerAgreementClick: footer_agreementClick } }">\n\n        \x3c!-- ko if: svr.BV --\x3e\n        \x3c!-- ko component: "cookie-banner-control" --\x3e\x3c!-- /ko --\x3e\n        \x3c!-- /ko --\x3e\n\n        <div class="lightbox-cover" data-bind="css: { \'disable-lightbox\': svr.CE && showLightboxProgress() }"></div>\n\n        \x3c!-- ko if: showLightboxProgress --\x3e\n        <div id="progressBar" class="progress" role="progressbar" data-bind="component: \'marching-ants-control\', ariaLabel: str[\'WF_STR_ProgressText\']"></div>\n        \x3c!-- /ko --\x3e\n\n        \x3c!-- ko if: loadBannerLogo --\x3e\n        <div data-bind="component: { name: \'logo-control\',\n            params: {\n                isChinaDc: svr.fIsChinaDc,\n                bannerLogoUrl: bannerLogoUrl() } }">\n        </div>\n        \x3c!-- /ko --\x3e\n\n        \x3c!-- ko if: svr.DF && paginationControlHelper.showLwaDisclaimer() --\x3e\n        <div id="LWADisclaimer" class="text-caption" data-bind="text: svr.DF"></div>\n        \x3c!-- /ko --\x3e\n\n        \x3c!-- ko if: asyncInitReady --\x3e\n        <div role="main" data-bind="component: { name: \'pagination-control\',\n            publicMethods: paginationControlMethods,\n            params: {\n                enableCssAnimation: svr.a5,\n                disableAnimationIfAnimationEndUnsupported: svr.Ck,\n                initialViewId: initialViewId,\n                currentViewId: currentViewId,\n                initialSharedData: initialSharedData,\n                initialError: $loginPage.getServerError() },\n            event: {\n                cancel: paginationControl_onCancel,\n                load: paginationControlHelper.onLoad,\n                unload: paginationControlHelper.onUnload,\n                loadView: view_onLoadView,\n                showView: view_onShow,\n                setLightBoxFadeIn: view_onSetLightBoxFadeIn,\n                animationStateChange: paginationControl_onAnimationStateChange } }">\n\n            <div data-viewid="') + t(0).PaginatedState.Username + '" data-showFedCredButton="true" data-bind="pageViewComponent: { name: \'login-paginated-username-view\',\n                params: {\n                    serverData: svr,\n                    serverError: initialError,\n                    isInitialView: isInitialState,\n                    displayName: sharedData.displayName,\n                    otherIdpRedirectUrl: sharedData.otherIdpRedirectUrl,\n                    prefillNames: $loginPage.prefillNames,\n                    flowToken: sharedData.flowToken,\n                    availableSignupCreds: sharedData.availableSignupCreds },\n                event: {\n                    redirect: $loginPage.view_onRedirect,\n                    setPendingRequest: $loginPage.view_onSetPendingRequest,\n                    registerDialog: $loginPage.view_onRegisterDialog,\n                    unregisterDialog: $loginPage.view_onUnregisterDialog,\n                    showDialog: $loginPage.view_onShowDialog,\n                    updateAvailableCredsWithoutUsername: $loginPage.view_onUpdateAvailableCreds,\n                    agreementClick: $loginPage.footer_agreementClick } }">\n            </div>\n\n            <div data-viewid="' + t(0).PaginatedState.SignupUsername + '" data-bind="pageViewComponent: { name: \'login-signup-username-view\',\n                params: {\n                    serverData: svr,\n                    serverError: initialError,\n                    isInitialView: isInitialState,\n                    displayName: sharedData.displayName,\n                    otherIdpRedirectUrl: sharedData.otherIdpRedirectUrl,\n                    flowToken: sharedData.flowToken },\n                event: {\n                    redirect: $loginPage.view_onRedirect,\n                    setPendingRequest: $loginPage.view_onSetPendingRequest } }">\n            </div>\n\n            <div data-viewid="' + t(0).PaginatedState.Password + '" data-showIdentityBanner="true" data-dynamicBranding="true" data-bind="pageViewComponent: { name: \'login-paginated-password-view\',\n                params: {\n                    serverData: svr,\n                    serverError: initialError,\n                    isInitialView: isInitialState,\n                    username: sharedData.username,\n                    displayName: sharedData.displayName,\n                    hipRequiredForUsername: sharedData.hipRequiredForUsername,\n                    passwordBrowserPrefill: sharedData.passwordBrowserPrefill,\n                    availableCreds: sharedData.availableCreds,\n                    evictedCreds: sharedData.evictedCreds,\n                    useEvictedCredentials: sharedData.useEvictedCredentials,\n                    showCredViewBrandingDesc: sharedData.showCredViewBrandingDesc,\n                    flowToken: sharedData.flowToken,\n                    defaultKmsiValue: svr.Am === ' + t(6).LoginOption.RememberPWD + ',\n                    userTenantBranding: sharedData.userTenantBranding,\n                    sessions: sharedData.sessions,\n                    callMetadata: sharedData.callMetadata,\n                    supportsNativeCredentialRecovery: sharedData.supportsNativeCredentialRecovery },\n                event: {\n                    restoreIsRecoveryAttemptPost: $loginPage.view_onRestoreIsRecoveryAttemptPost,\n                    updateFlowToken: $loginPage.view_onUpdateFlowToken,\n                    submitReady: $loginPage.view_onSubmitReady,\n                    redirect: $loginPage.view_onRedirect,\n                    resetPassword: $loginPage.passwordView_onResetPassword,\n                    setBackButtonState: view_onSetIdentityBackButtonState,\n                    setPendingRequest: $loginPage.view_onSetPendingRequest } }">\n            </div>\n\n            <div data-viewid="' + t(0).PaginatedState.AccessPass + '" data-showIdentityBanner="true" data-dynamicBranding="true" data-bind="pageViewComponent: { name: \'login-access-pass-view\',\n                params: {\n                    serverData: svr,\n                    serverError: initialError,\n                    isInitialView: isInitialState,\n                    unsafe_username: sharedData.username,\n                    unsafe_displayName: sharedData.displayName,\n                    availableCreds: sharedData.availableCreds,\n                    flowToken: sharedData.flowToken,\n                    isTapRestrictedWsi: sharedData.isTapRestrictedWsi },\n                event: {\n                    updateFlowToken: $loginPage.view_onUpdateFlowToken,\n                    submitReady: $loginPage.view_onSubmitReady,\n                    setBackButtonState: view_onSetIdentityBackButtonState,\n                    redirect: $loginPage.view_onRedirect,\n                    setPendingRequest: $loginPage.view_onSetPendingRequest } }">\n            </div>\n\n            <div data-viewid="' + t(0).PaginatedState.SearchOrganization + '" data-bind="pageViewComponent: { name: \'search-organization-view\',\n                params: {\n                    serverData: svr },\n                event: {\n                    redirect: $loginPage.view_onRedirect,\n                    setPendingRequest: $loginPage.view_onSetPendingRequest } }">\n            </div>\n\n            <div data-viewid="' + t(0).PaginatedState.ProofConfirmation + '" data-showIdentityBanner="true" data-bind="pageViewComponent: { name: \'login-proof-confirmation-view\',\n                params: {\n                    serverData: svr,\n                    isInitialView: isInitialState,\n                    username: sharedData.username,\n                    availableCreds: sharedData.availableCreds,\n                    evictedCreds: sharedData.evictedCreds,\n                    useEvictedCredentials: sharedData.useEvictedCredentials,\n                    currentCred: sharedData.otcCredential,\n                    flowToken: sharedData.flowToken },\n                event: {\n                    redirect: $loginPage.view_onRedirect,\n                    updateFlowToken: $loginPage.view_onUpdateFlowToken,\n                    setBackButtonState: view_onSetIdentityBackButtonState,\n                    setPendingRequest: $loginPage.view_onSetPendingRequest } }">\n            </div>\n\n            <div data-viewid="' + t(0).PaginatedState.OneTimeCode + '" data-showIdentityBanner="true" data-bind="pageViewComponent: { name: \'login-paginated-otc-view\',\n                params: {\n                    serverData: svr,\n                    serverError: initialError,\n                    isInitialView: isInitialState,\n                    username: sharedData.username,\n                    displayName: sharedData.displayName,\n                    otcParams: sharedData.otcParams,\n                    preferredCredential: sharedData.preferredCredential,\n                    availableCreds: sharedData.availableCreds,\n                    evictedCreds: sharedData.evictedCreds,\n                    useEvictedCredentials: sharedData.useEvictedCredentials,\n                    showCredViewBrandingDesc: sharedData.showCredViewBrandingDesc,\n                    currentCred: sharedData.otcCredential,\n                    proofConfirmation: sharedData.proofConfirmation,\n                    defaultKmsiValue: svr.Am === ' + t(6).LoginOption.RememberPWD + ',\n                    flowToken: sharedData.flowToken,\n                    isSignup: sharedData.isSignupPost },\n                event: {\n                    redirect: $loginPage.view_onRedirect,\n                    updateFlowToken: $loginPage.view_onUpdateFlowToken,\n                    submitReady: $loginPage.view_onSubmitReady,\n                    setBackButtonState: view_onSetIdentityBackButtonState,\n                    setPendingRequest: $loginPage.view_onSetPendingRequest } }">\n            </div>\n\n            <div data-viewid="' + t(0).PaginatedState.OneTimeCodeRecovery + '" data-showIdentityBanner="true" data-bind="pageViewComponent: { name: \'login-paginated-otc-view\',\n                params: {\n                    serverData: svr,\n                    serverError: initialError,\n                    isInitialView: isInitialState,\n                    username: sharedData.username,\n                    displayName: sharedData.displayName,\n                    otcParams: sharedData.recoveryCredentialsData.otcParams,\n                    preferredCredential: sharedData.recoveryCredentialsData.preferredCredential,\n                    availableCreds: sharedData.recoveryCredentialsData.availableRecoveryCreds,\n                    currentCred: sharedData.recoveryCredentialsData.otcCredential,\n                    proofConfirmation: sharedData.proofConfirmation,\n                    flowToken: sharedData.flowToken,\n                    isNativeRecovery: true },\n                event: {\n                    redirect: $loginPage.view_onRedirect,\n                    updateFlowToken: $loginPage.view_onUpdateFlowToken,\n                    submitReady: $loginPage.view_onSubmitReady,\n                    setBackButtonState: view_onSetIdentityBackButtonState,\n                    setPendingRequest: $loginPage.view_onSetPendingRequest } }">\n            </div>\n\n            <div data-viewid="' + t(0).PaginatedState.RemoteNGC + '" data-dynamicBranding="true" data-showIdentityBanner="true" data-bind="pageViewComponent: { name: \'login-remote-ngc-view\',\n                params: {\n                    serverData: svr,\n                    serverError: initialError,\n                    isInitialView: isInitialState,\n                    username: sharedData.username,\n                    displayName: sharedData.displayName,\n                    remoteNgcParams: sharedData.remoteNgcParams,\n                    availableCreds: sharedData.availableCreds,\n                    evictedCreds: sharedData.evictedCreds,\n                    useEvictedCredentials: sharedData.useEvictedCredentials,\n                    showCredViewBrandingDesc: sharedData.showCredViewBrandingDesc,\n                    defaultKmsiValue: svr.Am === ' + t(6).LoginOption.RememberPWD + ',\n                    sessions: sharedData.sessions,\n                    flowToken: sharedData.flowToken,\n                    idpRedirectUrl: sharedData.idpRedirectUrl },\n                event: {\n                    redirect: $loginPage.view_onRedirect,\n                    updateFlowToken: $loginPage.view_onUpdateFlowToken,\n                    updateRemoteNgcParams: $loginPage.view_onUpdateRemoteNgcParams,\n                    submitReady: $loginPage.view_onSubmitReady,\n                    setBackButtonState: view_onSetIdentityBackButtonState } }">\n            </div>\n\n            <div data-viewid="' + t(0).PaginatedState.RemoteConnectCanaryValidation + '" data-dynamicBranding="true" data-showIdentityBanner="true" data-bind="pageViewComponent: { name: \'remote-connect-canary-validation-view\',\n                params: {\n                    serverData: svr,\n                    postCanaryValidationAction: $loginPage.postCanaryValidationAction },\n                event: {\n                    redirect: $loginPage.view_onRedirect,\n                    setBackButtonState: view_onSetIdentityBackButtonState } }">\n            </div>\n\n            <div data-viewid="' + t(0).PaginatedState.PhoneDisambiguation + '" data-bind="pageViewComponent: { name: \'login-phone-disambiguation-view\',\n                params: {\n                    serverData: svr,\n                    isInitialView: isInitialState,\n                    username: sharedData.username,\n                    location: sharedData.location,\n                    otherIdpRedirectUrl: sharedData.otherIdpRedirectUrl,\n                    flowToken: sharedData.flowToken },\n                event: {\n                    redirect: $loginPage.view_onRedirect,\n                    setPendingRequest: $loginPage.view_onSetPendingRequest } }">\n            </div>\n\n            <div data-viewid="' + t(0).PaginatedState.LwaConsent + '" data-showIdentityBanner="true" data-bind="pageViewComponent: { name: \'login-paginated-lwa-consent-view\',\n                params: {\n                    serverData: svr,\n                    username: sharedData.username,\n                    displayName: sharedData.displayName },\n                event: {\n                    submitReady: $loginPage.view_onSubmitReady } }">\n            </div>\n\n            <div data-viewid="' + t(0).PaginatedState.IdpDisambiguation + '" data-bind="pageViewComponent: { name: \'login-idp-disambiguation-view\',\n                params: {\n                    serverData: svr,\n                    isInitialView: isInitialState,\n                    displayName: sharedData.displayName,\n                    hasInitialError: sharedData.hasIdpDisambigError,\n                    sessions: sharedData.sessions,\n                    otherIdpRedirectUrl: sharedData.otherIdpRedirectUrl,\n                    idpRedirectUrl: sharedData.idpRedirectUrl,\n                    idpRedirectPostParams: sharedData.idpRedirectPostParams,\n                    preferredCredential: sharedData.preferredCredential,\n                    desktopSsoExecuted: sharedData.desktopSsoExecuted,\n                    desktopSsoEnabled: sharedData.desktopSsoEnabled },\n                event: {\n                    redirect: $loginPage.view_onRedirect } }">\n            </div>\n\n            <div data-viewid="' + t(0).PaginatedState.IdpRedirect + '" data-bind="pageViewComponent: { name: \'login-idp-redirect-view\',\n                params: {\n                    serverData: svr,\n                    idpRedirectUrl: sharedData.idpRedirectUrl,\n                    idpRedirectPostParams: sharedData.idpRedirectPostParams,\n                    idpRedirectProvider: sharedData.idpRedirectProvider },\n                event: {\n                    redirect: $loginPage.view_onRedirect } }">\n            </div>\n\n            <div data-viewid="' + t(0).PaginatedState.IdpRedirectSpeedbump + '" data-showIdentityBanner="true" data-bind="pageViewComponent: { name: \'login-idp-redirect-speedbump-view\',\n                params: {\n                    serverData: svr,\n                    username: sharedData.username,\n                    idpRedirectUrl: sharedData.idpRedirectUrl,\n                    idpRedirectPostParams: sharedData.idpRedirectPostParams,\n                    idpRedirectProvider: sharedData.idpRedirectProvider,\n                    isInitialView: isInitialState,\n                    availableCreds: sharedData.availableCreds,\n                    evictedCreds: sharedData.evictedCreds,\n                    useEvictedCredentials: sharedData.useEvictedCredentials,\n                    showCredViewBrandingDesc: sharedData.showCredViewBrandingDesc,\n                    flowToken: sharedData.flowToken },\n                event: {\n                    redirect: $loginPage.view_onRedirect,\n                    setBackButtonState: view_onSetIdentityBackButtonState,\n                    updateFlowToken: $loginPage.view_onUpdateFlowToken,\n                    setPendingRequest: $loginPage.view_onSetPendingRequest } }">\n            </div>\n\n            <div data-viewid="' + t(0).PaginatedState.Tiles + '" data-bind="pageViewComponent: { name: \'tiles-view\',\n                params: {\n                    serverData: svr,\n                    serverError: initialError,\n                    sessions: sharedData.sessions,\n                    flowToken: sharedData.flowToken,\n                    otherIdpRedirectUrl: sharedData.otherIdpRedirectUrl,\n                    isTileRequestPending: $loginPage.asyncTileRequestCount > 0,\n                    availableSignupCreds: sharedData.availableSignupCreds },\n                event: {\n                    redirect: $loginPage.view_onRedirect,\n                    setPendingRequest: $loginPage.view_onSetPendingRequest } }">\n            </div>\n\n            <div data-viewid="' + t(0).PaginatedState.ViewAgreement + '" data-wide="true" data-hideLogo="true" data-hideLwaDisclaimer="true" data-hidePageLevelTitleAndDesc="true"\n                data-bind="pageViewComponent: { name: \'login-view-agreement-view\',\n                    params: {\n                        serverData: svr,\n                        agreementType: $loginPage.agreementType } }">\n            </div>\n\n            <div data-viewid="' + t(0).PaginatedState.LearnMoreOfflineAccount + '" data-wide="true" data-hideLogo="true" data-hideLwaDisclaimer="true" data-hidePageLevelTitleAndDesc="true"\n                data-bind="pageViewComponent: { name: \'login-view-learn-more-offline-account-view\',\n                    params: {\n                        serverData: svr } }">\n            </div>\n\n            <div data-viewid="' + t(0).PaginatedState.WebNativeBridge + '" data-hideLogo="true" data-hideLwaDisclaimer="true" data-hidePageLevelTitleAndDesc="true"\n                data-bind="pageViewComponent: { name: \'login-web-native-bridge-view\',\n                    params: {\n                        serverData: svr,\n                        request: sharedData.request },\n                    event: {\n                        executeGctResult: $loginPage.fetchSessions_onExecuteGctResult,\n                        redirect: $loginPage.view_onRedirect } }">\n            </div>\n\n            <div data-viewid="' + t(0).PaginatedState.SeeHowDataIsManaged + '" data-hidePageLevelTitleAndDesc="true"\n                data-bind="pageViewComponent: { name: \'see-how-data-is-managed-view\',\n                    params: {\n                        serverData: svr } }">\n            </div>\n\n            <div data-viewid="' + t(0).PaginatedState.ConfirmSend + '" data-showIdentityBanner="true" data-dynamicBranding="true" data-bind="pageViewComponent: { name: \'login-confirm-send-view\',\n                params: {\n                    serverData: svr,\n                    isInitialView: isInitialState,\n                    username: sharedData.username,\n                    displayName: sharedData.displayName,\n                    preferredCredential: sharedData.preferredCredential,\n                    availableCreds: sharedData.availableCreds,\n                    evictedCreds: sharedData.evictedCreds,\n                    useEvictedCredentials: sharedData.useEvictedCredentials,\n                    currentCred: sharedData.otcCredential,\n                    sessions: sharedData.sessions,\n                    flowToken: sharedData.flowToken },\n                event: {\n                    updateFlowToken: $loginPage.view_onUpdateFlowToken,\n                    redirect: $loginPage.view_onRedirect,\n                    setBackButtonState: view_onSetIdentityBackButtonState } }">\n            </div>\n\n            <div data-viewid="' + t(0).PaginatedState.RemoteLoginPolling + '" data-hideLwaDisclaimer="true" data-bind="pageViewComponent: { name: \'login-remote-login-polling-view\',\n                params: {\n                    serverData: svr,\n                    autoSendOtcRequest: isInitialState,\n                    userCode: sharedData.remoteLoginUserCode,\n                    deviceCode: sharedData.remoteLoginDeviceCode },\n                event: {\n                    submitReady: $loginPage.view_onSubmitReady } }">\n            </div>\n\n            <div data-viewid="' + t(0).PaginatedState.LearnMore + '" data-hideLogo="true" data-hideLwaDisclaimer="true"\n                data-bind="pageViewComponent: { name: \'login-learn-more-view\',\n                    params: {\n                        serverData: svr,\n                        command: \'loginlearnmore\' } }">\n            </div>\n\n            <div data-viewid="' + t(0).PaginatedState.ResetPasswordSplitter + '" data-bind="pageViewComponent: { name: \'login-reset-password-splitter-view\',\n                params: {\n                    serverData: svr },\n                event: {\n                    redirect: $loginPage.view_onRedirect } }">\n            </div>\n\n            <div data-viewid="' + t(0).PaginatedState.FetchSessionsProgress + "\" data-bind=\"pageViewComponent: { name: 'fetch-sessions-progress-view',\n                params: {\n                    serverData: svr,\n                    sessionPullType: $loginPage.sessionPullType,\n                    isInitialView: isInitialState,\n                    username: sharedData.username,\n                    displayName: sharedData.displayName,\n                    unsafe_desktopSsoDomainToUse: sharedData.unsafe_desktopSsoDomainToUse,\n                    preferredCredential: sharedData.preferredCredential,\n                    isPushNotification: sharedData.remoteNgcParams.defaultType === " + t(0).RemoteNgcType.PushNotification + ' },\n                event: {\n                    updateUserTiles: $loginPage.fetchSessions_onUpdateUserTiles,\n                    executeGctResult: $loginPage.fetchSessions_onExecuteGctResult,\n                    submitReady: $loginPage.view_onSubmitReady,\n                    redirect: $loginPage.view_onRedirect } }">\n            </div>\n\n            <div data-viewid="' + t(0).PaginatedState.Fido + '" data-showIdentityBanner="true" data-bind="pageViewComponent: { name: \'login-fido-view\',\n                params: {\n                    serverData: svr,\n                    serverError: initialError,\n                    isInitialView: isInitialState,\n                    username: sharedData.username,\n                    displayName: sharedData.displayName,\n                    allowList: sharedData.fidoParams.allowList,\n                    challenge: sharedData.flowToken,\n                    availableCreds: sharedData.availableCreds,\n                    evictedCreds: sharedData.evictedCreds,\n                    useEvictedCredentials: sharedData.useEvictedCredentials,\n                    flowToken: sharedData.flowToken,\n                    sessions: sharedData.sessions },\n                event: {\n                    updateFlowToken: $loginPage.view_onUpdateFlowToken,\n                    submitReady: $loginPage.view_onSubmitReady,\n                    redirect: $loginPage.view_onRedirect,\n                    setBackButtonState: view_onSetIdentityBackButtonState } }">\n            </div>\n\n            <div data-viewid="' + t(0).PaginatedState.CredentialPicker + '" data-bind="pageViewComponent: { name: \'login-credential-picker-view\',\n                params: {\n                    serverData: svr,\n                    serverError: initialError,\n                    isInitialView: isInitialState,\n                    username: sharedData.username,\n                    isUserKnown: !!sharedData.displayName,\n                    availableCreds: sharedData.availableCreds,\n                    evictedCreds: sharedData.evictedCreds,\n                    useEvictedCredentials: sharedData.useEvictedCredentials,\n                    flowToken: sharedData.flowToken },\n                event: {\n                    updateFlowToken: $loginPage.view_onUpdateFlowToken,\n                    redirect: $loginPage.view_onRedirect,\n                    setPendingRequest: $loginPage.view_onSetPendingRequest,\n                    registerDialog: $loginPage.view_onRegisterDialog,\n                    unregisterDialog: $loginPage.view_onUnregisterDialog,\n                    showDialog: $loginPage.view_onShowDialog } }">\n            </div>\n\n            <div data-viewid="' + t(0).PaginatedState.ConfirmSignup + '" data-bind="pageViewComponent: { name: \'login-confirm-signup-view\',\n                params: {\n                    serverData: svr,\n                    serverError: initialError,\n                    isInitialView: isInitialState,\n                    displayName: sharedData.displayName },\n                event: {\n                    redirect: $loginPage.view_onRedirect } }">\n            </div>\n\n            <div data-viewid="' + t(0).PaginatedState.ConfirmRecoverUsername + '" data-bind="pageViewComponent: { name: \'login-confirm-recover-username-view\',\n                params: {\n                    serverData: svr,\n                    serverError: initialError,\n                    isInitialView: isInitialState,\n                    displayName: sharedData.displayName },\n                event: {\n                    redirect: $loginPage.view_onRedirect } }">\n            </div>\n\n            <div data-viewid="' + t(0).PaginatedState.FedConflict + '" data-bind="pageViewComponent: { name: \'login-fed-conflict-view\',\n                params: {\n                    serverData: svr },\n                event: {\n                    redirect: $loginPage.view_onRedirect } }">\n            </div>\n\n            <div data-viewid="' + t(0).PaginatedState.ProofFedConflict + '" data-bind="pageViewComponent: { name: \'login-proof-fed-conflict-view\',\n                params: {\n                    serverData: svr },\n                event: {\n                    redirect: $loginPage.view_onRedirect } }">\n            </div>\n\n            <div data-viewid="' + t(0).PaginatedState.AadFedConflict + '" data-bind="pageViewComponent: { name: \'login-aad-fed-conflict-view\',\n                params: {\n                    serverData: svr,\n                    isInitialView: isInitialState,\n                    username: sharedData.username,\n                    displayName: sharedData.displayName },\n                event: {\n                    redirect: $loginPage.view_onRedirect } }">\n            </div>\n\n            <div data-viewid="' + t(0).PaginatedState.FedLink + '" data-showIdentityBanner="true" data-bind="pageViewComponent: { name: \'login-fed-link-view\',\n                params: {\n                    serverData: svr,\n                    isInitialView: isInitialState,\n                    username: sharedData.username,\n                    displayName: sharedData.displayName,\n                    otherIdpRedirectUrl: sharedData.otherIdpRedirectUrl,\n                    flowToken: sharedData.flowToken },\n                event: {\n                    redirect: $loginPage.view_onRedirect,\n                    setBackButtonState: view_onSetIdentityBackButtonState,\n                    setPendingRequest: $loginPage.view_onSetPendingRequest } }">\n            </div>\n\n            <div data-viewid="' + t(0).PaginatedState.TenantDisambiguation + '" data-showIdentityBanner="true" data-bind="pageViewComponent: { name: \'login-tenant-disambiguation-view\',\n                params: {\n                    serverData: svr,\n                    unsafe_username: sharedData.username,\n                    unsafe_displayName: sharedData.displayName,\n                    tenantList: sharedData.tenantList },\n                event: {\n                    setBackButtonState: view_onSetIdentityBackButtonState,\n                    submitReady: $loginPage.view_onSubmitReady } }">\n            </div>\n\n            <div data-viewid="' + t(0).PaginatedState.SignupCredentialPicker + '" data-bind="pageViewComponent: { name: \'login-credential-picker-view\',\n                params: {\n                    serverData: svr,\n                    isInitialView: isInitialState,\n                    isSignup: true,\n                    availableCreds: sharedData.availableSignupCreds },\n                event: {\n                    redirect: $loginPage.view_onRedirect } }">\n            </div>\n\n            <div data-viewid="' + t(0).PaginatedState.RecoveryCredentialPicker + '" data-bind="pageViewComponent: { name: \'login-credential-picker-view\',\n                params: {\n                    serverData: svr,\n                    isInitialView: isInitialState,\n                    availableCreds: sharedData.recoveryCredentialsData.availableRecoveryCreds },\n                event: {\n                    redirect: $loginPage.view_onRedirect } }">\n            </div>\n\n            <div data-viewid="' + t(0).PaginatedState.RemoteConnectLocation + '" data-bind="pageViewComponent: { name: \'login-remote-connect-location-view\',\n                params: {\n                    serverData: svr } }">\n            </div>\n\n            <div data-viewid="' + t(0).PaginatedState.MoreInfo + '" data-showIdentityBanner="true" data-bind="pageViewComponent: { name: \'more-info-view\',\n                params: {\n                    serverData: svr,\n                    moreInfoTitle: str[\'CT_WSI_WebSignIn_RestrictedToTapHeader\'],\n                    moreInfo: str[\'CT_WSI_WebSignIn_RestrictedToTapError\'],\n                    showErrorText: true,\n                    isInitialView: isInitialState } }">\n            </div>\n        </div>\n        \x3c!-- /ko --\x3e\n\n        <input type="hidden" name="ps" data-bind="value: postedLoginStateViewId" />\n        <input type="hidden" name="psRNGCDefaultType" data-bind="value: postedLoginStateViewRNGCDefaultType" />\n        <input type="hidden" name="psRNGCEntropy" data-bind="value: postedLoginStateViewRNGCEntropy" />\n        <input type="hidden" name="psRNGCSLK" data-bind="value: postedLoginStateViewRNGCSLK" />\n        \x3c!-- ko if: svr.ad && !svr.fSkipRenderingNewCanaryToken --\x3e\n        <input type="hidden" data-bind="attr: { name: svr.ad }, value: svr.canary" />\n        \x3c!-- /ko --\x3e\n        \x3c!-- ko if: !svr.ad || svr.fSkipRenderingNewCanaryToken --\x3e\n        <input type="hidden" name="canary" data-bind="value: svr.canary" />\n        \x3c!-- /ko --\x3e\n        <input type="hidden" name="ctx" data-bind="value: ctx" />\n        <input type="hidden" name="hpgrequestid" data-bind="value: svr.sessionId" />\n        <input type="hidden" id="i0327" data-bind="attr: { name: svr.bp }, value: flowToken" />\n        <input type="hidden" name="PPSX" data-bind="value: svr.DB" />\n        <input type="hidden" name="NewUser" value="1" />\n        <input type="hidden" name="FoundMSAs" data-bind="value: svr.Ap" />\n        <input type="hidden" name="fspost" data-bind="value: svr.fPOST_ForceSignin ? 1 : 0" />\n        <input type="hidden" name="i21" data-bind="value: wasLearnMoreShown() ? 1 : 0" />\n        <input type="hidden" name="CookieDisclosure" data-bind="value: svr.BV ? 1 : 0" />\n        <input type="hidden" name="IsFidoSupported" data-bind="value: isFidoSupported() ? 1 : 0" />\n        <input type="hidden" name="isSignupPost" data-bind="value: isSignupPost() ? 1 : 0" />\n        \x3c!-- ko ifnot: svr.fShouldSupportTargetCredentialForRecovery --\x3e\n        <input type="hidden" name="isRecoveryAttemptPost" data-bind="value: isRecoveryAttemptPost() ? 1 : 0" />\n        \x3c!-- /ko --\x3e\n        \x3c!-- ko if: svr.fShouldSupportTargetCredentialForRecovery && targetCredentialForRecovery() --\x3e\n        <input type="hidden" name="targetCredentialForRecovery" data-bind="value: targetCredentialForRecovery()" />\n        \x3c!-- /ko --\x3e\n        <div data-bind="component: { name: \'instrumentation-control\',\n            publicMethods: instrumentationMethods,\n            params: { serverData: svr } }">\n        </div>\n    </div>\n    \x3c!-- /ko --\x3e\n</form>\n\n<form data-bind="postRedirectForm: postRedirect"></form>\n\n\x3c!-- ko if: svr.aL --\x3e\n<div id="idPartnerPL" data-bind="injectIframe: { url: svr.aL }"></div>\n\x3c!-- /ko --\x3e\n\n\x3c!-- ko if: svr.Ds --\x3e\n<div id="idDFPDeviceFingerprinting" data-bind="injectDfpIframe: { url: svr.Ds }"></div>\n\x3c!-- /ko --\x3e'
}, function (e, n, t) {
    var i = t(2),
        a = t(1),
        o = window;
    i.components.register("cookie-banner-control", {
        template: t(315),
        synchronous: !o.ServerData.A || a.Helper.isStackSizeGreaterThan(o.ServerData.A)
    })
}, function (e, n, t) {
    e.exports = "\x3c!-- " + (t(8), ' --\x3e\n\n<div id="msccBanner" class="cc-banner" role="alert">\n    <div class="cc-container">\n        \x3c!-- ko component: \'accessible-image-control\' --\x3e\n        <img class="cc-icon cc-v-center" role="presentation" pngSrc="') + t(317) + '" svgSrc="' + t(318) + '" data-bind="imgSrc" />\n        <img class="cc-icon cc-v-center" role="presentation" pngSrc="' + t(319) + '" svgSrc="' + t(320) + "\" data-bind=\"imgSrc\" />\n        \x3c!-- /ko --\x3e\n\n        <span class=\"cc-v-center cc-text\" data-bind=\"\n            htmlWithBindings: html['CT_STR_CookieBanner_Text'],\n            childBindings: {\n                'msccLearnMore': {\n                    href: svr.an,\n                    ariaLabel: str['CT_STR_CookieBanner_Link_AriaLabel'],\n                    css: { 'cc-link cc-v-center float-right': true } } }\"></span>\n    </div>\n</div>"
}, function (e, n) {
    e.exports = "\x3c!-- ko if: (isHighContrastBlackTheme || hasDarkBackground || svr.fHasBackgroundColor) && !isHighContrastWhiteTheme --\x3e\n\x3c!-- ko template: { nodes: [lightImageNode], data: $parent } --\x3e\x3c!-- /ko --\x3e\n\x3c!-- /ko --\x3e\n\x3c!-- ko if: (isHighContrastWhiteTheme || (!hasDarkBackground && !svr.fHasBackgroundColor)) && !isHighContrastBlackTheme --\x3e\n\x3c!-- ko template: { nodes: [darkImageNode], data: $parent } --\x3e\x3c!-- /ko --\x3e\n\x3c!-- /ko --\x3e"
}, function (e, n, t) {
    e.exports = t.p + "content/images/info_white_e00ab59e3d80d3eb2dee43a21cf7fa0e.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/info_white_400085fad5af434e7f61e0a7e4f90e3d.svg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/info_f80c92602db0428ef47b2bb71ea236b4.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/info_4883eb1a3cbdddf5a79e28d320cfe5a9.svg"
}, function (e, n, t) {
    var i = t(2),
        a = t(0),
        o = t(1),
        r = t(4),
        s = window,
        c = o.Helper,
        d = a.KeyCode;

    function l(e) {
        var n = this,
            t = e.data,
            i = e.templateNodes;

        function a(e) {
            "Escape" !== (e = e || s.event).code && e.keyCode !== d.Escape || n.onClose()
        }
        n.data = t, n.templateNodes = i, n.onClose = r.create(), n.dispose = function () {
            c.removeEventListener(document.body, "keydown", a)
        }, n.overlay_onClick = function () {
            return !0
        }, n.primaryButton_onClick = function () {
            n.onClose()
        }, c.addEventListener(document.body, "keydown", a)
    }
    i.components.register("dialog-control", {
        viewModel: l,
        template: t(322),
        synchronous: !s.ServerData.A || o.Helper.isStackSizeGreaterThan(s.ServerData.A),
        enableExtensions: !0
    }), e.exports = l
}, function (e, n, t) {
    e.exports = "\x3c!-- " + (t(13), ' --\x3e\n\n<div class="dialog-outer" data-bind="click: overlay_onClick">\n    <div class="dialog-middle">\n        <div class="dialog-inner win-flyout">\n                <div class="dialog-content" role="dialog" data-bind="\n                    attr: { \'aria-labelledby\': data.labelledBy },\n                    ariaDescribedBy: data.describedBy">\n\n                    \x3c!-- ko template: { nodes: templateNodes, data: data } --\x3e\x3c!-- /ko --\x3e\n\n                    <div class="position-buttons">\n                        <div class="row">\n                            <div data-bind="component: { name: \'footer-buttons-field\',\n                                params: {\n                                    serverData: svr,\n                                    primaryButtonId: \'dialogCloseButton\',\n                                    primaryButtonText: str[\'CT_STR_Dialog_CloseButton\'],\n                                    focusOnPrimaryButton: true,\n                                    primaryButtonPreventTabbing: data.primaryButtonPreventTabbing || { direction: \'both\' },\n                                    removeBottomMargin: true,\n                                    isSecondaryButtonVisible: false },\n                                event: {\n                                    primaryButtonClick: primaryButton_onClick } }">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n        </div>\n    </div>\n</div>')
}, function (e, n) {
    e.exports = '<div class="col-xs-24 no-padding-left-right button-container" data-bind="\n    visible: isPrimaryButtonVisible() || isSecondaryButtonVisible(),\n    css: { \'no-margin-bottom\': removeBottomMargin },\n    externalCss: { \'button-field-container\': true }">\n\n    \x3c!-- ko if: isSecondaryButtonVisible --\x3e\n    <div data-bind="css: { \'inline-block\': true }, externalCss: { \'button-item\': true }">\n        <input type="button" id="idBtn_Back" class="win-button button-secondary" data-bind="\n            attr: { \'id\': secondaryButtonId || \'idBtn_Back\' },\n            externalCss: {\n                \'button\': true,\n                \'secondary\': true },\n            value: secondaryButtonText() || str[\'CT_HRD_STR_Splitter_Back\'],\n            ariaDescribedBy: secondaryButtonDescribedBy,\n            hasFocus: focusOnSecondaryButton,\n            click: secondaryButton_onClick,\n            enable: isSecondaryButtonEnabled" />\n    </div>\n    \x3c!-- /ko --\x3e\n\n    <div data-bind="css: { \'inline-block\': isPrimaryButtonVisible }, externalCss: { \'button-item\': true }">\n        \x3c!-- type="submit" is needed in-addition to \'type\' in primaryButtonAttributes observable to support IE8 --\x3e\n        <input type="submit" id="idSIButton9" class="win-button button_primary"\n            data-report-event="Signin_Submit" data-report-trigger="click" data-report-value="Submit"\n            data-bind="\n                attr: primaryButtonAttributes,\n                externalCss: {\n                    \'button\': true,\n                    \'primary\': true },\n                value: primaryButtonText() || str[\'CT_PWD_STR_SignIn_Button_Next\'],\n                hasFocus: focusOnPrimaryButton,\n                click: primaryButton_onClick,\n                enable: isPrimaryButtonEnabled,\n                visible: isPrimaryButtonVisible,\n                preventTabbing: primaryButtonPreventTabbing" />\n    </div>\n</div>'
}, function (e, n, t) {
    var i = t(19),
        a = window;

    function o(e, n) {
        return n && n.domainLookupStart && n.domainLookupEnd && "DNS" === e ? n.domainLookupEnd - n.domainLookupStart : n && n.connectStart && n.connectEnd && "TCP" === e ? n.connectEnd - n.connectStart : null
    }

    function r(e) {
        return e.duration > 0 ? e.duration < 50 : null
    }

    function s(e) {
        return "subdocument" === e
    }

    function c(e) {
        return "resource" === e
    }

    function d(e) {
        return "document" === e
    }

    function l(e) {
        return "document" === e ? document.location.hostname : function (e) {
            if (new RegExp("^(?:[a-z]+:)?//", "i").test(e)) return !0;
            return !1
        }(e) ? function (e) {
            if (e) {
                var n = document.createElement("a");
                return n.href = e, n.hostname
            }
            return ""
        }(e) : document.location.hostname
    }

    function u(e) {
        var n = {},
            t = function (e, n) {
                if (!e || !n) return null;
                if (n < e) return 0;
                return n - e
            }(function (e) {
                var n = e.responseStart;
                e && (n = e.responseStart);
                if (!n) {
                    var t = function (e) {
                        if (e && e.fetchStart > 0 && e.fetchStart < Number.MAX_VALUE) return e.fetchStart;
                        return null
                    }(e);
                    if (t > 0) return t
                }
                return n
            }(e), e.responseEnd),
            i = e.transferSize;
        return !0 !== r(e) && (i > 0 && t > 0 ? (n.TransferSize = i, n.TransferTime = t) : (n.TransferSize = null, n.TransferTime = null)), n
    }
    n.SendTelemetryPerfData = function (e, n) {
        var t = i.getInstance(a.ServerData),
            p = {},
            f = {};
        if (t && (f = t.get("pltMetrics") || {}), p.apiTimingInfo = f.apiTimingInfo || [], p.isPlt1 = function (e) {
                var n = null;
                if (!e) return null;
                for (var t = 0; t < e.length; t++) {
                    var i = e[t];
                    if (c(i.entryType) && !s(i.initiatorType) && !d(i.name)) {
                        var a = r(i);
                        if (!0 === a) n = !0;
                        else if (!1 === a) {
                            n = !1;
                            break
                        }
                    }
                }
                return n
            }(e.entries), p.plt = function (e) {
                if (!e) return 0;
                var n = e.customLoadEventEnd,
                    t = !0;
                (!n || e.loadEventEnd && n < e.loadEventEnd) && (n = e.loadEventEnd);
                return function (e, n, t) {
                    if (e && n > 0) {
                        var i = function (e, n) {
                            if (e.fetchStart > 0 && n && e.fetchStart < Number.MAX_VALUE) return e.fetchStart;
                            if (e.navigationStart > 0) return e.navigationStart;
                            return null
                        }(e, t);
                        if (i && n >= i) return n - i
                    }
                    return 0
                }(e, n, t)
            }(e.timing), p.timing = e.timing, p.pltOverallTransferBucket = function (e) {
                if (!e || 0 === e.length) return null;
                return function (e) {
                    if (!e) return null;
                    var n = 12.5,
                        t = n,
                        i = 0;
                    for (; e >= n && i < 20;) {
                        i++;
                        var a = n;
                        n += t, t = a
                    }
                    return i
                }(function (e) {
                    var n = 0,
                        t = 0,
                        i = function (e) {
                            var n = {},
                                t = [];
                            if (!e) return t;
                            for (var i = 0; i < e.length; i++) {
                                var a = l(e[i].name) || "";
                                n[a] || "" === a || (n[a] = u(e[i]))
                            }
                            for (var o in n) n.hasOwnProperty(o) && t.push(n[o]);
                            return t
                        }(e);
                    if (i.length > 0)
                        for (var a = 0; a < i.length; a++) i[a].TransferSize > 0 && i[a].TransferTime > 0 && (n += i[a].TransferSize, t += i[a].TransferTime);
                    if (t > 0) return function (e, n) {
                        if (e > 0 && n > 0) {
                            return 1e3 * (e / n) / 1024
                        }
                        return null
                    }(n, t);
                    return null
                }(e))
            }(e.entries), p.dns = o("DNS", e.timing), p.tcp = o("TCP", e.timing), p.pageSource = n, !t) throw "PltMetrics failed to post";
        t.set("pltMetrics", p)
    }
}, function (e, n) {
    e.exports = '\n<input type="hidden" name="i19" data-bind="value: timeOnPage" />'
}, function (e, n, t) {
    e.exports = "\x3c!-- " + (t(8), ' --\x3e\n\n\x3c!-- ko if: bannerLogoUrl --\x3e\n<img id="bannerLogo" role="presentation" data-bind="attr: { src: bannerLogoUrl }, externalCss: { \'banner-logo\': true }" />\n\x3c!-- /ko --\x3e\n\n\x3c!-- ko if: !bannerLogoUrl && !isChinaDc --\x3e\n    \x3c!-- ko component: \'accessible-image-control\' --\x3e\n    <img class="logo" role="img" pngSrc="') + t(327) + '" svgSrc="' + t(328) + '" data-bind="imgSrc, attr: { alt: str[\'MOBILE_STR_Footer_Microsoft\'] }" />\n    <img class="logo" role="img" pngSrc="' + t(329) + '" svgSrc="' + t(330) + '" data-bind="imgSrc, attr: { alt: str[\'MOBILE_STR_Footer_Microsoft\'] }" />\n    \x3c!-- /ko --\x3e\n\x3c!-- /ko --\x3e'
}, function (e, n, t) {
    e.exports = t.p + "content/images/microsoft_logo_white_a2203a52ce0843427c69786e18841437.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/microsoft_logo_white_595e9206d4274c42c27b66e371fa633d.svg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/microsoft_logo_ed9c9eb0dce17d752bedea6b5acda6d9.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/microsoft_logo_ee5c8d9fb6248c938fd0dc19370e90bd.svg"
}, function (e, n, t) {
    e.exports = "\x3c!-- " + (t(8), ' --\x3e\n\n\x3c!-- ko if: svr.cI --\x3e\n    <div class="subline inc"></div>\n    <div class="subline dec"></div>\n\x3c!-- /ko --\x3e\n\x3c!-- ko ifnot: svr.cI --\x3e\n    \x3c!-- ko if: useCssAnimation --\x3e\n    <div></div><div></div><div></div><div></div><div></div>\n    \x3c!-- /ko --\x3e\n    \x3c!-- ko ifnot: useCssAnimation --\x3e\n        \x3c!-- ko component: \'accessible-image-control\' --\x3e\n        <img role="presentation" src="') + t(332) + '" />\n        <img role="presentation" src="' + t(333) + '" />\n        \x3c!-- /ko --\x3e\n    \x3c!-- /ko --\x3e\n\x3c!-- /ko --\x3e'
}, function (e, n, t) {
    e.exports = t.p + "content/images/marching_ants_white_166de53471265253ab3a456defe6da23.gif"
}, function (e, n, t) {
    e.exports = t.p + "content/images/marching_ants_b540a8e518037192e32c4fe58bf2dbab.gif"
}, function (e, n, t) {
    var i = {
        "./AppCentipede_Beam.png": 335,
        "./AppCentipede_Beam.svg": 336,
        "./AppCentipede_Beam_white.png": 337,
        "./AppCentipede_Beam_white.svg": 338,
        "./AppCentipede_Bing.png": 339,
        "./AppCentipede_Bing.svg": 340,
        "./AppCentipede_Bing_white.png": 341,
        "./AppCentipede_Bing_white.svg": 342,
        "./AppCentipede_Cortana.png": 343,
        "./AppCentipede_Cortana.svg": 344,
        "./AppCentipede_Cortana_white.png": 345,
        "./AppCentipede_Cortana_white.svg": 346,
        "./AppCentipede_Excel.png": 347,
        "./AppCentipede_Excel.svg": 348,
        "./AppCentipede_Excel_white.png": 349,
        "./AppCentipede_Excel_white.svg": 350,
        "./AppCentipede_Health.png": 351,
        "./AppCentipede_Health.svg": 352,
        "./AppCentipede_Health_white.png": 353,
        "./AppCentipede_Health_white.svg": 354,
        "./AppCentipede_MSN.png": 355,
        "./AppCentipede_MSN.svg": 356,
        "./AppCentipede_MSN_white.png": 357,
        "./AppCentipede_MSN_white.svg": 358,
        "./AppCentipede_Microsoft.png": 359,
        "./AppCentipede_Microsoft.svg": 360,
        "./AppCentipede_Microsoft_white.png": 361,
        "./AppCentipede_Microsoft_white.svg": 362,
        "./AppCentipede_MileIQ.png": 363,
        "./AppCentipede_MileIQ.svg": 364,
        "./AppCentipede_MileIQ_white.png": 365,
        "./AppCentipede_MileIQ_white.svg": 366,
        "./AppCentipede_Minecraft.png": 367,
        "./AppCentipede_Minecraft.svg": 368,
        "./AppCentipede_Minecraft_white.png": 369,
        "./AppCentipede_Minecraft_white.svg": 370,
        "./AppCentipede_Office.png": 371,
        "./AppCentipede_Office.svg": 372,
        "./AppCentipede_Office_white.png": 373,
        "./AppCentipede_Office_white.svg": 374,
        "./AppCentipede_OneDrive.svg": 375,
        "./AppCentipede_OneDrive_white.svg": 376,
        "./AppCentipede_Onedrive.png": 377,
        "./AppCentipede_Onedrive_white.png": 378,
        "./AppCentipede_Outlook.png": 379,
        "./AppCentipede_Outlook.svg": 380,
        "./AppCentipede_Outlook_white.png": 381,
        "./AppCentipede_Outlook_white.svg": 382,
        "./AppCentipede_PowerPoint.png": 383,
        "./AppCentipede_PowerPoint.svg": 384,
        "./AppCentipede_PowerPoint_white.png": 385,
        "./AppCentipede_PowerPoint_white.svg": 386,
        "./AppCentipede_Skype.png": 387,
        "./AppCentipede_Skype.svg": 388,
        "./AppCentipede_SkypeDialer.png": 389,
        "./AppCentipede_SkypeDialer.svg": 390,
        "./AppCentipede_SkypeDialer_white.png": 391,
        "./AppCentipede_SkypeDialer_white.svg": 392,
        "./AppCentipede_Skype_white.png": 393,
        "./AppCentipede_Skype_white.svg": 394,
        "./AppCentipede_Word.png": 395,
        "./AppCentipede_Word.svg": 396,
        "./AppCentipede_Word_white.png": 397,
        "./AppCentipede_Word_white.svg": 398,
        "./AppCentipede_Xbox.png": 399,
        "./AppCentipede_Xbox.svg": 400,
        "./AppCentipede_Xbox_white.png": 401,
        "./AppCentipede_Xbox_white.svg": 402
    };

    function a(e) {
        var n = o(e);
        return t(n)
    }

    function o(e) {
        if (!t.o(i, e)) {
            var n = new Error("Cannot find module '" + e + "'");
            throw n.code = "MODULE_NOT_FOUND", n
        }
        return i[e]
    }
    a.keys = function () {
        return Object.keys(i)
    }, a.resolve = o, e.exports = a, a.id = 334
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_beam_897b992bc21661b1bb85563f9067daff.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_beam_919493bbf8a26e37ef09581a2d6c669e.svg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_beam_white_822e15e3cdacd76bd8c6715b11edd6ab.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_beam_white_4c19d9bdaa062a6d16dfa3ddf1a05cf6.svg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_bing_01509890278f938ba6070b34bd674e97.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_bing_9a24fa411a5f181b8e66a0fe6abfa325.svg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_bing_white_84563b48358d261f9e365ea347fa5fc7.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_bing_white_7876fa06353db7b26af550293e8fa831.svg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_cortana_60bc94b988f085b46cfa1946c9f13deb.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_cortana_288e96d92e1010de6612fb2594b3e29d.svg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_cortana_white_f9360a48d6fbcf39bcbe23f94239d6d6.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_cortana_white_f5f405824a0e680d7801300975082f93.svg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_excel_16121459dd2076b8e91df7db6ca028a8.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_excel_8101a2b4643129a8a7507145bd743390.svg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_excel_white_390010e0c6066f82d7981a320b12c99c.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_excel_white_a93b4b7c3ad9b0c3b94a4c4130ddcf69.svg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_health_5edbe76ae3b8ad56d0e898ad30f98e13.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_health_c4b0c6a5ad3fe1eb7efebcc8490e7c76.svg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_health_white_8c18837eed8b70be0652f5464c63baa8.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_health_white_7464188e4ed2feccc71ec58187448712.svg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_msn_f4bce5062c4ec41d46665befc63f6db6.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_msn_6e63d37ede80f5ce1dc037980261bbb5.svg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_msn_white_79471f10179f1b0a12b774891add64c0.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_msn_white_6a426568805318e8a39d73e79ec9aea0.svg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_microsoft_2278f8442c770adab4e50d19a0d3b16f.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_microsoft_aed5eb9ccea43f119a25b3b74c59c7e7.svg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_microsoft_white_80fc460cfdfe07ed50208a6bb166b2d8.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_microsoft_white_b9f4589659563b0e18c8346229c06fc5.svg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_mileiq_415637b21bafbcd5ea3663ff65d61b06.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_mileiq_625e6e87eb5969f9afcaefed1dec05bc.svg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_mileiq_white_5813dfac6d4e378019320f5fe311ff74.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_mileiq_white_481b25eba75580aaf5f80cacdf3620a9.svg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_minecraft_56b9d60cbc29b3158c7f3a0f3e39feb8.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_minecraft_f626dec90a3d3c9111b03ccf5f833688.svg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_minecraft_white_36eb004e990195a2d2e6fb3ed668a829.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_minecraft_white_3de6cedead3af55e8a4dd56cbaa2d53c.svg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_office_ecf4fcc984a3f68b55ef1474c58df705.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_office_0c0427c2da7db70a7e64f64a2923cbef.svg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_office_white_0e4b310757601ca965a52a16e282d9cd.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_office_white_a738a0c0216680c36de4445b918f4476.svg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_onedrive_13608923a0e316d264c0df5705875ac4.svg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_onedrive_white_04be02cd92223e76076db4e8c2b03fdc.svg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_onedrive_fc3aa12c812dc7b04f498eae71f33ea2.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_onedrive_white_cb16239838d9c1d0b8791ed37547e204.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_outlook_4af186a12cecea5a41dc4db81d3f5df5.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_outlook_64589f528a7a7802290b5e64727a43a5.svg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_outlook_white_2e74e3e6ff729cb1afb05a0ad70b5190.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_outlook_white_e06aa723e4775d33c168d0279d3190f3.svg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_powerpoint_6ff4dbdb1b8025edd88c74a3b91646b8.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_powerpoint_b682753de8344e19fd81ba14a9b15cd1.svg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_powerpoint_white_ad9010ae9f73d672b05dc0da3a52651a.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_powerpoint_white_228ee2d3e9222ab696ac793ce4d57ecd.svg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_skype_d377f9ccd35a4470ccabea4b24688819.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_skype_e84d948df1aa1f8dd0bf9404623ce490.svg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_skypedialer_aa161df2f39b5fbbd2483e6154952d85.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_skypedialer_09ad5cae937bb9160e367ae0c66c599c.svg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_skypedialer_white_78db1ad460c13f6cea9751b7d194000b.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_skypedialer_white_95bcadd7a1eb1471340fca5a785c35b2.svg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_skype_white_18064fc3bb9681cd2c6fcbd15ddb92f2.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_skype_white_20959b2d887dc005fc6e69d6bd72f4c8.svg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_word_2ed0b6c1934ddda271225cde00593605.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_word_2f6c9ed1251de316cebf0c172c51cf85.svg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_word_white_b5f8bc8af54c4ab4cddfa39bca9653ae.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_word_white_329f37b9a36eec17dd2429191689f112.svg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_xbox_1d4968015d72dcbecb1843c8ca89cb47.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_xbox_a3d54c28e8a88393c33c27972c1d97d5.svg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_xbox_white_6b92c1741d4d58ef89705046e5dda711.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/appcentipede/appcentipede_xbox_white_67d09ff8fa2d43a50b165ce32a5ff58c.svg"
}, function (e, n, t) {
    e.exports = "\x3c!-- " + (t(404), " --\x3e\n\n\x3c!-- ko ifnot: useLayoutTemplates --\x3e\n    \x3c!-- ko template: { nodes: $componentTemplateNodes, data: $parent } --\x3e\x3c!-- /ko --\x3e\n\x3c!-- /ko --\x3e\n\n\x3c!-- ko if: useLayoutTemplates --\x3e\n    \x3c!-- ko withProperties: { '$page': $parent } --\x3e\n        \x3c!-- ko if: isLightboxTemplate() --\x3e\n        <div id=\"lightboxTemplateContainer\" data-bind=\"component: { name: 'lightbox-template', params: { serverData: svr, showHeader: $page.showHeader(), headerLogo: $page.headerLogo() } }, css: { 'provide-min-height': svr.cl }\">\n        </div>\n        \x3c!-- /ko --\x3e\n\n        \x3c!-- ko if: isVerticalSplitTemplate() && isTemplateLoaded() --\x3e\n        <div id=\"verticalSplitTemplateContainer\" data-bind=\"component: { name: 'vertical-split-template', params: { serverData: svr, showHeader: $page.showHeader(), headerLogo: $page.headerLogo() } }, css: { 'provide-min-height': svr.cl }\">\n        </div>\n        \x3c!-- /ko --\x3e\n    \x3c!-- /ko --\x3e\n\x3c!-- /ko --\x3e")
}, function (e, n, t) {
    var i = t(2),
        a = t(1),
        o = window;

    function r(e) {
        var n = e.serverData,
            t = e.showHeader,
            i = e.headerLogo,
            a = n.AY;
        this.showHeader = t && !a, this.headerLogo = i
    }
    i.components.register("lightbox-template", {
        viewModel: r,
        template: t(405),
        synchronous: !o.ServerData.A || a.Helper.isStackSizeGreaterThan(o.ServerData.A),
        enableExtensions: !0
    }), e.exports = r
}, function (e, n, t) {
    e.exports = "\x3c!-- " + (t(49), t(50), t(51), t(24), ' --\x3e\n\n<div id="lightboxBackgroundContainer" data-bind="css: { \'provide-min-height\': svr.cl },\n    component: { name: \'background-image-control\',\n        publicMethods: $page.backgroundControlMethods,\n        event: { load: $page.backgroundImageControl_onLoad } }">\n</div>\n\n\x3c!-- ko if: svr.cq --\x3e\n<div class="env-banner" data-bind="component: { name: \'environment-banner-control\' }"></div>\n\x3c!-- /ko --\x3e\n\n\x3c!-- ko withProperties: { \'$masterPageContext\': $parentContext } --\x3e\n<div class="outer" data-bind="css: { \'app\': $page.backgroundLogoUrl }">\n    \x3c!-- ko if: showHeader --\x3e\n    <div class="template-section">\n        <div class="template-header-container">\n            <div id="header" data-bind="externalCss: { \'header\': true }">\n                <img id="headerLogo" role="img" data-bind="\n                    attr: {\n                        src: headerLogo,\n                        alt: str[\'STR_Templates_Header_Logo_AltText\'] },\n                    externalCss: { \'header-logo\': true }" />\n            </div>\n        </div>\n    </div>\n    \x3c!-- /ko --\x3e\n\n    <div class="template-section main-section">\n        <div data-bind="externalCss: { \'middle\': true }">\n            <div class="full-height" data-bind="component: { name: \'content-control\', params: { serverData: svr, isVerticalSplitTemplate: $page.isVerticalSplitTemplate() } }"></div>\n        </div>\n    </div>\n\n    \x3c!-- ko if: $page.paginationControlHelper.showFooterControl --\x3e\n    <div id="footer" role="contentinfo" data-bind="\n        externalCss: {\n            \'footer\': true,\n            \'has-background\': !$page.useDefaultBackground() && $page.showFooter(),\n            \'background-always-visible\': $page.backgroundLogoUrl }">\n\n        <div data-bind="component: { name: \'footer-control\',\n            publicMethods: $page.footerMethods,\n            params: {\n                serverData: svr,\n                useDefaultBackground: $page.useDefaultBackground(),\n                hasDarkBackground: $page.backgroundLogoUrl(),\n                showLinks: true,\n                showFooter: $page.showFooter(),\n                hideTOU: $page.hideTOU(),\n                termsText: $page.termsText(),\n                termsLink: $page.termsLink(),\n                hidePrivacy: $page.hidePrivacy(),\n                privacyText: $page.privacyText(),\n                privacyLink: $page.privacyLink() },\n            event: {\n                agreementClick: $page.footer_agreementClick,\n                showDebugDetails: $page.toggleDebugDetails_onClick } }">\n        </div>\n    </div>\n    \x3c!-- /ko --\x3e\n</div>\n\x3c!-- /ko --\x3e')
}, function (e, n) {
    e.exports = '<div class="background-image-holder" role="presentation" data-bind="css: { app: isAppBranding }, style: { background: backgroundStyle }">\n    \x3c!-- ko if: smallImageUrl --\x3e\n    <div class="background-image-small" data-bind="backgroundImage: smallImageUrl()"></div>\n    \x3c!-- /ko --\x3e\n\n    \x3c!-- ko if: backgroundImageUrl --\x3e\n    <div id="backgroundImage" data-bind="backgroundImage: backgroundImageUrl(), externalCss: { \'background-image\': true }"></div>\n        \x3c!-- ko if: useImageMask --\x3e\n        <div data-bind="externalCss: { \'background-overlay\': true }"></div>\n        \x3c!-- /ko --\x3e\n    \x3c!-- /ko --\x3e\n</div>'
}, function (e, n) {
    e.exports = "<div class=\"env-banner-inner\" role=\"alert\" aria-atomic=\"true\" data-bind=\"\n    htmlWithBindings: html['CT_STR_EnvironmentBanner_Text'],\n    childBindings: {\n        'envBannerNoLink': {\n            css: { 'env-banner-text': true }\n        },\n        'envBannerLink': {\n            href: svr.urlEnvBannerLink,\n            css: { 'env-banner-link': true }\n        } }\">\n</div>"
}, function (e, n, t) {
    e.exports = "\x3c!-- " + (t(409), t(26), t(8), ' --\x3e\n\n\x3c!-- ko withProperties: { \'$content\': $data } --\x3e\n<div class= "flex-column">\n    \x3c!-- ko if: $page.paginationControlHelper.showBackgroundLogoHolder --\x3e\n    <div class="background-logo-holder">\n        <img class="background-logo" role="presentation" data-bind="attr: { src: $page.backgroundLogoUrl }" />\n    </div>\n    \x3c!-- /ko --\x3e\n\n    \x3c!-- ko if: $page.paginationControlHelper.showPageLevelTitleControl --\x3e\n    <div data-bind="component: \'page-level-title-control\'"></div>\n    \x3c!-- /ko --\x3e\n\n    <div class="win-scroll">\n        <div id="lightbox" data-bind="\n            animationEnd: $page.paginationControlHelper.animationEnd,\n            externalCss: { \'sign-in-box\': true },\n            css: {\n                \'inner\':  $content.isVerticalSplitTemplate,\n                \'vertical-split-content\': $content.isVerticalSplitTemplate,\n                \'app\': $page.backgroundLogoUrl,\n                \'wide\': $page.paginationControlHelper.useWiderWidth,\n                \'fade-in-lightbox\': $page.fadeInLightBox,\n                \'has-popup\': $page.showFedCredAndNewSession && ($page.showFedCredButtons() || $page.newSession()),\n                \'transparent-lightbox\': $page.backgroundControlMethods() && $page.backgroundControlMethods().useTransparentLightBox,\n                \'lightbox-bottom-margin-debug\': $page.showDebugDetails }">\n\n            \x3c!-- ko template: { nodes: $masterPageContext.$componentTemplateNodes, data: $page } --\x3e\x3c!-- /ko --\x3e\n        </div>\n\n        \x3c!-- ko if: $page.showFedCredAndNewSession --\x3e\n        \x3c!-- ko if: $page.showFedCredButtons --\x3e\n        <div data-bind="css: { \'app\': $page.backgroundLogoUrl }, externalCss: { \'promoted-fed-cred-box\': true }">\n            <div class="promoted-fed-cred-content" data-bind="css: {\n                \'animate\': $page.useCssAnimations && $page.animate(),\n                \'slide-out-next\': $page.animate.isSlideOutNext,\n                \'slide-in-next\': $page.animate.isSlideInNext,\n                \'slide-out-back\': $page.animate.isSlideOutBack,\n                \'slide-in-back\': $page.animate.isSlideInBack,\n                \'app\': $page.backgroundLogoUrl }">\n\n                \x3c!-- ko foreach: $page.otherSigninOptions --\x3e\n                <div class="row tile">\n                    <div class="table" role="button" tabindex="0" data-bind="\n                        css: { \'list-item\': svr.cI },\n                        pressEnter: $page.otherSigninOptionsButton_onClick,\n                        click: $page.otherSigninOptionsButton_onClick,\n                        ariaLabel: $data.text">\n\n                        <div class="table-row">\n                            <div class="table-cell tile-img medium">\n                                \x3c!-- ko component: \'accessible-image-control\' --\x3e\n                                <img class="tile-img medium" role="presentation"\n                                    data-bind="attr: { src: $data.lightIconUrl }" />\n                                <img class="tile-img medium" role="presentation"\n                                    data-bind="attr: { src: $data.darkIconUrl }" />\n                                \x3c!-- /ko --\x3e\n                            </div>\n                            <div class="table-cell text-left" data-bind="css: { \'content\': !svr.cI }">\n                                <div data-bind="\n                                    text: $data.text,\n                                    attr: { \'data-test-id\': $data.testId }"></div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                \x3c!-- /ko --\x3e\n            </div>\n        </div>\n        \x3c!-- /ko --\x3e\n\n        \x3c!-- ko if: $page.newSession --\x3e\n        <div class="new-session-popup-v2sso" role="alert" data-bind="css: { \'app\': $page.backgroundLogoUrl }">\n            <div class="form-group" id="NewSessionTitle" data-bind="text: str[\'TILE_STR_AsyncTileText_Title\']"></div>\n\n            <div class="row tile">\n                <div class="table" id="newSessionLink" data-bind="\n                    css: { \'list-item\': svr.cI },\n                    click: $page.newSession_onClick,\n                    ariaDescribedBy: \'NewSessionTitle\'" tabindex="0">\n                    <div class="table-row">\n                        <div class="table-cell tile-img">\n                            <img class="tile-img" role="presentation" pngSrc="') + t(33) + '"\n                                svgSrc="' + t(34) + '" data-bind="imgSrc" />\n                        </div>\n                        <div class="table-cell text-left" data-bind="css: { \'content\': !svr.cI }">\n                            <div data-bind="text: $page.newSessionInfo().unsafe_newSessionFullName"></div>\n\n                            \x3c!-- ko if: $page.newSessionInfo().unsafe_newSessionDisplayName --\x3e\n                            <div><small data-bind="text: $page.newSessionInfo().unsafe_newSessionDisplayName"></small></div>\n                            \x3c!-- /ko --\x3e\n\n                            <div><small data-bind="text: str[\'TILE_STR_Active\']"></small></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        \x3c!-- /ko --\x3e\n        \x3c!-- /ko --\x3e\n\n        \x3c!-- ko if: $page.showDebugDetails --\x3e\n        <div data-bind="component: { name: \'debug-details-control\',\n            publicMethods: $page.debugDetailsMethods,\n            params: {\n                serverData: svr,\n                debugDetails: $page.debugDetails,\n                useWiderWidth: $page.paginationControlHelper.useWiderWidth,\n                isDebugTracingEnabled: $page.isDebugTracingEnabled },\n            event: {\n                closeBanner: $page.closeDebugDetails_onClick,\n                setDebugTracing: $page.setDebugTracing_onClick } }">\n\n            \x3c!-- ko if: $page.showConditionalAccessDebugDetails --\x3e\n            <div data-bind="\n                htmlWithBindings: html[\'CT_STR_AppName\'],\n                childBindings: {\n                    \'caAppName\': { css: {\'bold\': true} } }">\n            </div>\n\n            <div data-bind="\n                htmlWithBindings: html[\'CT_STR_AppId\'],\n                childBindings: {\n                    \'caAppId\': { css: {\'bold\': true} } }">\n            </div>\n\n            <div data-bind="\n                htmlWithBindings: html[\'CT_STR_IpAddress\'],\n                childBindings: {\n                    \'caIpAddress\': { css: {\'bold\': true} } }">\n            </div>\n\n            \x3c!-- ko if: svr.sIpAddressFromApp --\x3e\n            <div data-bind="\n                htmlWithBindings: html[\'CT_STR_IpAddressFromApp\'],\n                childBindings: {\n                    \'caIpAddressFromApp\': { css: {\'bold\': true} } }">\n            </div>\n            \x3c!-- /ko --\x3e\n\n            <div data-bind="\n                htmlWithBindings: html[\'CT_STR_DeviceId\'],\n                childBindings: {\n                    \'caDeviceId\': { css: {\'bold\': true} } }">\n            </div>\n\n            <div data-bind="\n                htmlWithBindings: html[\'CT_STR_DevicePlatform\'],\n                childBindings: {\n                    \'caDevicePlatform\': { css: {\'bold\': true} } }">\n            </div>\n\n            <div data-bind="\n                htmlWithBindings: html[\'CT_STR_DeviceState\'],\n                childBindings: {\n                    \'caDeviceState\': { css: {\'bold\': true} } }">\n            </div>\n            \x3c!-- /ko --\x3e\n\n            \x3c!-- ko if: $page.paginationControlHelper.showErrorPageDebugDetails --\x3e\n            \x3c!-- ko if: svr.bu --\x3e\n            <div>\n                <span class="bold">App name: </span>\n                <span data-bind="text: svr.bu"></span>\n            </div>\n            \x3c!-- /ko --\x3e\n            \x3c!-- ko if: svr.De --\x3e\n            <div>\n                <span class="bold">Device platform: </span>\n                <span data-bind="text: svr.De"></span>\n            </div>\n            \x3c!-- /ko --\x3e\n            \x3c!-- ko if: svr.DE --\x3e\n            <div>\n                <span class="bold">Device state: </span>\n                <span data-bind="text: svr.DE"></span>\n            </div>\n            \x3c!-- /ko --\x3e\n            \x3c!-- ko if: svr.Dd --\x3e\n            <div>\n                <span class="bold">IP address: </span>\n                <span data-bind="text: svr.Dd"></span>\n            </div>\n            \x3c!-- /ko --\x3e\n            \x3c!-- ko if: svr.DD --\x3e\n            <div>\n                <span class="bold">Signed in as: </span>\n                <span data-bind="text: svr.DD"></span>\n            </div>\n            \x3c!-- /ko --\x3e\n            \x3c!-- /ko --\x3e\n\n        </div>\n        \x3c!-- /ko --\x3e\n    </div>\n</div>\n\x3c!-- /ko --\x3e'
}, function (e, n, t) {
    var i = t(2),
        a = t(1),
        o = window;
    i.components.register("page-level-title-control", {
        template: t(410),
        synchronous: !o.ServerData.A || a.Helper.isStackSizeGreaterThan(o.ServerData.A)
    })
}, function (e, n) {
    e.exports = '<div class="win-content-header">\n    <div class="win-body-header">\n        <h1 data-bind="text: str[\'CT_STR_Page_Title\']"></h1>\n    </div>\n    <div class="win-body-sub-header" data-bind="text: str[\'CT_STR_Page_SubTitle\']"></div>\n</div>'
}, function (e, n) {
    n.applyExtensions = function (e) {
        e.bindingHandlers.copySource = {
            init: function (n, t, i, a, o) {
                var r = e.unwrap(t()),
                    s = document.getElementById(r);
                s || ((s = document.createElement("textarea")).id = r, document.body.appendChild(s), e.bindingHandlers.moveOffScreen.update(s, (function () {
                    return !0
                }))), e.bindingEvent.subscribe(n, "descendantsComplete", (function () {
                    s.value = n.innerText
                }));
                var c = e.bindingEvent.startPossiblyAsyncContentBinding(n, o);
                return e.applyBindingsToDescendants(c, n), {
                    controlsDescendantBindings: !0
                }
            }
        }, e.bindingHandlers.clickToCopy = {
            init: function (n, t, i, a, o) {
                var r = e.unwrap(t()),
                    s = r.textareaId,
                    c = r.showNotification;
                e.bindingHandlers.click.init(n, (function () {
                    return function () {
                        ! function (e, n, t) {
                            var i = document.getElementById(e);
                            if (!i) return;
                            i.select(), document.execCommand("copy"), t.focus(),
                                function (e) {
                                    e() && e(!1);
                                    setTimeout((function () {
                                        e(!0)
                                    }), 0)
                                }(n)
                        }(s, c, n)
                    }
                }), i, a, o)
            }
        }
    }
}, function (e, n, t) {
    e.exports = "\x3c!-- " + (t(15), t(8), ' --\x3e\n\n\x3c!-- ko if: showBanner --\x3e\n<div id="debugDetailsBanner" class="debug-details-banner table" data-bind="css: { \'wide\': useWiderWidth }">\n    <div class="table-row">\n        <div class="table-cell">\n            \x3c!-- ko if: svr.C8 --\x3e\n            <div class="debug-details-header">\n                <div id="debugDetailsHeader" class="bold debug-details-heading-text" role="heading" aria-level="2" data-bind="text: str[\'STR_Error_Details_Title\']"></div>\n                <div data-bind="text: str[\'STR_Error_Details_Instruction\']"></div>\n                <a id="idCopyToClipboard" href="#" role="button" data-bind="\n                    clickToCopy: { textareaId: \'debugDetailsText\', showNotification: showDebugDetailsCopyMessage },\n                    text: str[\'STR_Error_Details_CopyLink\'],\n                    ariaDescribedBy: \'debugDetailsHeader\',\n                    ariaLabel: str[\'STR_Error_Details_CopyLink\'],\n                    hasFocus: isFocusActivated"></a>\n                <span id="debugDetailsCopyMessage" class="debug-details-notification fade-in-lightbox" aria-live="assertive" data-bind="visible: showDebugDetailsCopyMessage">\n\n                    \x3c!-- ko component: \'accessible-image-control\' --\x3e\n                    <img role="presentation" pngSrc="') + t(413) + '" svgSrc="' + t(414) + '" data-bind="imgSrc" />\n                    <img role="presentation" pngSrc="' + t(415) + '" svgSrc="' + t(416) + '" data-bind="imgSrc" />\n                    \x3c!-- /ko --\x3e\n\n                    <span role="alert" data-bind="\n                        text: showDebugDetailsCopyMessage() ? str[\'STR_Error_Details_Notification\'] : null,\n                        ariaLabel: str[\'STR_Error_Details_Notification_ScreenReader\']"></span>\n                </span>\n            </div>\n            \x3c!-- /ko --\x3e\n\n            <div class="override-ltr" data-bind="copySource: \'debugDetailsText\'">\n                \x3c!-- ko if: debugDetails.errorCode --\x3e\n                <div>\n                    <span class="bold">Error Code: </span>\n                    <span data-bind="text: debugDetails.errorCode"></span>\n                </div>\n                \x3c!-- /ko --\x3e\n                \x3c!-- ko if: svr.sessionId --\x3e\n                <div>\n                    <span class="bold">Request Id: </span>\n                    <span data-bind="text: svr.sessionId"></span>\n                </div>\n                \x3c!-- /ko --\x3e\n                <div>\n                    <span class="bold">Correlation Id: </span>\n                    <span data-bind="text: svr.correlationId"></span>\n                </div>\n                <div>\n                    <span class="bold">Timestamp: </span>\n                    <span data-bind="text: debugDetails.timestamp"></span>\n                </div>\n                \x3c!-- ko if: svr.ai --\x3e\n                <div>\n                    <span class="bold">Message: </span>\n                    <span data-bind="text: unsafe_exceptionMessage"></span>\n                </div>\n                \x3c!-- /ko --\x3e\n\n                \x3c!-- ko template: { nodes: $componentTemplateNodes, data: $data } --\x3e\x3c!-- /ko --\x3e\n            </div>\n\n            \x3c!-- ko if: svr.urlSetDebugMode --\x3e\n            <div class="debug-trace-section">\n                <div>\n                    <span class="bold" data-bind="text: str[\'STR_Error_Details_Debug_Mode\']"></span>\n                    <a id="setDebugMode" role="button" data-bind="\n                        href: svr.urlSetDebugMode,\n                        text: isDebugTracingEnabled() ? str[\'STR_Error_Details_Debug_Mode_Disable\'] : str[\'STR_Error_Details_Debug_Mode_Enable\'],\n                        ariaLabel: isDebugTracingEnabled() ? str[\'STR_Error_Details_Debug_Mode_Disable_AriaLabel\'] : str[\'STR_Error_Details_Debug_Mode_Enable_AriaLabel\'],\n                        click: setDebugMode_onClick,\n                        hasFocus: isFocusActivated() && !svr.C8"></a>\n                </div>\n                \x3c!-- ko if: sending --\x3e\n                <div class="progress-container-tile">\n                    <div class="progress" role="progressbar" data-bind="component: \'marching-ants-control\', ariaLabel: str[\'WF_STR_ProgressText\']"></div>\n                </div>\n                \x3c!-- /ko --\x3e\n                \x3c!-- ko if: debugModeError --\x3e\n                <div role="alert" data-bind="text: debugModeError, externalCss: { \'error\': true }"></div>\n                \x3c!-- /ko --\x3e\n                <div data-bind="text: str[\'STR_Error_Details_Debug_Mode_Desc\']"></div>\n            </div>\n            \x3c!-- /ko --\x3e\n        </div>\n        <div>\n            <a id="errorBannerCloseLink" role="button" href="#" data-bind="\n                click: hideBanner_onClick,\n                ariaLabel: str[\'CT_STR_Error_Details_Close_AltText\'],\n                hasFocus: isFocusActivated() && !svr.C8 && !svr.urlSetDebugMode">\n                \x3c!-- ko component: \'accessible-image-control\' --\x3e\n                <img role="presentation" pngSrc="' + t(417) + '" svgSrc="' + t(418) + '" data-bind="imgSrc, attr: { alt: str[\'CT_STR_Error_Details_Close_AltText\'] }" />\n                <img role="presentation" pngSrc="' + t(419) + '" svgSrc="' + t(420) + '" data-bind="imgSrc, attr: { alt: str[\'CT_STR_Error_Details_Close_AltText\'] }" />\n                \x3c!-- /ko --\x3e\n            </a>\n        </div>\n    </div>\n</div>\n\x3c!-- /ko --\x3e'
}, function (e, n, t) {
    e.exports = t.p + "content/images/check_small_white_9fff087606d5cf6ea6f2ee27b461bfc2.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/check_small_white_c442abc4ca38c5f04a23e3df1143641b.svg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/check_small_e1e685219f801b7c2c395594379fbc46.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/check_small_c36fa14790dfc6ca22068a958373c2ba.svg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/close_white_78782a80a32b23ea76f4e9e039610102.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/close_white_6b2eebc2feff2d8583fcc9ad7a9e375a.svg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/close_6278ec0ac116a229512ee5c448658b16.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/close_40eb39126300b56bf66c20ee75b54093.svg"
}, function (e, n) {
    e.exports = "\x3c!-- ko if: !hideFooter && (showLinks || impressumLink || showIcpLicense) --\x3e\n<div id=\"footerLinks\" class=\"footerNode text-secondary\" data-bind=\"externalCss: { 'footer-links': true }\">\n\n    \x3c!-- ko if: showFooter --\x3e\n        \x3c!-- ko if: !hideTOU --\x3e\n        <a id=\"ftrTerms\" data-bind=\"\n            text: termsText,\n            href: termsLink,\n            click: termsLink_onClick,\n            externalCss: {\n                'footer-content': true,\n                'footer-item': true,\n                'has-background': !useDefaultBackground,\n                'background-always-visible': hasDarkBackground }\"></a>\n        \x3c!-- /ko --\x3e\n\n        \x3c!-- ko if: !hidePrivacy --\x3e\n        <a id=\"ftrPrivacy\" data-bind=\"\n            text: privacyText,\n            href: privacyLink,\n            click: privacyLink_onClick,\n            externalCss: {\n                'footer-content': true,\n                'footer-item': true,\n                'has-background': !useDefaultBackground,\n                'background-always-visible': hasDarkBackground }\"></a>\n        \x3c!-- /ko --\x3e\n\n        \x3c!-- ko if: impressumLink --\x3e\n        <a id=\"ftrImpressum\" data-bind=\"\n            text: str['WF_STR_Footer_LinkDisclaimer_Text'],\n            href: impressumLink,\n            click: impressumLink_onClick,\n            externalCss: {\n                'footer-content': true,\n                'footer-item': true,\n                'has-background': !useDefaultBackground,\n                'background-always-visible': hasDarkBackground }\"></a>\n        \x3c!-- /ko --\x3e\n\n        \x3c!-- ko if: a11yConformeLink --\x3e\n        <a id=\"ftrA11yConforme\" data-bind=\"\n            text: str['WF_STR_Footer_LinkA11yConforme_Text'],\n            href: a11yConformeLink,\n            click: a11yConformeLink_onClick,\n            externalCss: {\n                'footer-content': true,\n                'footer-item': true,\n                'has-background': !useDefaultBackground,\n                'background-always-visible': hasDarkBackground }\"></a>\n        \x3c!-- /ko --\x3e\n\n        \x3c!-- ko if: showIcpLicense --\x3e\n        <a id=\"ftrIcp\" href=\"#\" target=\"_blank\" data-bind=\"\n            text: str['STR_Footer_IcpLicense_Text'],\n            href: icpLink,\n            externalCss: {\n                'footer-content': true,\n                'footer-item': true,\n                'has-background': !useDefaultBackground,\n                'background-always-visible': hasDarkBackground }\"></a>\n        \x3c!-- /ko --\x3e\n    \x3c!-- /ko --\x3e\n\n    \x3c!-- Set attr binding before hasFocusEx to prevent Narrator from losing focus --\x3e\n    <a id=\"moreOptions\" href=\"#\" role=\"button\" data-bind=\"\n        click: moreInfo_onClick,\n        ariaLabel: str['CT_STR_More_Options_Ellipsis_AriaLabel'],\n        attr: { 'aria-expanded': showDebugDetails().toString() },\n        hasFocusEx: focusMoreInfo(),\n        externalCss: {\n            'footer-content': true,\n            'footer-item': true,\n            'debug-item': true,\n            'has-background': !useDefaultBackground,\n            'background-always-visible': hasDarkBackground }\">...</a>\n</div>\n\x3c!-- /ko --\x3e\n\n\x3c!-- ko if: svr.cb && showLinks --\x3e\n    \x3c!-- ko if: svr.A2 || svr.Ak --\x3e\n    <div class=\"text-caption\" data-bind=\"\n        htmlWithBindings: html['CT_STR_Inline_Legal_Services_Message'],\n        childBindings: {\n            'ftrServices': {\n                click: services_onClick },\n            'ftrServicesInformation': {\n                click: services_onClick } }\"></div>\n    \x3c!-- /ko --\x3e\n    <div class=\"text-caption\" data-bind=\"\n        htmlWithBindings: html['CT_STR_Inline_Legal_Message'],\n        childBindings: {\n            'ftrNext': {\n                css: 'bold' },\n            'ftrTerms': {\n                href: termsLink,\n                click: termsLink_onClick },\n            'ftrPrivacy': {\n                href: privacyLink,\n                click: privacyLink_onClick } }\"></div>\n\x3c!-- /ko --\x3e"
}, function (e, n, t) {
    var i = t(3),
        a = t(1),
        o = window,
        r = i.Object,
        s = a.Helper,
        c = s.history;
    e.exports = function (e, n, t) {
        var i = this,
            a = !1,
            d = e,
            l = n,
            u = t,
            p = [null],
            f = 0;

        function g(e) {
            if (e && "undefined" != typeof e.state && null !== e.state) {
                var n = e.state;
                n < f ? d() : l(), f = n, u(i.getState())
            }
        }
        i.dispose = function () {
            a && s.removeEventListener(o, "popstate", g)
        }, i.pushState = function (e) {
            f++, p.splice(f, p.length - f, r.clone(e)), a && c.pushState(f, "")
        }, i.replaceState = function (e) {
            p[f] = r.clone(e)
        }, i.goBack = function () {
            f > 0 && (a ? o.history.back() : g({
                state: f - 1
            }))
        }, i.getState = function () {
            return f > p.length ? f = p.length - 1 : f < 0 && (f = 0), null === p[f] ? null : r.clone(p[f])
        }, (a = s.isHistorySupported()) && (c.replaceState(f, ""), s.addEventListener(o, "popstate", g))
    }
}, function (e, n, t) {
    e.exports = "\x3c!-- " + (t(424), " --\x3e\n\n<div data-bind=\"css: { 'zero-opacity': hidePaginatedView() }\">\n    \x3c!-- ko if: showIdentityBanner() && (sharedData.displayName || svr.i) --\x3e\n    <div data-bind=\"css: {\n        'animate': animate() && animate.animateBanner(),\n        'slide-out-next': animate.isSlideOutNext(),\n        'slide-in-next': animate.isSlideInNext(),\n        'slide-out-back': animate.isSlideOutBack(),\n        'slide-in-back': animate.isSlideInBack() }\">\n\n        <div data-bind=\"component: { name: 'identity-banner-control',\n            params: {\n                userTileUrl: svr.b7,\n                displayName: sharedData.displayName || svr.i,\n                isBackButtonVisible: isBackButtonVisible(),\n                focusOnBackButton: isBackButtonFocused(),\n                backButtonDescribedBy: backButtonDescribedBy() },\n            event: {\n                backButtonClick: identityBanner_onBackButtonClick } }\">\n        </div>\n    </div>\n    \x3c!-- /ko --\x3e\n\n    <div class=\"pagination-view\" data-bind=\"css: {\n        'has-identity-banner': showIdentityBanner() && (sharedData.displayName || svr.i),\n        'zero-opacity': hidePaginatedView.hideSubView(),\n        'animate': animate(),\n        'slide-out-next': animate.isSlideOutNext(),\n        'slide-in-next': animate.isSlideInNext(),\n        'slide-out-back': animate.isSlideOutBack(),\n        'slide-in-back': animate.isSlideInBack() }\">\n\n        \x3c!-- ko foreach: views --\x3e\n            \x3c!-- ko if: $parent.currentViewIndex() === $index() --\x3e\n                \x3c!-- ko template: { nodes: [$data], data: $parent } --\x3e\x3c!-- /ko --\x3e\n            \x3c!-- /ko --\x3e\n        \x3c!-- /ko --\x3e\n    </div>\n</div>")
}, function (e, n, t) {
    var i = t(2),
        a = t(1),
        o = t(4),
        r = window,
        s = a.Helper;
    i.components.register("identity-banner-control", {
        viewModel: function (e) {
            var n = this,
                t = e.displayName,
                i = e.isBackButtonVisible,
                a = e.backButtonId,
                r = e.backButtonDescribedBy,
                c = e.focusOnBackButton || !1;
            n.onBackButtonClick = o.create(), n.unsafe_displayName = null, n.isBackButtonVisible = i, n.backButtonId = a, n.backButtonDescribedBy = r, n.focusOnBackButton = c, n.showLogo = e.showLogo || !1, n.bannerLogoUrl = e.bannerLogoUrl || "", n.backButton_onClick = function () {
                n.onBackButtonClick()
            }, n.unsafe_displayName = s.htmlUnescape(t)
        },
        template: t(425),
        synchronous: !r.ServerData.A || a.Helper.isStackSizeGreaterThan(r.ServerData.A),
        enableExtensions: !0
    })
}, function (e, n, t) {
    e.exports = "\x3c!-- " + (t(8), ' --\x3e\n\n<div class="identityBanner">\n    \x3c!-- ko if: isBackButtonVisible --\x3e\n    <button type="button" class="backButton" data-bind="\n        attr: { \'id\': backButtonId || \'idBtn_Back\' },\n        ariaLabel: str[\'CT_HRD_STR_Splitter_Back\'],\n        ariaDescribedBy: backButtonDescribedBy,\n        click: backButton_onClick,\n        hasFocus: focusOnBackButton">\n        \x3c!-- ko ifnot: svr.CX --\x3e\n            \x3c!-- ko component: \'accessible-image-control\' --\x3e\n            <img role="presentation" pngSrc="') + t(426) + '"\n                svgSrc="' + t(427) + '" data-bind="imgSrc" />\n            <img role="presentation" pngSrc="' + t(428) + '"\n                svgSrc="' + t(429) + '" data-bind="imgSrc" />\n            \x3c!-- /ko --\x3e\n        \x3c!-- /ko --\x3e\n\n        \x3c!-- ko if: svr.CX --\x3e\n            \x3c!-- ko component: \'accessible-image-control\' --\x3e\n            <img role="presentation" pngSrc="' + t(430) + '"\n                svgSrc="' + t(431) + '" data-bind="imgSrc" />\n            <img role="presentation" pngSrc="' + t(432) + '"\n                svgSrc="' + t(433) + '" data-bind="imgSrc" />\n            \x3c!-- /ko --\x3e\n        \x3c!-- /ko --\x3e\n    </button>\n    \x3c!-- /ko --\x3e\n\n    <div id="displayName" class="identity" data-bind="text: unsafe_displayName, attr: { \'title\': unsafe_displayName }"></div>\n</div>'
}, function (e, n, t) {
    e.exports = t.p + "content/images/arrow_left_white_8c958f210f9d174621c2a5f436be7147.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/arrow_left_white_e3c710be3052253ad7caa53c27077683.svg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/arrow_left_7cc096da6aa2dba3f81fcc1c8262157c.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/arrow_left_a9cc2824ef3517b6c4160dcf8ff7d410.svg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/arrow_right_white_40cef7b01626a78de03a282c689979be.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/arrow_right_white_04243c9ea4f194a9c82ede290ad84363.svg"
}, function (e, n, t) {
    e.exports = t.p + "content/images/arrow_right_ddba4d9629cb501a88a6a49b7ec60c2d.png"
}, function (e, n, t) {
    e.exports = t.p + "content/images/arrow_right_686a7399afdaf4d5f060eeb08b320c42.svg"
}, function (e, n, t) {
    var i = t(2),
        a = t(0),
        o = t(14),
        r = t(1),
        s = t(3),
        c = t(22),
        d = t(5),
        l = t(9),
        u = t(4),
        p = t(35),
        f = t(11),
        g = t(31),
        m = t(6),
        b = t(28),
        v = t(16),
        h = t(20),
        _ = t(17),
        w = t(10).getInstance(window.ServerData),
        S = t(7);
    var C = window,
        x = a.PaginatedState,
        y = a.CredentialType,
        k = a.ApiErrorCodes,
        T = r.Helper,
        P = r.Cookies,
        D = r.QueryString,
        E = s.String,
        I = m.AllowedIdentitiesType,
        A = c.GctResultAction;

    function R(e) {
        var n = this,
            t = e.serverData,
            r = e.serverError,
            s = e.isInitialView,
            b = e.displayName,
            C = e.prefillNames,
            R = e.flowToken,
            L = e.otherIdpRedirectUrl,
            O = e.availableSignupCreds || [],
            B = t.str,
            N = t.aY || t.ay,
            U = t.AW,
            F = t.fCheckWindowsUsernameFormat,
            M = t.r,
            V = t.urlGetOneTimeCode,
            j = t.au,
            H = t.C,
            W = t.staticTenantBranding,
            $ = t.m,
            G = t.R,
            q = t.sRemoteClientIp,
            z = t.AP,
            K = t.bK,
            J = t.av,
            X = t.D,
            Q = !!t.Aj,
            Y = t.L,
            Z = t.Y,
            ee = t.X,
            ne = t.AS,
            te = t.As,
            ie = t.aR,
            ae = (t.l, t.p, t.Ar),
            oe = t.ab,
            re = !!t.BY,
            se = !!t.By,
            ce = !!t.Bx,
            de = t.J,
            le = t.Q,
            ue = (t.Bd, t.Ao),
            pe = t.j,
            fe = t.aJ,
            ge = t.w,
            me = t.h,
            be = t.G,
            ve = t.g,
            he = t.H,
            _e = t.fShowRemoteConnectLocationPage,
            we = t.U,
            Se = t.fIsRestrictedWsi,
            Ce = t.Al,
            xe = t.AK,
            ye = t.AX,
            ke = (t.iMsaServerLottieId, t.Ag),
            Te = (t.A2, t.Ak, t.showCantAccessAccountLink),
            Pe = !!V,
            De = {},
            Ee = null,
            Ie = !1,
            Ae = null,
            Re = {},
            Le = {},
            Oe = i.observable(!1),
            Be = i.observable(R).extend({
                flowTokenUpdate: t
            });

        function Ne(e, n) {
            return (Pe ? function (e) {
                return new d((function (n, t) {
                    Me(!0);
                    var i = {
                        OriginalRequest: H,
                        FlowToken: Be()
                    };
                    e && (i.Channel = e), new f({
                        checkApiCanary: Y
                    }).Json({
                        url: V,
                        eventId: S.EventIds.Api_GetOneTimeCode
                    }, i, n, t, a.DefaultRequestTimeout)
                }))
            }(e) : function (e) {
                return new d((function (n, t) {
                    Me(!0);
                    var i = {
                        purpose: e,
                        flowToken: Be(),
                        unauthSessionId: de,
                        lcid: le,
                        siteId: me,
                        clientId: be,
                        forwardedClientId: ve,
                        noPaBubbleVersion: he,
                        successCallback: n,
                        failureCallback: t
                    };
                    new h(i).sendRequest()
                }))
            }(n)).then(Ue, Fe)
        }

        function Ue(e) {
            return Me(!1), !Pe && e.getResponseJson && (e = e.getResponseJson()), {
                success: !0,
                userCode: e.UserCode,
                deviceCode: e.DeviceCode || e.SessionLookupKey
            }
        }

        function Fe(e) {
            if (Me(!1), Pe && e && e.error) switch (e.error.code) {
                case k.AuthFailure:
                    n.usernameTextbox.error.setNonBlockingError(B.CT_PWD_STR_Error_FlowTokenExpired);
                    break;
                default:
                    n.usernameTextbox.error.setNonBlockingError(B.CT_PWD_STR_Error_GetOneTimeCodeError)
            } else n.usernameTextbox.error.setNonBlockingError(B.CT_PWD_STR_Error_GetOneTimeCodeError);
            return n.setDefaultFocus(), {
                success: !1
            }
        }

        function Me(e) {
            n.isRequestPending(e), n.onSetPendingRequest(e)
        }

        function Ve(e) {
            n.onRedirect({
                url: e.redirectUrl,
                eventOptions: {
                    eventId: e.eventId
                }
            }, e.redirectPostParams, e.isIdpRedirect)
        }

        function je(e) {
            n.hasFido(e), n.availableCredsWithoutUsername([].concat(!G && n.allowRemoteLogin ? {
                credType: y.RemoteLogin
            } : [], e ? {
                credType: y.Fido
            } : [], L && ie ? {
                credType: y.OtherMicrosoftIdpFederation,
                redirectUrl: L
            } : [], Z && !ie && oe !== y.LinkedIn ? {
                credType: y.LinkedIn,
                redirectUrl: Z
            } : [], ee && !ie && oe !== y.GitHub ? {
                credType: y.GitHub,
                redirectUrl: ee,
                shownOnlyOnPicker: re
            } : [], ne ? {
                credType: y.Google,
                redirectUrl: ne
            } : [], te ? {
                credType: y.Facebook,
                redirectUrl: te
            } : [], we ? {
                credType: y.OfflineAccount
            } : [])), n.onUpdateAvailableCredsWithoutUsername(n.availableCredsWithoutUsername()), e && (n.fidoLinkText(B.CT_PWD_STR_SwitchToFidoCrossPlatform_Link), l.throwUnhandledExceptionOnRejection(_.isPlatformAuthenticatorAvailable().then(null, (function () {
                return !1
            })).then((function (e) {
                e && (n.fidoLinkText(B.CT_PWD_STR_SwitchToFido_Link), n.isPlatformAuthenticatorAvailable(!0))
            }))))
        }
        n.onSwitchView = u.create(), n.onRedirect = u.create(), n.onSetPendingRequest = u.create(), n.onRegisterDialog = u.create(), n.onUnregisterDialog = u.create(), n.onShowDialog = u.create(w.getDefaultEventTracingOptions(m.ClientTracingEventIds.ComponentEvent_LoginPaginatedUsernameView_onShowDialog, !0)), n.onAgreementClick = u.create(w.getDefaultEventTracingOptions(m.ClientTracingEventIds.ComponentEvent_LoginPaginatedUsernameView_onAgreementClick, !0)), n.onUpdateAvailableCredsWithoutUsername = u.create(), n.usernameTextbox = new g(p.errorComputed((function () {
                if (!Oe()) {
                    var e = r || null;
                    return r = null, e
                }
                return function () {
                    var e = n.usernameTextbox.value();
                    if (F && e && e.indexOf("\\") > 0) return B.CT_PWD_STR_Error_InvalidUsername_WindowsFormat;
                    if (!e || !(E.isEmailAddress(e) || N && E.isPhoneNumber(e) || U && E.isSkypeName(e))) return B.CT_PWD_STR_Error_InvalidUsername;
                    if (!E.isEmailAddress(e) && (!U || !E.isSkypeName(e)) && E.isPhoneNumber(e) && !e.match(a.Regex.PhoneNumberValidation)) return B.CT_PWD_STR_Error_InvalidPhoneFormatting;
                    return null
                }()
            }))), n.usernameTextbox.value.extend({
                logValue: w.getPIITextBoxPropertyLogOption(n, {
                    eventId: m.ClientTracingEventIds.PropertyValue_LoginPaginatedUsernameView_Username
                })
            }), n.usernameTextbox.error.extend({
                logValue: w.getPropertyLogOption(n, {
                    eventId: m.ClientTracingEventIds.PropertyValue_LoginPaginatedUsernameView_ClientError
                })
            }), n.passwordBrowserPrefill = i.observable(), n.prefillNames = i.observableArray(), n.isRequestPending = i.observable(!1), n.isBackButtonVisible = i.observable(!1), n.isSecondaryButtonVisible = i.observable(!1), n.secondaryButtonText = i.observable(), n.showTileLogo = i.observable(!1), n.isPlatformAuthenticatorAvailable = i.observable(!1), n.fidoLinkText = i.observable(), n.hasFido = i.observable(!1), n.availableCredsWithoutUsername = i.observableArray([]), n.tenantBranding = null, n.isInitialView = s, n.pageDescription = null, n.unsafe_pageTitle = null, n.unsafe_subHeader = null, n.showFidoLinkInline = se, n.hideCantAccessYourAccount = !0, n.unsafe_cantAccessYourAccountText = B.WF_STR_CantAccessAccount_Text, n.accessRecoveryLink = null, n.showCredPicker = !1, w.attachViewLoadClientTracingOptions(n, {
                eventId: m.ClientTracingEventIds.Event_LoginPaginatedUsernameView_onLoad
            }), n.isOfflineAccountVisible = we, n.allowRemoteLogin = !1, n.saveSharedData = function (e) {
                ye && e.useCredWithoutUsername && (Ie = !0, delete e.useCredWithoutUsername);
                var t = De.result,
                    a = Ie ? "" : n.usernameTextbox.value();
                e.flowToken = Be(), e.username = E.cleanseUsername(a), e.displayName = a, e.passwordBrowserPrefill = n.passwordBrowserPrefill(), e.remoteLoginUserCode = t ? t.userCode : null, e.remoteLoginDeviceCode = t ? t.deviceCode : null, e.proofConfirmation = "", e.useEvictedCredentials = !1, e.showCredViewBrandingDesc = !1, e.isSignupPost = !1, Ie && (e.availableCreds = n.availableCredsWithoutUsername(), ye && e.fidoParams && (e.fidoParams.allowList = null)), i.utils.extend(e, Re)
            }, n.getState = function () {
                return {
                    unsafe_displayName: n.usernameTextbox.value(),
                    gctRequestHelperState: Ae.getState()
                }
            }, n.restoreState = function (e) {
                e && (Ae.restoreState(e.gctRequestHelperState), n.usernameTextbox.value(e.unsafe_displayName))
            }, n.setDefaultFocus = function () {
                n.usernameTextbox.focused(!0)
            }, n.primaryButton_onClick = function () {
                if (Oe(!0), n.usernameTextbox.error.isBlocking()) n.setDefaultFocus();
                else {
                    var e, t = n.usernameTextbox.value();
                    e = t, J && P.isCookieSafeValue(e) && P.writeWithExpiration(J.name, e, J.secure, P.getPersistDate(), J.domain, J.path), Me(!0), l.throwUnhandledExceptionOnRejection(Ae.sendAsync(L, t, Be()).then((function (e) {
                        switch (Me(!1), e.flowToken && Be(e.flowToken), e.action) {
                            case A.ShowError:
                                n.usernameTextbox.error.setError(e.error, e.isBlockingError), Le = i.utils.extend(e.sharedData, e.viewParams || {}), n.setDefaultFocus();
                                break;
                            case A.SwitchView:
                                Re = i.utils.extend(e.sharedData, e.viewParams || {}), e.viewId === x.RemoteLoginPolling ? n.remoteLogin_onClick() : n.onSwitchView(e.viewId);
                                break;
                            case A.Redirect:
                                Ve(e)
                        }
                    })))
                }
            }, n.secondaryButton_onClick = function () {
                ce ? n.onSwitchView(x.LearnMoreOfflineAccount) : n.onSwitchView(x.Previous)
            }, n.signup_onClick = function () {
                pe ? Ve(Ae.getSignupRedirectGctResult(n.usernameTextbox.value())) : n.onSwitchView(O.length > 0 ? x.SignupCredentialPicker : x.SignupUsername)
            }, n.aadSignup_onClick = function () {
                n.onRedirect({
                    url: D.appendOrReplace(fe, "email", encodeURIComponent(n.usernameTextbox.value())),
                    eventOptions: {
                        eventId: S.EventIds.Redirect_AADSignUpPage
                    }
                })
            }, n.otherIdpLogin_onClick = function () {
                Ve(Ae.getOtherIdpRedirectGctResult(L, n.usernameTextbox.value()))
            }, n.sendOtcLink_onClick = function () {
                l.throwUnhandledExceptionOnRejection(Ne(v.Channel.EmailAddress).then((function (e) {
                    e.success && (Re = Le, n.onSwitchView(x.OneTimeCode))
                })))
            }, n.recoverUsername_onClick = function () {
                var e = D.appendOrReplace(ge, "mn", encodeURIComponent(n.usernameTextbox.value()));
                n.onRedirect({
                    url: e,
                    eventOptions: {
                        eventId: S.EventIds.Redirect_MSAUserRecoveryPage
                    }
                })
            }, n.skip_onClick = function () {
                null
            }, n.skipZtd_onClick = function () {
                n.onRedirect({
                    url: j,
                    eventOptions: {
                        eventId: S.EventIds.Redirect_SkipZeroTouch
                    }
                })
            }, n.privacy_onClick = function () {
                n.onSwitchView(x.ViewAgreement)
            }, n.tou_onClick = function () {
                n.onSwitchView(x.TermsOfUse)
            }, n.services_onClick = function () {
                n.onSwitchView(x.SeeHowDataIsManaged)
            }, n.footer_agreementClick = function (e) {
                n.onAgreementClick(e)
            }, n.remoteLogin_onClick = function () {
                l.throwUnhandledExceptionOnRejection(Ne(null, v.Purpose.XboxRemoteConnect).then((function (e) {
                    e.success && (De.result = e, n.onSwitchView(x.RemoteLoginPolling))
                })))
            }, n.learnMore_onClick = function () {
                n.onSwitchView(x.LearnMore)
            }, n.cantAccessAccount_onClick = function () {
                $ === I.Both ? n.onSwitchView(x.ResetPasswordSplitter) : n.onRedirect({
                    url: M,
                    eventOptions: {
                        eventId: S.EventIds.Redirect_ResetPasswordPage
                    }
                })
            }, n.switchToFidoCredLink_onClick = function () {
                ye ? n.noUsernameCredSwitchLink_onSwitchView(x.Fido) : n.onSwitchView(x.Fido)
            }, n.noUsernameCredSwitchLink_onSwitchView = function (e) {
                switch (Ie = !0, e) {
                    case x.RemoteLoginPolling:
                        n.remoteLogin_onClick();
                        break;
                    default:
                        n.onSwitchView(e)
                }
            }, n.tileLogo_onLoad = function () {
                n.showTileLogo(!0)
            },
            function () {
                n.allowRemoteLogin = K && K.allowRemoteLogin, Ae = new c(t), ue && ue.Username && Ae.cacheResponse(ue.Username, ue), l.throwUnhandledExceptionOnRejection(T.isFidoSupportedAsync(Q).then(je, (function () {
                    je(!1)
                }))), n.showCredPicker = (n.availableCredsWithoutUsername() > 0 || ke || xe || we) && !Ce && !Se;
                var e, a = o.loadTenantBranding(W);
                if (a && a.UserIdLabel && (a.unsafe_userIdLabel = T.htmlUnescape(a.UserIdLabel)), n.tenantBranding = a, ae) {
                    var r = T.htmlUnescape(ae);
                    n.unsafe_pageTitle = E.format(B.CT_Win10_STR_Username_Title_WithOrgDomain, r), n.unsafe_subHeader = E.format(B.CT_Win10_STR_Username_SubHeader_WithOrgDomain, r)
                } else n.unsafe_pageTitle = B.WF_STR_HeaderDefault_Title_With_Brand, n.unsafe_subHeader = B.CT_Win10_STR_SignInPage_UsernameLabel;
                B.WF_STR_Default_Desc && !_e && (n.pageDescription = E.format(B.WF_STR_Default_Desc, G, q || z)), b ? n.usernameTextbox.value(T.htmlUnescape(b)) : C && 0 !== C.length && (n.usernameTextbox.value(C[0]), C.length > 1 && (i.utils.arrayForEach(C, (function (e) {
                    n.prefillNames.push({
                        text: e,
                        value: e
                    })
                })), n.prefillNames.push({
                    text: B.CT_WPIL_STR_Android_UseDifferentAddress,
                    value: null
                }), e = n.usernameTextbox.value.subscribe((function (t) {
                    null === t && (n.prefillNames.removeAll(), e.dispose(), Oe(!1), n.usernameTextbox.value(""), n.usernameTextbox.focused(!0))
                })))), n.usernameTextbox.value.subscribe((function (e) {
                    e && (Ee ? e.toLowerCase() !== Ee.toLowerCase() && n.passwordBrowserPrefill(null) : Ee = e)
                })), s ? X && (n.isBackButtonVisible(!0), n.isSecondaryButtonVisible(!0)) : (n.isBackButtonVisible(!0), n.isSecondaryButtonVisible(!0));
                var d = o.getLayoutTemplateConfig(a);
                n.hideCantAccessYourAccount = !Te || d.hideAccountResetCredentials || d.hideCantAccessYourAccount, a.CantAccessYourAccountText && (n.unsafe_cantAccessYourAccountText = T.htmlUnescape(a.CantAccessYourAccountText)), n.accessRecoveryLink = a.AccessRecoveryLink, Se && (n.hideCantAccessYourAccount = !0, n.showFidoLinkInline = !1)
            }()
    }
    b.applyExtenders(i), i.components.register("login-paginated-username-view", {
        viewModel: R,
        template: t(437),
        synchronous: !C.ServerData.A || r.Helper.isStackSizeGreaterThan(C.ServerData.A),
        enableExtensions: !0
    }), e.exports = R
}, function (e, n, t) {
    var i = {
        "./msaServerSignInLottie_1.json": 436
    };

    function a(e) {
        var n = o(e);
        return t(n)
    }

    function o(e) {
        if (!t.o(i, e)) {
            var n = new Error("Cannot find module '" + e + "'");
            throw n.code = "MODULE_NOT_FOUND", n
        }
        return i[e]
    }
    a.keys = function () {
        return Object.keys(i)
    }, a.resolve = o, e.exports = a, a.id = 435
}, function (e, n, t) {
    e.exports = t.p + "content/images/msaserversigninlottie_1_08ac9870d960fbb44a6f9dc640aab002.json"
}, function (e, n, t) {
    e.exports = "\x3c!-- " + (t(24), t(32), t(13), t(29), t(30), t(27), ' --\x3e\n\n<div data-bind="component: { name: \'header-control\',\n    params: {\n        serverData: svr,\n        title: str[\'WF_STR_HeaderDefault_Title\'] } }">\n</div>\n\n\x3c!-- ko if: pageDescription && !svr.CO --\x3e\n<div class="row text-body no-margin-top">\n    <div id="loginDescription" data-bind="\n        htmlWithBindings: pageDescription,\n        childBindings: {\n            \'appName\': { css: { \'bold\': true } },\n            \'ipAddress\': { css: { \'bold\': true } },\n            \'location\': { css: { \'bold\': true } },\n            \'learnMoreLink\': {\n                click: learnMore_onClick,\n                ariaLabel: str[\'MOBILE_STR_SignIn_MSAcctHelpHeading\'],\n                visible: !svr.Co } }">\n    </div>\n</div>\n\x3c!-- /ko --\x3e\n\n<div class="row">\n    <div role="alert" aria-live="assertive">\n        \x3c!-- ko if: usernameTextbox.error --\x3e\n        <div class="col-md-24" id="usernameError" data-bind="\n            externalCss: { \'error\': true },\n            htmlWithBindings: usernameTextbox.error,\n            childBindings: {\n                \'idA_PWD_SignUp\': { href: svr.j, click: signup_onClick },\n                \'aadSignup\': { href: svr.aJ, click: aadSignup_onClick },\n                \'aadSelfSignup\': { click: signup_onClick },\n                \'otherIdpLogin\': { href: svr.AF, click: otherIdpLogin_onClick },\n                \'sendOtcLink\': { click: sendOtcLink_onClick },\n                \'recoverUsername\': { href: svr.w, click: recoverUsername_onClick } }">\n        </div>\n        \x3c!-- /ko --\x3e\n    </div>\n\n    <div class="form-group col-md-24">\n        \x3c!-- ko if: prefillNames().length > 1 --\x3e\n        <select id="usernames" class="win-dropdown form-control"\n            data-bind="options: prefillNames, optionsText: \'text\', optionsValue: \'value\', value: usernameTextbox.value, externalCss: { \'has-error\': usernameTextbox.error }">\n        </select>\n        \x3c!-- /ko --\x3e\n\n        \x3c!-- ko ifnot: prefillNames().length > 1 --\x3e\n        <div class="placeholderContainer" data-bind="component: { name: \'placeholder-textbox-field\',\n            publicMethods: usernameTextbox.placeholderTextboxMethods,\n            params: {\n                serverData: svr,\n                hintText: tenantBranding.unsafe_userIdLabel || str[\'STR_SSSU_Username_Hint\'] || str[\'CT_PWD_STR_Email_Example\'],\n                hintCss: \'placeholder\' + (!svr.aY ? \' ltr_override\' : \'\') },\n            event: {\n                updateFocus: usernameTextbox.textbox_onUpdateFocus } }">\n\n            <input type="email" name="loginfmt" id="i0116" maxlength="113" class="form-control ltr_override" aria-required="true"\n                data-report-event="Signin_Email_Phone_Skype" data-report-trigger="click" data-report-value="Email_Phone_Skype_Entry"\n                data-bind="\n                    attr: { lang: svr.aZ ? null : \'en\' },\n                    externalCss: {\n                        \'input\': true,\n                        \'text-box\': true,\n                        \'has-error\': usernameTextbox.error },\n                    ariaLabel: tenantBranding.unsafe_userIdLabel || str[\'CT_PWD_STR_Username_AriaLabel\'],\n                    ariaDescribedBy: \'loginHeader\' + (pageDescription && !svr.CO ? \' loginDescription usernameError\' : \' usernameError\'),\n                    textInput: usernameTextbox.value,\n                    hasFocusEx: usernameTextbox.focused,\n                    placeholder: $placeholderText" />\n\n            <input name="passwd" type="password" id="i0118" autocomplete="off" data-bind="moveOffScreen, textInput: passwordBrowserPrefill" />\n        </div>\n        \x3c!-- /ko --\x3e\n    </div>\n</div>\n\n<div data-bind="css: { \'position-buttons\': !tenantBranding.BoilerPlateText }, externalCss: { \'password-reset-links-container\': true }">\n    <div class="row">\n        <div class="col-md-24">\n            <div class="text-13">\n                \x3c!-- ko if: svr.Ax && !svr.Ai && !svr.a1 --\x3e\n                \x3c!-- ko if: svr.AZ --\x3e\n                <div class="form-group">\n                    <a id="signup" data-bind="\n                        text: str[\'STR_SSSU_Signup_Link\'],\n                        href: svr.j || \'#\',\n                        click: signup_onClick"></a>\n                </div>\n                \x3c!-- /ko --\x3e\n                \n                \x3c!-- ko ifnot: svr.AZ --\x3e\n                <div class="form-group" data-bind="\n                    htmlWithBindings: html[\'WF_STR_SignUpLink_Text\'],\n                    childBindings: {\n                        \'signup\': {\n                            href: svr.j || \'#\',\n                            ariaLabel: svr.j ? str[\'WF_STR_SignupLink_AriaLabel_Text\'] : str[\'WF_STR_SignupLink_AriaLabel_Generic_Text\'],\n                            click: signup_onClick } }">\n                </div>\n                \x3c!-- /ko --\x3e\n                \x3c!-- /ko --\x3e\n\n                \x3c!-- ko ifnot: hideCantAccessYourAccount --\x3e\n                <div class="form-group">\n                    <a id="cantAccessAccount" name="cannotAccessAccount" data-bind="\n                        text: unsafe_cantAccessYourAccountText,\n                        click: accessRecoveryLink ? null : cantAccessAccount_onClick,\n                        attr: { target: accessRecoveryLink && \'_blank\' },\n                        href: accessRecoveryLink || \'#\'"></a>\n                </div>\n                \x3c!-- /ko --\x3e\n\n                \x3c!-- ko if: showFidoLinkInline && hasFido() && (availableCredsWithoutUsername().length >= 2 || svr.AK || isOfflineAccountVisible) --\x3e\n                <div class="form-group">\n                    <a id="idA_PWD_SwitchToFido" name="switchToFido" href="#" data-bind="\n                        text: fidoLinkText,\n                        click: switchToFidoCredLink_onClick"></a>\n\n                    \x3c!-- ko component: { name: \'fido-help-button-control\',\n                        params: {\n                            isPlatformAuthenticatorAvailable: isPlatformAuthenticatorAvailable() },\n                        event: {\n                            registerDialog: onRegisterDialog,\n                            unregisterDialog: onUnregisterDialog,\n                            showDialog: onShowDialog } } --\x3e\n                    \x3c!-- /ko --\x3e\n                </div>\n                \x3c!-- /ko --\x3e\n\n                \x3c!-- ko if: showCredPicker --\x3e\n                <div class="form-group" data-bind="\n                    component: { name: \'cred-switch-link-control\',\n                        params: {\n                            serverData: svr,\n                            availableCreds: availableCredsWithoutUsername(),\n                            showForgotUsername: svr.AK },\n                        event: {\n                            switchView: noUsernameCredSwitchLink_onSwitchView,\n                            redirect: onRedirect,\n                            registerDialog: onRegisterDialog,\n                            unregisterDialog: onUnregisterDialog,\n                            showDialog: onShowDialog } }">\n                </div>\n                \x3c!-- /ko --\x3e\n\n                \x3c!-- ko if: svr.au --\x3e\n                <div class="form-group">\n                    <a id="idSkipZtdLink" name="ztdChangeAccount" href="#" data-bind="\n                        text: str[\'CT_Win10_STR_ChangeAccount\'],\n                        click: skipZtd_onClick"></a>\n                </div>\n                \x3c!-- /ko --\x3e\n            </div>\n        </div>\n    </div>\n</div>\n\n\x3c!-- ko if: svr.cb --\x3e\n<div data-bind="component: { name: \'footer-control\',\n    params: {\n        serverData: svr,\n        showLinks: true,\n        hideFooter: true },\n    event: {\n        switchView: onSwitchView,\n        agreementClick: footer_agreementClick } }">\n</div>\n\x3c!-- /ko --\x3e\n\n<div class="win-button-pin-bottom" data-bind="css : { \'boilerplate-button-bottom\': tenantBranding.BoilerPlateText }">\n    <div class="row" data-bind="css: { \'move-buttons\': tenantBranding.BoilerPlateText }">\n        <div data-bind="component: { name: \'footer-buttons-field\',\n            params: {\n                serverData: svr,\n                isPrimaryButtonEnabled: !isRequestPending(),\n                isPrimaryButtonVisible: svr.e,\n                isSecondaryButtonEnabled: true,\n                isSecondaryButtonVisible: svr.e && isSecondaryButtonVisible(),\n                secondaryButtonText: secondaryButtonText() },\n            event: {\n                primaryButtonClick: primaryButton_onClick,\n                secondaryButtonClick: secondaryButton_onClick } }">\n        </div>\n    </div>\n</div>\n\n\x3c!-- ko if: tenantBranding.BoilerPlateText --\x3e\n<div id="idBoilerPlateText" class="wrap-content" data-bind="\n    htmlWithMods: tenantBranding.BoilerPlateText,\n    htmlMods: { filterLinks: svr.T },\n    css: { \'transparent-lightbox\': tenantBranding.UseTransparentLightBox },\n    externalCss: { \'boilerplate-text\': true }"></div>\n\x3c!-- /ko --\x3e')
}, function (e, n) {
    e.exports = '\x3c!-- ko withProperties: { \'$placeholderText\': placeholderText } --\x3e\n    \x3c!-- ko template: { nodes: $componentTemplateNodes, data: $parent } --\x3e\x3c!-- /ko --\x3e\n\x3c!-- /ko --\x3e\n\x3c!-- ko ifnot: usePlaceholderAttribute --\x3e\n<div class="placeholderInnerContainer" data-bind="visible: placeholderVisible, click: placeholder_onClick">\n    <div class="placeholder" aria-hidden="true" data-bind="text: hintText, css: hintCss"></div>\n</div>\n\x3c!-- /ko --\x3e'
}, function (e, n, t) {
    e.exports = "\x3c!-- " + (t(27), ' --\x3e\n\n<div class="form-group">\n    \x3c!-- ko if: showSwitchToCredPickerLink --\x3e\n    <a id="idA_PWD_SwitchToCredPicker" href="#" data-bind="\n        text: isUserKnown ? str[\'CT_PWD_STR_SwitchToCredPicker_Link\'] : str[\'CT_PWD_STR_SwitchToCredPicker_Link_NoUser\'],\n        ariaDescribedBy: ariaDescribedBy,\n        click: switchToCredPicker_onClick,\n        hasFocusEx: setFocus"></a>\n    \x3c!-- /ko --\x3e\n\n    \x3c!-- ko if: credentialCount === 1 && !(showForgotUsername || selectedCredShownOnlyOnPicker) --\x3e\n        \x3c!-- ko ifnot: hideCredSwitchLink --\x3e\n        <a href="#" data-bind="\n            attr: { \'id\': switchToCredId },\n            text: switchToCredText,\n            ariaDescribedBy: ariaDescribedBy,\n            click: switchToCred_onClick,\n            hasFocusEx: !showSwitchToCredPickerLink && setFocus"></a>\n        \x3c!-- /ko --\x3e\n\n        \x3c!-- ko if: displayHelp && selectedCredType === ') + t(0).CredentialType.Fido + ' --\x3e\n            \x3c!-- ko component: { name: \'fido-help-button-control\',\n                params: {\n                    isPlatformAuthenticatorAvailable: isPlatformAuthenticatorAvailable() },\n                event: {\n                    registerDialog: onRegisterDialog,\n                    unregisterDialog: onUnregisterDialog,\n                    showDialog: onShowDialog } } --\x3e\n            \x3c!-- /ko --\x3e\n        \x3c!-- /ko --\x3e\n    \x3c!-- /ko --\x3e\n\n    \x3c!-- ko if: credentialCount === 0 && showForgotUsername --\x3e\n    <a id="forgotUsername" data-bind="\n        href: svr.w,\n        text: str[\'WF_STR_ForgotUsernameLink_Text\'],\n        ariaDescribedBy: ariaDescribedBy,\n        hasFocusEx: !showSwitchToCredPickerLink && setFocus"></a>\n    \x3c!-- /ko --\x3e\n</div>\n\n\x3c!-- ko if: credLinkError --\x3e\n<div class="row">\n    <div class="col-md-24 alert-margin-bottom" role="alert" aria-live="assertive" data-bind="text: credLinkError, externalCss: { \'error\': true }"></div>\n</div>\n\x3c!-- /ko --\x3e'
}, function (e, n, t) {
    e.exports = "\x3c!-- " + (t(8), t(53), ' --\x3e\n\n<span class="help-button" role="button" tabindex="0" data-bind="\n    click: fidoHelp_onClick,\n    pressEnter: fidoHelp_onClick,\n    hasFocus: hasFocus,\n    ariaLabel: isPlatformAuthenticatorAvailable ? str[\'CT_STR_CredentialPicker_Help_Desc_Fido\'] : str[\'CT_STR_CredentialPicker_Help_Desc_FidoCrossPlatform\']">\n\n    \x3c!-- ko component: \'accessible-image-control\' --\x3e\n    <img role="presentation" pngSrc="') + t(55) + '" svgSrc="' + t(56) + '" data-bind="imgSrc" />\n    <img role="presentation" pngSrc="' + t(57) + '" svgSrc="' + t(58) + '" data-bind="imgSrc" />\n    \x3c!-- /ko --\x3e\n</span>\n\n<div data-bind="component: { name: \'fido-help-dialog-content-control\',\n    params: {\n        isPlatformAuthenticatorAvailable: isPlatformAuthenticatorAvailable },\n    event: {\n        registerDialog: onRegisterDialog,\n        unregisterDialog: onUnregisterDialog } }">\n</div>'
}, function (e, n, t) {
    e.exports = "\x3c!-- " + (t(8), t(54), " --\x3e\n\n<div data-bind=\"component: { name: 'dialog-content-control',\n    params: {\n        dialogId: ") + t(0).DialogId.FidoHelp + ',\n        data: {\n            labelledBy: \'fidoDialogTitle\',\n            describedBy: \'fidoDialogDesc fidoDialogDesc2\',\n            primaryButtonPreventTabbing: { direction: \'down\' },\n            isPlatformAuthenticatorAvailable: isPlatformAuthenticatorAvailable } },\n    event: {\n        registerDialog: onRegisterDialog,\n        unregisterDialog: onUnregisterDialog } }">\n\n    <div id="fidoDialogTitle" class="row" role="heading" aria-level="1" data-bind="externalCss: { \'title\': true }">\n        \x3c!-- ko component: \'accessible-image-control\' --\x3e\n        <img role="presentation" pngSrc="' + t(37) + '" svgSrc="' + t(38) + '" data-bind="imgSrc" />\n        <img role="presentation" pngSrc="' + t(39) + '" svgSrc="' + t(40) + "\" data-bind=\"imgSrc\" />\n        \x3c!-- /ko --\x3e\n\n        <span data-bind=\"text: isPlatformAuthenticatorAvailable ? str['CT_PWD_STR_SwitchToFido_Link'] : str['CT_PWD_STR_SwitchToFidoCrossPlatform_Link']\"></span>\n    </div>\n\n    <div id=\"fidoDialogDesc\" class=\"row text-body no-margin-top\" data-bind=\"\n        text: isPlatformAuthenticatorAvailable ? str['CT_STR_FidoDialog_Desc'] : str['CT_STR_FidoDialog_Desc_CrossPlatform']\">\n    </div>\n\n    \x3c!-- ko if: !svr.P && svr.Du && !svr.T--\x3e\n    <div id=\"fidoDialogDesc2\" class=\"row text-body\" data-bind=\"\n        htmlWithBindings: html['CT_STR_FidoDialog_Desc2'],\n        childBindings: {\n            'fidoHelpLink': {\n                href: svr.Du,\n                preventTabbing: { direction: 'up' },\n                attr: { 'target': '_blank' } } }\">\n    </div>\n    \x3c!-- /ko --\x3e\n</div>"
}, function (e, n) {
    e.exports = '<div>\n    <div class="row" id="loginHeader" data-bind="externalCss: { \'title\': true }">\n        <div role="heading" aria-level="1" data-bind="text: title"></div>\n        \x3c!-- ko if: isSubtitleVisible --\x3e\n        <div data-bind="text: subtitle || str[\'WF_STR_App_Title\'], externalCss: { \'subtitle\': true }"></div>\n        \x3c!-- /ko --\x3e\n    </div>\n\n    \x3c!-- ko if: headerDescription --\x3e\n    <div id="loginHeaderDescription" class="form-group" data-bind="text: headerDescription, externalCss: { \'header-description\': true }"></div>\n    \x3c!-- /ko --\x3e\n</div>'
}, function (e, n, t) {
    var i = t(2),
        a = t(1),
        o = t(4),
        r = t(0),
        s = window,
        c = r.PaginatedState;

    function d(e) {
        var n = this,
            t = e.serverData,
            a = t.b3;
        n.onSwitchView = o.create(), n.serverData = t, n.iFrameReady = i.observable(!1), n.iFrameTarget = function () {
            return a
        }, n.saveSharedData = function () {}, n.getState = function () {
            return null
        }, n.restoreState = function () {}, n.secondaryButton_onClick = function () {
            n.onSwitchView(c.Previous)
        }, n.iframeMessage = function (e) {
            var t = new URL(a).origin;
            if (e.origin === t) {
                var i = document.getElementById("sdxiframe");
                i && (i.style.height = e.data, i.style.setProperty("visibility", "visible")), n.iFrameReady(!0)
            }
        }, window.addEventListener("message", n.iframeMessage, !1)
    }
    i.components.register("see-how-data-is-managed-view", {
        viewModel: d,
        template: t(444),
        synchronous: !s.ServerData.A || a.Helper.isStackSizeGreaterThan(s.ServerData.A),
        enableExtensions: !0
    }), e.exports = d
}, function (e, n, t) {
    e.exports = "\x3c!-- " + (t(15), t(13), ' --\x3e\n\n<div class="section">\n    \x3c!-- ko ifnot: iFrameReady() --\x3e\n    <div class="row progress-container">\n        <div class="progress" role="alert" tabindex="-1"\n            data-bind="component: \'marching-ants-control\', ariaLabel: str[\'WF_STR_ProgressText\']"></div>\n    </div>\n    \x3c!-- /ko --\x3e\n    <div id="sdxcontainer">\n        <iframe id="sdxiframe" data-bind="attr: { src: iFrameTarget() }"></iframe>\n    </div>\n\n    <div class="win-button-pin-bottom">\n        <div class="row">\n            <div data-bind="component: { name: \'footer-buttons-field\',\n                params: {\n                    serverData: svr,\n                    isPrimaryButtonVisible: false,\n                    isSecondaryButtonVisible: true,\n                    focusOnSecondaryButton: true },\n                event: {\n                    secondaryButtonClick: secondaryButton_onClick } }">\n            </div>\n        </div>\n    </div>\n</div>')
}, function (e, n, t) {
    var i = t(2),
        a = t(1),
        o = t(4),
        r = t(0),
        s = window,
        c = r.PaginatedState;

    function d(e) {
        var n = this,
            t = e.serverData,
            i = e.isInitialView,
            a = e.moreInfoTitle,
            r = e.moreInfo,
            s = !!e.showErrorText,
            d = t.e,
            l = t.D;
        n.onSwitchView = o.create(), n.onSetBackButtonState = o.create(), n.moreInfoTitle = a, n.moreInfo = r, n.showErrorText = s, n.getState = function () {}, n.restoreState = function () {}, n.secondaryButton_onClick = function () {
            n.onSwitchView(c.Previous)
        }, n.onSetBackButtonState(d && (!i || l))
    }
    i.components.register("more-info-view", {
        viewModel: d,
        template: t(446),
        synchronous: !s.ServerData.A || a.Helper.isStackSizeGreaterThan(s.ServerData.A),
        enableExtensions: !0
    }), e.exports = d
}, function (e, n, t) {
    e.exports = "\x3c!-- " + (t(13), ' --\x3e\n\n\x3c!-- ko if: moreInfoTitle --\x3e\n<div id="moreInfoHeader" class="row" role="heading" aria-level="1" data-bind="text: moreInfoTitle, externalCss: { \'title\': true }"></div>\n\x3c!-- /ko --\x3e\n\n<div class="row text-body">\n    <div id="moreInfoText" class="text-block-body overflow-hidden" data-bind="text: moreInfo, externalCss: { \'error\': showErrorText }"></div>\n</div>\n\n<div class="row">\n    <div data-bind="component: { name: \'footer-buttons-field\',\n        params: {\n            serverData: svr,\n            isPrimaryButtonVisible: false,\n            isSecondaryButtonVisible: true,\n            focusOnSecondaryButton: true,\n            secondaryButtonDescribedBy: \'moreInfoHeader moreInfoText\' },\n        event: {\n            secondaryButtonClick: secondaryButton_onClick } }">\n    </div>\n</div>')
}]), window.__ConvergedLogin_PCore = !0;
//# sourceMappingURL=0e01e01062599dde228c.map