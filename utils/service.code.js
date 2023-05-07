const serviceCode = [
  {
    Service: "AIRTEL",
    Code: "AR",
  },
  {
    Service: "BSNL",
    Code: "BS",
  },
  {
    Service: "VODAFONE",
    Code: "VF",
  },
  {
    Service: "RELIANCE JIO",
    Code: "RJ",
  },
  {
    Service: "MTNL MUMBAI",
    Code: "MM",
  },
  {
    Service: "MTNL DELHI",
    Code: "MD",
  },
  {
    Service: "BSNL SPECIAL",
    Code: "BR",
  },
  {
    Service: "JIO LITE",
    Code: "JL",
  },
  {
    Service: "AIRTEL DTH",
    Code: "AD",
  },
  {
    Service: "DISH TV DTH",
    Code: "DT",
  },
  {
    Service: "TATA SKY DTH",
    Code: "TS",
  },
  {
    Service: "VIDEOCON DTH",
    Code: "VD",
  },
  {
    Service: "SUN TV DTH",
    Code: "ST",
  },
  {
    Service: "AIRTEL POSTPAID",
    Code: "AP",
  },
  {
    Service: "BSNL POSTPAID",
    Code: "BP",
  },
  {
    Service: "IDEA POSTPAID",
    Code: "IP",
  },
  {
    Service: "VODAFONE POSTPAID",
    Code: "VP",
  },
  {
    Service: "RELIANCE JIO POSTPAID",
    Code: "RP",
  },
  {
    Service: "TATA POSTPAID",
    Code: "TP",
  },
  {
    Service: "GOOGLE PLAY E-GIFT CARD",
    Code: "GLC",
  },
  {
    Service: "GREEN GAS",
    Code: "GG",
  },
  {
    Service: "IGL (INDRAPRASTH GAS LIMITED)",
    Code: "IGL",
  },
  {
    Service: "MAHANAGAR GAS LIMITED",
    Code: "MGL",
  },
  {
    Service: "HARYANA CITY GAS",
    Code: "HCG",
  },
  {
    Service: "SITI ENERGY",
    Code: "SEG",
  },
  {
    Service: "TRIPURA NATURAL GAS COMPANY LTD",
    Code: "TNGCL",
  },
  {
    Service: "SABARMATI GAS LIMITED (SGL)",
    Code: "SGL",
  },
  {
    Service: "UNIQUE CENTRAL PIPED GASES PVT LTD (UCPGPL)",
    Code: "UCPGP",
  },
  {
    Service: "VADODARA GAS LIMITED",
    Code: "VGL",
  },
  {
    Service: "ADANI GAS",
    Code: "AG",
  },
  {
    Service: "GUJARAT GAS COMPANY LTD",
    Code: "GGCL",
  },
  {
    Service: "CENTERL UP GAS LIMITED",
    Code: "CUGP",
  },
  {
    Service: "MAHARASHTRA NATURAL GAS",
    Code: "MNG",
  },
  {
    Service: "IRM ENERGY",
    Code: "IRME",
  },
  {
    Service: "AAVANTIKA GAS",
    Code: "AGP",
  },
  {
    Service: "ASSAM GAS COMPANY",
    Code: "AGC",
  },
  {
    Service: "CHAROTAR GAS SAHAKARI MANDALI LTD",
    Code: "CGSML",
  },
  {
    Service: "MANIPUR STATE POWER DISTRIBUTION COMPANY LTD",
    Code: "MSPDCL",
  },
  {
    Service: "PASCHIMANCHAL VIDYUT VITRAN NIGAM LIMITED (PVVNL)",
    Code: "PVVNL",
  },
  {
    Service: "WBSEDCL - PARTIAL",
    Code: "WBSEP",
  },
  {
    Service:
      "DAKSHINANCHAL VIDYUT VITRAN NIGAM LIMITED (DVVNL)(POSTPAID AND SMART PREPAID METER RECHARGE)",
    Code: "DVVNL",
  },
  {
    Service:
      "MADHYANCHAL VIDYUT VITRAN NIGAM LIMITED (MVVNL)(POSTPAID AND SMART PREPAID METER RECHARGE)",
    Code: "MVVNL",
  },
  {
    Service: "MEPDCL SMART PREPAID METER RECHARGE",
    Code: "MEPDCL",
  },
  {
    Service: "DEPARTMENT OF POWER, GOVERNMENT OF ARUNACHAL PRADESH",
    Code: "DPGAP",
  },
  {
    Service: "GIFT POWER COMPANY LIMITED",
    Code: "GPCL",
  },
  {
    Service: "KANNAN DEVAN HILLS PLANTATIONS COMPANY PRIVATE LIMITED",
    Code: "KDHPCPL",
  },
  {
    Service: "DEPARTMENT OF POWER, GOVERNMENT OF ARUNACHAL PRADESH - PREPAID",
    Code: "DPGAP P",
  },
  {
    Service: "ELECTRICITY DEPARTMENT CHANDIGARH",
    Code: "EDC",
  },
  {
    Service: "TP CENTRAL ODISHA DISTRIBUTION LIMITED",
    Code: "TPCODL",
  },
  {
    Service: "LAKSHADWEEP ELECTRICITY DEPARTMENT",
    Code: "LED",
  },
  {
    Service: "DEPARTMENT OF POWER, NAGALAND",
    Code: "DPN",
  },
  {
    Service: "NEW DELHI MUNICIPAL COUNCIL (NDMC) - ELECTRICITY",
    Code: "DMCE",
  },
  {
    Service: "KANPUR ELECTRICITY SUPPLY COMPANY",
    Code: "KESC",
  },
  {
    Service: "TP SOUTHERN ODISHA DISTRIBUTION LIMITED",
    Code: "TPSODL",
  },
  {
    Service: "TORRENT POWER - SHIL, MUMBRA &amp; KALWA",
    Code: "TORSMK",
  },
  {
    Service: "MSEDC LIMITED",
    Code: "MSEDC",
  },
  {
    Service: "APDCL RAPDR",
    Code: "APDC",
  },
  {
    Service: "APDCL-NON RAPDR",
    Code: "APDNR",
  },
  {
    Service: "BANGALORE ELECTRICITY SUPPLY COMPANY",
    Code: "BESC",
  },
  {
    Service: "BHARATPUR ELECTRICITY SERVICES LTD",
    Code: "BESL",
  },
  {
    Service: "BIKANER ELECTRICITY SUPPLY LIMITED (BKESL)",
    Code: "BKESL",
  },
  {
    Service: "BRIHAN MUMBAI ELECTRIC SUPPLY AND TRANSPORT UNDERT",
    Code: "BMSTU",
  },
  {
    Service: "BSES RAJDHANI",
    Code: "BSESR",
  },
  {
    Service: "BSES YAMUNA",
    Code: "BSESY",
  },
  {
    Service: "CALCUTTA ELECTRICITY SUPPLY LTD (CESC LTD)",
    Code: "CESL",
  },
  {
    Service: "CHHATTISGARH STATE ELECTRICITY BOARD",
    Code: "CSEB",
  },
  {
    Service: "CHAMUNDESHWARI ELECTRICITY SUPPLY CORP LTD (CESCOM",
    Code: "CESCO",
  },
  {
    Service: "DAMAN AND DIU ELECTRICITY DEPARTMENT",
    Code: "DDED",
  },
  {
    Service: "DAKSHIN HARYANA BIJLI VITRAN NIGAM",
    Code: "DHBVN",
  },
  {
    Service: "DNH POWER DISTRIBUTION COMPANY LIMITED",
    Code: "DNHPD",
  },
  {
    Service: "GULBARGA ELECTRICITY SUPPLY COMPANY LIMITED",
    Code: "GESC",
  },
  {
    Service: "HUBLI ELECTRICITY SUPPLY COMPANY LTD (HESCOM)",
    Code: "HESC",
  },
  {
    Service: "INDIA POWER CORPORATION LIMITED - BIHAR",
    Code: "IPCLB",
  },
  {
    Service: "JAMSHEDPUR UTILITIES AND SERVICES COMPANY LIMITED",
    Code: "JUSC",
  },
  {
    Service: "JAIPUR VIYUT VITRAN NIGAM",
    Code: "JAVVN",
  },
  {
    Service: "JODHPUR VIDYUT VITRAN NIGAM LTD",
    Code: "JVVNL",
  },
  {
    Service: "JHARKHAND BIJLI VITRAN NIGAM LIMITED (JBVNL)",
    Code: "JBVNL",
  },
  {
    Service: "KOTA ELECTRICITY DISTRIBUTION LTD",
    Code: "KEDL",
  },
  {
    Service: "MPPKVVCL-INDORE",
    Code: "MPPKI",
  },
  null,
  {
    Service: "MEGHALAYA POWER DISTRIBUTION CORPORATI ON LTD",
    Code: "MPDC",
  },
  {
    Service: "MUZAFFARPUR VIDYUT VITRAN LIMITED",
    Code: "MVVL",
  },
  {
    Service: "NORTH DELHI POWER LIMITED (TATA POWER - DDL)",
    Code: "NDPL",
  },
  {
    Service: "NORTH BIHAR POWER DISTRIBUTION COMPANY LTD",
    Code: "NBPDC",
  },
  {
    Service: "NOIDA POWER COMPANY LIMITED",
    Code: "NPCL",
  },
  {
    Service: "INDIA POWER CORPORATION - WEST BENGAL",
    Code: "IPCWB",
  },
  {
    Service: "PUNJAB STATE POWER CORPORATION LTD (PSPCL)",
    Code: "PSPCL",
  },
  {
    Service: "ADANI ELECTRICITY MUMBAI LIMITED",
    Code: "AEML",
  },
  {
    Service: "RAJASTHAN VIDYUT VITRAN NIGAM LIMITED",
    Code: "RVVNL",
  },
  {
    Service: "SOUTH BIHAR POWER DISTRIBUTION COMPANY LTD.",
    Code: "SBPDC",
  },
  {
    Service: "SNDL NAGPUR",
    Code: "SNDLN",
  },
  {
    Service: "SOUTHERN POWER DISTR OF ANDHRA PRADESH",
    Code: "SPDAP",
  },
  {
    Service: "TRIPURA STATE ELECTRICITY CORPORATION LTD",
    Code: "TSECL",
  },
  {
    Service: "TAMIL NADU ELECTRICITY BOARD (TNEB)",
    Code: "TNEB",
  },
  {
    Service: "TP AJMER DISTRIBUTION LTD",
    Code: "TPADL",
  },
  {
    Service: "TATA POWER – MUMBAI",
    Code: "TPM",
  },
  {
    Service: "UTTAR HARYANA BIJLI VITRAN NIGAM",
    Code: "UHBVN",
  },
  {
    Service: "UTTARAKHAND POWER CORPORATION LIMITED",
    Code: "UPCL",
  },
  {
    Service: "UTTAR PRADESH POWER CORP LTD (UPPCL) - URBAN",
    Code: "UPPCL",
  },
  {
    Service: "UTTAR PRADESH POWER CORP LTD (UPPCL) - RURAL",
    Code: "UPPCR",
  },
  {
    Service: "WEST BENGAL STATE ELECTRICITY",
    Code: "WBSE",
  },
  {
    Service: "MANGALORE ELECTRICITY SUPPLY COMPANY LTD NON RAPDR",
    Code: "MESCL",
  },
  {
    Service: "JAMMU AND KASHMIR POWER",
    Code: "JKP",
  },
  {
    Service: "ANDHRA PRADESH CENTRAL POWER DISTRIBUTION",
    Code: "APCPDCL",
  },
  {
    Service: "ANDHRA PRADESH EASTERN POWER DISTRIBUTION COMPANY",
    Code: "APSCL",
  },
  {
    Service: "TORRENT POWER - AGRA",
    Code: "TPA",
  },
  {
    Service: "TORRENT POWER - AHMEDABAD",
    Code: "TORPA",
  },
  {
    Service: "BEST",
    Code: "BEST",
  },
  {
    Service: "PUDUCHERRY ELECTRICITY",
    Code: "GPED",
  },
  {
    Service: "AJMER VIDYUT VITRAN NIGAM LTD(AVVNL)",
    Code: "AVVNL",
  },
  {
    Service: "HIMACHAL PRADESH STATE ELECTRICITY BOARD LTD",
    Code: "HPSEB",
  },
  {
    Service: "GOA - GOA ELECTRICITY DEPARTMENT",
    Code: "GED",
  },
  {
    Service: "TP NORTHERN ODISHA DISTRIBUTION LIMITED",
    Code: "ONESC",
  },
  {
    Service: "TP WESTERN ODISHA DISTRIBUTION LIMITED",
    Code: "OWSO",
  },
  {
    Code: ".....",
  },
  {
    Service: "SOUTHERN POWER DISTRIBUTION COMPANY OF TELANGANA",
    Code: "SPT",
  },
  {
    Service: "PGVCL",
    Code: "PGVCL",
  },
  {
    Service: "MGVCL",
    Code: "MGVCL",
  },
  {
    Service: "UGVCL",
    Code: "UGVCL",
  },
  {
    Service: "DGVCL",
    Code: "DGVCL",
  },
  {
    Service: "TORRENT POWER SURAT",
    Code: "TPS",
  },
  {
    Service: "KERALA STATE ELECTRICITY BOARD LTD. (KSEB)",
    Code: "KSEB",
  },
  {
    Service: "M.P. POORV KSHETRA VIDYUT VITARAN - URBAN",
    Code: "MPPKV",
  },
  {
    Service: "TORRENT POWER LTD- BHIWANDI",
    Code: "TPB",
  },
  {
    Service: "MADHYA PRADESH MADHYA KSHETRA VIDYUT VITARAN CO. LTD.-RURAL",
    Code: "MPMKVV",
  },
  {
    Service: "MADHYA PRADESH MADHYA KSHETRA VIDYUT VITARAN CO. LTD.-URBAN",
    Code: "MPKVV",
  },
  {
    Service: "MADHYA PRADESH PASCHIM KSHETRA VIDYUT VITARAN",
    Code: "MPPKVVB",
  },
  {
    Service: "MADHYA PRADESH POORV KSHETRA VIDYUT VITARAN - RURAL",
    Code: "MPPKVVR",
  },
  {
    Service: "MANGALORE ELECTRICITY SUPPLY COMPANY LTD. (MESCOM)– RAPDR",
    Code: "MESCLR",
  },
  {
    Service: "MP POORVA KSHETRA VIDYUT VITARAN CO. LTD JABALPUR",
    Code: "MPKVVJ",
  },
  {
    Service: "NORTHERN POWER DISTRIBUTION OF TELANGANA LTD",
    Code: "NPDOTL",
  },
  {
    Service: "SIKKIM POWER - RURAL",
    Code: "SPR",
  },
  {
    Service: "SIKKIM POWER - URBAN",
    Code: "SPU",
  },
  {
    Service: "MTNL DELHI LANDLINE",
    Code: "MDL",
  },
  {
    Service: "AIRTEL LANDLINE",
    Code: "AL",
  },
  {
    Service: "BSNL LANDLINE",
    Code: "BL",
  },
  {
    Service: "IDEA LANDLINE",
    Code: "IL",
  },
  {
    Service: "VODAFONE LANDLINE",
    Code: "VL",
  },
  {
    Service: "MTNL MUMBAI LANDLINE",
    Code: "ML",
  },
  {
    Service: "ACT FIBERNET BROADBAND",
    Code: "AFB",
  },
  {
    Service: "AIRJALDI - RURAL BROADBAND",
    Code: "ARB",
  },
  {
    Service: "AIRTEL BROADBAND",
    Code: "ABL",
  },
  {
    Service: "AIRTEL BROADBAND (FETCH &amp; PAY)",
    Code: "ARBL",
  },
  {
    Service: "ALLIANCE BROADBAND SERVICES PVT. LTD.",
    Code: "ABS",
  },
  {
    Service: "ASIANET BROADBAND",
    Code: "ASB",
  },
  {
    Service: "COMWAY BROADBAND",
    Code: "COB",
  },
  {
    Service: "CONNECT BROADBAND",
    Code: "CNB",
  },
  {
    Service: "DEN BROADBAND",
    Code: "DEB",
  },
  {
    Service: "EXCELL BROADBAND",
    Code: "EXB",
  },
  {
    Service: "FLASH FIBERNET",
    Code: "FLF",
  },
  {
    Service: "FUSIONNET WEB SERVICES PRIVATE LIMITED",
    Code: "FWS",
  },
  {
    Service: "GIGATEL NETWORKS",
    Code: "GNB",
  },
  {
    Service: "HATHWAY BROADBAND",
    Code: "HAB",
  },
  {
    Service: "INSTALINKS",
    Code: "IBB",
  },
  {
    Service: "ION",
    Code: "ION",
  },
  {
    Service: "M-NET FIBER FAST",
    Code: "MFF",
  },
  {
    Service: "NETPLUS BROADBAND",
    Code: "NBB",
  },
  {
    Service: "NEXTRA BROADBAND",
    Code: "NBB",
  },
  {
    Service: "SKYLINK FIBERNET PRIVATE LIMITED",
    Code: "SFP",
  },
  {
    Service: "SPECTRANET BROADBAND",
    Code: "SBB",
  },
  {
    Service: "SWIFTTELE ENTERPRISES PRIVATE LIMITED",
    Code: "SEP",
  },
  {
    Service: "TIKONA BROADBAND",
    Code: "TBB",
  },
  {
    Service: "TIMBL BROADBAND",
    Code: "TBB",
  },
  {
    Service: "TTN BROADBAND",
    Code: "TTN",
  },
  {
    Service: "AIR CONNECT",
    Code: "ARC",
  },
  {
    Service: "APPLE FIBERNET",
    Code: "AFBN",
  },
  {
    Service: "UIT BHIWADI",
    Code: "UITB",
  },
  {
    Service: "UTTARAKHAND JAL SANSTHAN",
    Code: "UJS",
  },
  {
    Service: "DELHI JAL BOARD",
    Code: "DJB",
  },
  {
    Service: "MUNICIPAL CORPORATION OF GURUGRAM",
    Code: "MCOG",
  },
  {
    Service: "PHED - RAJASTHAN - WATER BILL",
    Code: "PHED",
  },
  {
    Service: "MCGM WATER DEPARTMENT",
    Code: "MCGM",
  },
  {
    Service: "BANGALORE WATER SUPPLY AND SEWERAGE BOARD",
    Code: "BWSB",
  },
  {
    Service: "CITY MUNICIPAL COUNCIL -ILKAL",
    Code: "CMCI",
  },
  {
    Service: "DELHI DEVELOPMENT AUTHORITY (DDA) - WATER",
    Code: "DDA",
  },
  {
    Service: "DEPARTMENT OF PUBLIC HEALTH ENGINEERING-WATER, MIZORAM",
    Code: "DPHEW",
  },
  {
    Service: "GREATER WARANGAL MUNICIPAL CORPORATION - WATER",
    Code: "GWMW",
  },
  {
    Service: "HYDERABAD METROPOLITAN WATER SUPPLY AND SEWERAGE BOARD",
    Code: "HMWS",
  },
  {
    Service: "HARYANA URBAN DEVELOPMENT AUTHORITY",
    Code: "HUDA",
  },
  {
    Service: "JALKAL VIBHAG NAGAR NIGAM PRAYAGRAJ",
    Code: "JVNP",
  },
  {
    Service: "JAMMU KASHMIR WATER BILLING-JKPHE KASHMIR",
    Code: "JKWB",
  },
  {
    Service: "JAMMU KASHMIR WATER BILLING-JKPHE JAMMU",
    Code: "JKWBJ",
  },
  {
    Service: "JEJURI NAGARPARISHAD",
    Code: "JNP",
  },
  {
    Service: "KALYAN DOMBIVALI MUNICIPAL CORPORATION - WATER",
    Code: "KDMCW",
  },
  {
    Service: "KERALA WATER AUTHORITY",
    Code: "KWA",
  },
  {
    Service: "KOLHAPUR MUNICIPAL CORPORATION - WATER TAX",
    Code: "KMCW",
  },
  {
    Service: "MADHYA PRADESH URBAN (E-NAGARPALIKA) - WATER",
    Code: "MPUW",
  },
  {
    Service: "MUNICIPAL CORPORATION OF AMRITSAR",
    Code: "MCA",
  },
  {
    Service: "MYSURU CITY CORPORATION",
    Code: "MCC",
  },
  {
    Service: "VATVA INDUSTRIAL ESTATE INFRASTRUCTURE DEVELOPMENT LTD",
    Code: "VIED",
  },
  {
    Service: "VASAI VIRAR MUNICIPAL CORPORATION - WATER",
    Code: "VVMCW",
  },
  {
    Service: "SURAT MUNICIPAL CORPORATION - WATER",
    Code: "SMCW",
  },
  {
    Service: "SILVASSA MUNICIPAL COUNCIL",
    Code: "SMC",
  },
  {
    Service: "RANCHI MUNICIPAL CORPORATION",
    Code: "RMC",
  },
  {
    Service: "PUNE MUNICIPAL CORPORATION - WATER",
    Code: "PMCW",
  },
  {
    Service: "PUBLIC HEALTH ENGINEERING DEPARTMENT, HARYANA",
    Code: "PHEH",
  },
  {
    Service: "PORT BLAIR MUNICIPAL COUNCIL - WATER",
    Code: "PBMCW",
  },
  {
    Service: "PUNJAB MUNICIPAL CORPORATIONS/COUNCILS",
    Code: "PMCC",
  },
  {
    Service: "PIMPRI CHINCHWAD MUNICIPAL CORPORATION",
    Code: "PCMC",
  },
  {
    Service: "NEW DELHI MUNICIPAL COUNCIL - WATER",
    Code: "NDMC",
  },
  {
    Service: "NAGAR NIGAM ALIGARH",
    Code: "NNAW",
  },
  {
    Service: "MUNICIPAL CORPORATION CHANDIGARH",
    Code: "MCCW",
  },
  {
    Service: "MUNICIPAL CORPORATION LUDHIANA - WATER",
    Code: "MCLW",
  },
  {
    Service: "MUNICIPAL CORPORATION JALANDHAR",
    Code: "MCJW",
  },
  {
    Service: "UNITED INDIA INSURANCE COMPANY LIMITED",
    Code: "UIICL",
  },
  {
    Service: "LIC",
    Code: "LIC",
  },
  {
    Service: "ADITYA BIRLA SUN LIFE INSURANCE",
    Code: "ABSL",
  },
  {
    Service: "ADITYA BIRLA HEALTH INSURANCE CO LIMITED",
    Code: "ABICL",
  },
  {
    Service: "AEGON LIFE INSURANCE",
    Code: "ALIN",
  },
  {
    Service: "AVIVA LIFE INSURANCE",
    Code: "ALI",
  },
  {
    Service: "BAJAJ ALLIANZ GENERAL INSURANCE",
    Code: "BAGI",
  },
  {
    Service: "BAJAJ ALLIANZ LIFE INSURANCE COMPANY LIMITED",
    Code: "BALIC",
  },
  {
    Service: "BHARTI AXA LIFE INSURANCE",
    Code: "BALI",
  },
  {
    Service: "CANARA HSBC OBC LIFE INSURANCE",
    Code: "CAHOLI",
  },
  {
    Service: "EXIDE LIFE INSURANCE",
    Code: "EXLI",
  },
  {
    Service: "GO DIGIT INSURANCE",
    Code: "GODI",
  },
  {
    Service: "ICICI LOMBARD GENERAL INSURANCE (MOTOR)",
    Code: "ICLGM",
  },
  {
    Service: "ICICI PRUDENTIAL LIFE INSURANCE - NEW",
    Code: "ICPL",
  },
  {
    Service: "AGEAS FEDERAL LIFE INSURANCE COMPANY LIMITED",
    Code: "AFLI",
  },
  {
    Service: "IFFCO TOKIO GENERAL INSURANCE COMPANY LIMITED",
    Code: "ITIC",
  },
  {
    Service: "INDIAFIRST LIFE INSURANCE COMPANY LTD",
    Code: "IFLIC",
  },
  {
    Service: "KOTAK LIFE INSURANCE COMPANY LIMITED",
    Code: "KLIC",
  },
  {
    Service: "MAGMA HDI - MOTOR INSURANCE",
    Code: "MHMI",
  },
  {
    Service: "MAGMA HDI - HEALTH INSURANCE",
    Code: "MHHI",
  },
  {
    Service: "MAGMA HDI - NON MOTOR INSURANCE",
    Code: "MHNMI",
  },
  {
    Service: "MANIPALCIGNA HEALTH INSURANCE",
    Code: "MCHI",
  },
  {
    Service: "MAX BUPA HEALTH INSURANCE",
    Code: "MBHI",
  },
  {
    Service: "MAX LIFE INSURANCE COMPANY LIMITED",
    Code: "MLIC",
  },
  {
    Service: "PRAMERICA LIFE INSURANCE LIMITED",
    Code: "PLIC",
  },
  {
    Service: "RELIANCE GENERAL INSURANCE COMPANY LIMITED (HEALTH)",
    Code: "RGIH",
  },
  {
    Service: "RELIANCE GENERAL INSURANCE COMPANY LIMITED",
    Code: "RGICL",
  },
  {
    Service: "ROYAL SUNDARAM GENERAL INSURANCE CO. LIMITED",
    Code: "RSGI",
  },
  {
    Service: "SBI LIFE INSURANCE COMPANY LIMITED",
    Code: "SBLIC",
  },
  {
    Service: "SHRIRAM GENERAL INSURANCE",
    Code: "SGI",
  },
  {
    Service: "SHRIRAM GENERAL INSURANCE - QUOTE PAYMENT",
    Code: "SGIQP",
  },
  {
    Service: "SHRIRAM GENERAL INSURANCE (OLD)",
    Code: "SGIO",
  },
  {
    Service: "STAR UNION DAI ICHI LIFE INSURANCE",
    Code: "SUDL",
  },
  {
    Service: "STAR HEALTH AND ALLIED INSURANCE COMPANY",
    Code: "SHAIC",
  },
  {
    Service: "THE ORIENTAL INSURANCE COMPANY LIMITED",
    Code: "TOIC",
  },
  {
    Service: "ASIANET DIGITAL",
    Code: "ADT",
  },
  {
    Service: "HATHWAY DIGITAL CABLE TV",
    Code: "HDC",
  },
  {
    Service: "INDIGITAL",
    Code: "IDC",
  },
  {
    Service: "INTERMEDIA CABLE COMMUNICATION PVT LTD",
    Code: "ICL",
  },
  {
    Service: "GTPL HATHWAY LTD.",
    Code: "GHL",
  },
  {
    Service: "PAYMYTV - DEN",
    Code: "DENTV",
  },
  {
    Service: "IOB FASTAG",
    Code: "IOBF",
  },
  {
    Service: "AIRTEL FASTAG",
    Code: "AFT",
  },
  {
    Service: "KARNATAKA BANK FASTAG",
    Code: "KBF",
  },
  {
    Service: "UCO BANK FASTAG",
    Code: "UBF",
  },
  {
    Service: "TRANSCORP INTERNATIONAL LIMITED",
    Code: "TIL",
  },
  {
    Service: "SBI FASTAG",
    Code: "SBI",
  },
  {
    Service: "IDBI BANK",
    Code: "IDBI",
  },
  {
    Service: "JAMMU AND KASHMIR BANK FASTAG",
    Code: "JKB",
  },
  {
    Service: "KOTAK MAHINDRA BANK",
    Code: "KTF",
  },
  {
    Service: "AXIS BANK",
    Code: "AXIS",
  },
  {
    Service: "BANK OF BARODA",
    Code: "BOB",
  },
  {
    Service: "ICICI BANK",
    Code: "ICICI",
  },
  {
    Service: "KOTAK MAHINDRA BANK - FASTAG",
    Code: "KOTAK",
  },
  {
    Service: "EQUITAS SMALL FINANCE BANK",
    Code: "EQUIT",
  },
  {
    Service: "FEDERAL BANK",
    Code: "FEDER",
  },
  {
    Service: "HDFC BANK",
    Code: "HDFC",
  },
  {
    Service: "IDFC FIRST BANK",
    Code: "IDFC",
  },
  {
    Service: "INDIAN HIGHWAYS MANAGEMENT COMPANY",
    Code: "INDIA",
  },
  {
    Service: "INDUSIND BANK",
    Code: "INDUS",
  },
  {
    Service: "PAUL MERCHANTS RECHARGE",
    Code: "PAUL",
  },
  {
    Service: "TRANSACTION ANALYST RECHARGE",
    Code: "TRANS",
  },
  {
    Service: "PAYTM PAYMENTS BANK",
    Code: "PAYTM",
  },
  {
    Service: "INDANE GAS",
    Code: "IOG",
  },
  {
    Service: "HP GAS",
    Code: "HPG",
  },
  {
    Service: "BHARAT GAS",
    Code: "BPG",
  },
  {
    Service: "FUTURE GENERALI INDIA LIFE INSURANCE COMPANY LIMITED",
    Code: "FGIL",
  },
  {
    Service: "HDFC LIFE INSURANCE CO. LTD.",
    Code: "HLIC",
  },
  {
    Service: "RELIANCE NIPPON LIFE INSURANCE",
    Code: "RNLI",
  },
  {
    Service: "SHRIRAM LIFE INSURANCE CO LTD",
    Code: "SLIC",
  },
  {
    Service: "TATA AIA LIFE INSURANCE",
    Code: "TLI",
  },
  {
    Service: "AHMEDABAD MUNICIPAL CORPORATION",
    Code: "AMC",
  },
  {
    Service: "DIRECTORATE OF MUNICIPAL ADMINISTRATION KARNATAKA",
    Code: "DMA",
  },
  {
    Service: "PORT BLAIR MUNICIPAL COUNCIL",
    Code: "PBMC",
  },
  {
    Service: "ZEE ENTERTAINMENT ENTERPRISES LIMITED",
    Code: "ZEEL",
  },
  {
    Service: "PARENTLANE",
    Code: "PRNL",
  },
  {
    Service: "HT DIGITAL",
    Code: "HTD",
  },
  {
    Service: "FURLENCO",
    Code: "FULN",
  },
  {
    Service: "FITPASS",
    Code: "FP",
  },
  {
    Service: "NUPAY - ENTELLUS BUSINESS SOLUTIONS PVT LTD",
    Code: "NEBS",
  },
  {
    Service: "BOB CREDIT CARD",
    Code: "BOCC",
  },
  {
    Service: "BILLROTH HOSPITAL PVT. LTD.",
    Code: "BRH",
  },
  {
    Service: "B K AROGYAM AND RESEARCH PVT. LTD.",
    Code: "BAR",
  },
  {
    Service: "AADHAR HOUSING FINANCE LIMITED",
    Code: "AHFL",
  },
  {
    Service: "AAVAS FINANCIERS LIMITED",
    Code: "AFLI",
  },
  {
    Service: "ADANI HOUSING FINANCE",
    Code: "AHFI",
  },
  {
    Service: "ADANI CAPITAL PVT LTD",
    Code: "ACPL",
  },
  {
    Service: "ADITYA BIRLA HOUSING FINANCE LIMITED",
    Code: "ABHFL",
  },
  {
    Service: "ADITYA BIRLA FINANCE LIMITED",
    Code: "ABFLI",
  },
  {
    Service: "AGORA MICROFINANCE INDIA LTD - AMIL",
    Code: "AMIL",
  },
  {
    Service: "ALTUM CREDO HOME FINANCE",
    Code: "ACHFI",
  },
  {
    Service: "ANNAPURNA FINANCE PRIVATE LIMITED-MSME",
    Code: "AFPL",
  },
  {
    Service: "ANNAPURNA FINANCE PRIVATE LIMITED-MFI",
    Code: "AFPLM",
  },
  {
    Service: "APAC FINANCIAL SERVICES PVT LTD",
    Code: "APFSP",
  },
  {
    Service: "APTUS FINANCE INDIA PRIVATE LIMITED",
    Code: "APTFI",
  },
  {
    Service: "AROHAN FINANCIAL SERVICES LTD",
    Code: "AFSLI",
  },
  {
    Service: "ASCEND CAPITAL",
    Code: "ASCA",
  },
  {
    Service: "ASIRVAD MICRO FINANCE LTD",
    Code: "ASMF",
  },
  {
    Service: "AU BANK LOAN REPAYMENT",
    Code: "AUBLR",
  },
  {
    Service: "AVANSE FINANCIAL SERVICES LTD",
    Code: "AVFSL",
  },
  {
    Service: "AXIS BANK LIMITED-MICROFINANCE",
    Code: "AXLMI",
  },
  {
    Service: "AXIS BANK LIMITED - RETAIL LOAN",
    Code: "AXBLR",
  },
  {
    Service: "AXIS FINANCE LIMITED",
    Code: "AXBL",
  },
  {
    Service: "AYAAN FINSERVE INDIA PRIVATE LTD",
    Code: "AYFIL",
  },
  {
    Service: "AYE FINANCE PVT. LTD.",
    Code: "AYFPL",
  },
  {
    Service: "BAID LEASING AND FINANCE",
    Code: "BLFI",
  },
  {
    Service: "BAJAJ HOUSING FINANCE LIMITED",
    Code: "BHFL",
  },
  {
    Service: "BAJAJ AUTO FINANCE",
    Code: "BAF",
  },
  {
    Service: "BELSTAR MICROFINANCE LIMITED",
    Code: "BLMFL",
  },
  {
    Service: "BERAR FINANCE LIMITED",
    Code: "BFLIM",
  },
  {
    Service: "BAJAJ FINANCE",
    Code: "BFL",
  },
  {
    Service: "BHARAT FINANCIAL INCLUSION LTD",
    Code: "BFIL",
  },
  {
    Service: "BUSSAN AUTO FINANCE INDIA PVT LTD",
    Code: "BUAFI",
  },
  {
    Service: "ZESTMONEY",
    Code: "ZM",
  },
  {
    Service: "CAPRI GLOBAL CAPITAL LIMITED",
    Code: "CGCL",
  },
  {
    Service: "CAPRI GLOBAL HOUSING FINANCE",
    Code: "CGHF",
  },
  {
    Service: "CARE INDIA FINVEST LIMITED",
    Code: "CIFL",
  },
  {
    Service: "CARS24 FINANCIAL SERVICES PRIVATE LIMITED",
    Code: "C24FS",
  },
  {
    Service: "CENTRUM MICROCREDIT LIMITED",
    Code: "CML",
  },
  {
    Service: "CHAITANYA INDIA FIN CREDIT PVT LTD",
    Code: "CIFCP",
  },
  {
    Service: "CHOLAMANDALAM INVESTMENT AND FINANCE COMPANY LIMITED",
    Code: "CMIFC",
  },
  {
    Service: "CLIX",
    Code: "CLX",
  },
  {
    Service: "CNH INDUSTRIAL CAPITAL PVT. LTD.",
    Code: "CNICP",
  },
  {
    Service: "CREDIT WISE CAPITAL",
    Code: "CWC",
  },
  {
    Service: "CREDITACCESS GRAMEEN - RETAIL FINANCE",
    Code: "CAGRF",
  },
  {
    Service: "CREDITACCESS GRAMEEN - MICROFINANCE",
    Code: "CAGMF",
  },
  {
    Service: "CRISS FINANCIAL HOLDINGS LTD",
    Code: "CFHL",
  },
  {
    Service: "DCB BANK LOAN REPAYMENT",
    Code: "DCBLR",
  },
  {
    Service: "DCBS LOAN",
    Code: "DCBSL",
  },
  {
    Service: "DEV FINANCE",
    Code: "DEFI",
  },
  {
    Service: "DIGAMBER CAPFIN LIMITED",
    Code: "DCLI",
  },
  {
    Service: "DIWAKAR TRACOM PRIVATE LIMITED",
    Code: "DTPL",
  },
  {
    Service: "DMI FINANCE PRIVATE LIMITED",
    Code: "DMPL",
  },
  {
    Service: "DVARA KSHETRIYA GRAMIN FINANCIALS SERVICES PRIVATE LIMITED",
    Code: "AYFIL",
  },
  {
    Service: "EASY HOME FINANCE LIMITED",
    Code: "EHFL",
  },
  {
    Service: "EDUVANZ FINANCING PVT. LTD.",
    Code: "EFIPL",
  },
  {
    Service: "MYSHUBHLIFE",
    Code: "MSLI",
  },
  {
    Service: "ELECTRONICA FINANCE LIMITED",
    Code: "ELFL",
  },
  {
    Service: "EQUITAS SFB - MICROFINANCE LOAN",
    Code: "EQSML",
  },
  {
    Service: "EQUITAS SMALL FINANCE BANK - RETAIL LOAN",
    Code: "EQSFB",
  },
  {
    Service: "ESAF SMALL FINANCE BANK (MICRO LOANS)",
    Code: "ESFB",
  },
  {
    Service: "SK FINANCE LTD.",
    Code: "SKFL",
  },
  {
    Service: "FAIRCENT-BORROWER EMI ACCOUNT",
    Code: "FBEA",
  },
  {
    Service: "FINCARE SMALL FINANCE BANK",
    Code: "FSFB",
  },
  {
    Service: "FINOVA CAPITAL PRIVATE LTD",
    Code: "FCPL",
  },
  {
    Service: "FLEXILOAN",
    Code: "FLEL",
  },
  {
    Service: "FLEXSALARY",
    Code: "FLSL",
  },
  {
    Service: "FORTUNE CREDIT CAPITAL LIMITED",
    Code: "FCCL",
  },
  {
    Service: "FULLERTON INDIA HOUSING FINANCE LIMITED",
    Code: "FIHFL",
  },
  {
    Service: "FULLERTON INDIA CREDIT COMPANY LIMITED",
    Code: "FICCL",
  },
  {
    Service: "G U FINANCIAL SERVICES PVT LTD",
    Code: "GUFS",
  },
  {
    Service: "HDB FINANCIAL SERVICES LIMITED",
    Code: "HDBFS",
  },
  {
    Service: "HERO FINCORP LIMITED",
    Code: "HFCL",
  },
  {
    Service: "HINDON MERCANTILE LIMITED - MUFIN",
    Code: "HMLM",
  },
  {
    Service: "HIRANANDANI FINANCIAL SERVICES PVT LTD",
    Code: "HFSPL",
  },
  {
    Service: "HOME FIRST FINANCE COMPANY INDIA LIMITED",
    Code: "HFFC",
  },
  {
    Service: "HOME CREDIT INDIA FINANCE PVT. LTD..",
    Code: "HCIFP",
  },
  {
    Service: "I2I FUNDING-BORROWER EMI REPAYMENT",
    Code: "IFBER",
  },
  {
    Service: "ICICI BANK LTD - LOANS",
    Code: "ICLL",
  },
  {
    Service: "ICICI BANK - INTEREST REPAYMENT LOANS",
    Code: "ICBIR",
  },
  {
    Service: "IDFC FIRST BANK LTD",
    Code: "IDFBL",
  },
  {
    Service: "IDF FINANCIAL SERVICES PRIVATE LIMITED",
    Code: "IDFSP",
  },
  {
    Service: "IIFL FINANCE LIMITED",
    Code: "IIFL",
  },
  {
    Service: "IIFL HOME FINANCE",
    Code: "IIFHL",
  },
  {
    Service: "INCRED",
    Code: "INCRD",
  },
  {
    Service: "INDIA SHELTER FINANCE CORPORATION LIMITED",
    Code: "ISFCCL",
  },
  {
    Service: "DHANI LOAN &amp; SERVICES LTD",
    Code: "DLSL",
  },
  {
    Service: "INDIA HOME LOAN LIMITED",
    Code: "IHLL",
  },
  {
    Service: "INDIABULLS HOUSING FINANCE LIMITED",
    Code: "IHFL",
  },
  {
    Service: "INDIABULLS COMMERCIAL CREDIT LTD",
    Code: "ICCL",
  },
  {
    Service: "INDOSTAR HOME FINANCE PRIVATE LIMITED",
    Code: "IHFP",
  },
  {
    Service: "INDOSTAR CAPITAL FINANCE LIMITED - CV",
    Code: "ICFCV",
  },
  {
    Service: "INDOSTAR CAPITAL FINANCE LIMITED - SME",
    Code: "ICFSM",
  },
  {
    Service: "INDUSIND BANK - CFD",
    Code: "IBCFD",
  },
  {
    Service: "JAIN MOTOR FINMART",
    Code: "JMFI",
  },
  {
    Service: "JAIN AUTOFIN",
    Code: "JAFI",
  },
  {
    Service: "JANA SMALL FINANCE BANK",
    Code: "JSFB",
  },
  {
    Service: "JANAKALYAN FINANCIAL SERVICES PRIVATE LIMITED",
    Code: "JFSPL",
  },
  {
    Service: "JOHN DEERE FINANCIAL INDIA PRIVATE LIMITED",
    Code: "JDFIP",
  },
  {
    Service: "KANAKADURGA FINANCE LIMITED - VEHICLE LOANS",
    Code: "KFLVL",
  },
  {
    Service: "KANAKADURGA FINANCE LIMITED - GOLD LOANS",
    Code: "KFLGL",
  },
  {
    Service: "KHUSH HOUSING FINANCE PVT LTD",
    Code: "KHFL",
  },
  {
    Service: "KOTAK MAHINDRA PRIME LIMITED",
    Code: "KMPL",
  },
  {
    Service: "KOTAK MAHINDRA BANK LTD.-LOANS",
    Code: "KMPLL",
  },
  {
    Service: "KREDITBEE",
    Code: "CRDB",
  },
  {
    Service: "L AND T FINANCIAL SERVICES",
    Code: "LTFS",
  },
  {
    Service: "L AND T HOUSING FINANCE",
    Code: "LTHF",
  },
  {
    Service: "LIC HOUSING FINANCE LIMITED",
    Code: "LICHF",
  },
  {
    Service: "LIGHT MICROFINANCE PRIVATE LIMITED",
    Code: "LMPL",
  },
  {
    Service: "LOAN2WHEELS",
    Code: "L2WAF",
  },
  {
    Service: "LOANTAP CREDIT PRODUCTS PRIVATE LIMITED",
    Code: "LCPPL",
  },
  {
    Service: "LOKSUVIDHA",
    Code: "LKSU",
  },
  {
    Service: "MAHAVEER FINANCE INDIA LIMITED",
    Code: "MFIL",
  },
  {
    Service: "MAHINDRA HOME FINANCE",
    Code: "MHFI",
  },
  {
    Service: "MAHINDRA AND MAHINDRA FINANCIAL SERVICES LIMITED",
    Code: "MMFSL",
  },
  {
    Service: "MANAPPURAM FINANCE LIMITED",
    Code: "MFIL",
  },
  {
    Service: "MANAPPURAM FINANCE LIMITED-VEHICLE LOAN",
    Code: "MFLVL",
  },
  {
    Service: "MAXVALUE CREDITS AND INVESTMENTS LTD",
    Code: "MCIL",
  },
  {
    Service: "MDFC FINANCIERS PVT LTD",
    Code: "MDFPL",
  },
  {
    Service: "MIDLAND MICROFIN LTD",
    Code: "MLML",
  },
  {
    Service: "MINTIFI FINSERVE PRIVATE LIMITED",
    Code: "MFPL",
  },
  {
    Service: "MITRON CAPITAL",
    Code: "MICA",
  },
  {
    Service: "MONEYTAP",
    Code: "MT",
  },
  {
    Service: "MONEYWISE FINANCIAL SERVICES PRIVATE LIMITED",
    Code: "MFSPL",
  },
  {
    Service: "RUPEEREDEE",
    Code: "RURE",
  },
  {
    Service: "MOTILAL OSWAL HOME FINANCE",
    Code: "MOHF",
  },
  {
    Service: "MUTHOOT MICROFIN LIMITED",
    Code: "MMLI",
  },
  {
    Service: "MUTHOOT FINCORP LTD",
    Code: "MFL",
  },
  {
    Service: "MUTHOOT MONEY",
    Code: "MM",
  },
  {
    Service: "MUTHOOT HOUSING FINANCE COMPANY LIMITED",
    Code: "MHFCL",
  },
  {
    Service: "MUTHOOT HOMEFIN LIMITED",
    Code: "MHLI",
  },
  {
    Service: "MUTHOOT FINANCE",
    Code: "MFI",
  },
  {
    Service: "MUTHOOT FINANCE-PERSONAL LOAN",
    Code: "MFPL",
  },
  {
    Service: "MUTHOOT CAPITAL SERVICES LTD",
    Code: "MCSL",
  },
  {
    Service: "NABARD FINANCIAL SERVICES LIMITED",
    Code: "NFSL",
  },
  {
    Service: "NETAFIM AGRICULTURAL FINANCING AGENCY PVT. LTD.",
    Code: "NAFAP",
  },
  {
    Service: "NIDHILAKSHMI FINANCE",
    Code: "NLFI",
  },
  {
    Service: "NM FINANCE",
    Code: "NMFI",
  },
  {
    Service: "NOVELTY FINANCE LTD",
    Code: "NFL",
  },
  {
    Service: "OHMYLOAN",
    Code: "OHMYL",
  },
  {
    Service: "OHMY TECHNOLOGIES PRIVATE LIMITED",
    Code: "OMTPL",
  },
  {
    Service: "ORANGE RETAIL FINANCE INDIA PVT LTD",
    Code: "ORFIP",
  },
  {
    Service: "OROBORO",
    Code: "ORBR",
  },
  {
    Service: "OXYZO FINANCIAL SERVICES PVT LTD",
    Code: "OFSPL",
  },
  {
    Service: "PAHAL FINANCIAL SERVICES PVT LTD",
    Code: "PFSPL",
  },
  {
    Service: "PAISA DUKAN-BORROWER EMI",
    Code: "PDBE",
  },
  {
    Service: "POOJA FINELEASE LTD.",
    Code: "PFL",
  },
  {
    Service: "PROTIUM-GROWTH SOURCE FINANCIAL TECHNOLOGIES PRIVATE LIMITED",
    Code: "PGSFT",
  },
  {
    Service: "RANDER PEOPLES CO OPERATIVE BANK LTD",
    Code: "RPCOB",
  },
  {
    Service: "RELIANCE ARC",
    Code: "REARC",
  },
  {
    Service: "RMK FINCORP PVT LTD",
    Code: "RMKF",
  },
  {
    Service: "R.SEN AND COMPANY INVESTMENT AND FINANCE PVT. LTD.",
    Code: "RSCIF",
  },
  {
    Service: "RUPEECIRCLE",
    Code: "RUCI",
  },
  {
    Service: "SAMASTA MICROFINANCE LTD - MICRO LOANS",
    Code: "SMFL",
  },
  {
    Service: "SARVJAN INDIA FINTECH PRIVATE LIMITED",
    Code: "SIFPL",
  },
  {
    Service: "SHINE BLUE HIRE PURCHASE LTD.",
    Code: "SBHP",
  },
  {
    Service: "SHRIRAM TRANSPORT FINANCE COMPANY LIMITED",
    Code: "STFCL",
  },
  {
    Service: "SHRIRAM CITY UNION FINANCE LTD",
    Code: "SCUFL",
  },
  {
    Service: "SHRIRAM HOUSING FINANCE LIMITED",
    Code: "SHFL",
  },
  {
    Service: "SHUBHAM HOUSING DEVELOPMENT FINANCE COMPANY LTD",
    Code: "SHDFC",
  },
  {
    Service: "KISSHT",
    Code: "KSHT",
  },
  {
    Service: "SMECORNER",
    Code: "SMCR",
  },
  {
    Service: "SMILE MICROFINANCE LIMITED",
    Code: "SMML",
  },
  {
    Service: "SNAPMINT",
    Code: "SNPMT",
  },
  {
    Service: "SPANDANA SPHOORTY FINANCIAL LTD",
    Code: "SSFL",
  },
  {
    Service: "SPANDANA RURAL AND URBAN DEVELOPMENT ORGANISATION",
    Code: "SRUDO",
  },
  {
    Service: "STASHFIN",
    Code: "STFI",
  },
  {
    Service: "STREE NIDHI - TELANGANA",
    Code: "STRNI",
  },
  {
    Service: "SURYODAY SMALL FINANCE BANK",
    Code: "SSFB",
  },
  {
    Service: "SVATANTRA MICROFIN PRIVATE LIMITED",
    Code: "SMPL",
  },
  {
    Service: "TATA CAPITAL FINANCIAL SERVICES LIMITED",
    Code: "TACFS",
  },
  {
    Service: "TATA CAPITAL HOUSING FINANCE LIMITED",
    Code: "TCHFL",
  },
  {
    Service: "THAZHAYIL NIDHI LTD",
    Code: "THNL",
  },
  {
    Service: "TOYOTA FINANCIAL SERVICES",
    Code: "TYTFS",
  },
  {
    Service: "TVS CREDIT",
    Code: "TVSCR",
  },
  {
    Service: "UJJIVAN SMALL FINANCE BANK",
    Code: "IJJSF",
  },
  {
    Service: "UGRO CAPITAL LIMITED",
    Code: "UGCL",
  },
  {
    Service: "VARTHANA",
    Code: "VRTHN",
  },
  {
    Service: "VASTU HOUSING FINANCE CORPORATION LIMITED",
    Code: "VHFCL",
  },
  {
    Service: "KINARA CAPITAL",
    Code: "KNCA",
  },
  {
    Service: "VISTAAR FINANCIAL SERVICES PRIVATE LIMITED",
    Code: "VIFSP",
  },
  {
    Service: "X10 FINANCIAL SERVICES LIMITED",
    Code: "X10FS",
  },
  {
    Service: "YOGAKSHEMAM LOANS LTD",
    Code: "YOLL",
  },
  {
    Service: "ZIPLOAN",
    Code: "ZPLN",
  },
  {
    Service: "OMLP2P.COM",
    Code: "OMPCO",
  },
  {
    Service: "TATA MOTORS FINANCE LIMITED",
    Code: "TMFL",
  },
  {
    Service: "SHARE INDIA FINCAP PVT LTD",
    Code: "SIFPL",
  },
];

exports.serviceCode = serviceCode;