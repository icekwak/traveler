$(document).ready(function(){
    $("#bus").click(function(){
        let polyline = new Tmapv2.Polyline({
            path: [
                new Tmapv2.LatLng(37.887287176034405, 127.73812633211374), // 한림대학교
                new Tmapv2.LatLng(37.88673998721666, 127.7395418216527), // 도보
                new Tmapv2.LatLng(37.88608941507719, 127.73840993065934),
                new Tmapv2.LatLng(37.8844589078771, 127.73838228115287),
                new Tmapv2.LatLng(37.88386775304488, 127.73783075388724),
                new Tmapv2.LatLng(37.88346179047672, 127.73791764023197),
                new Tmapv2.LatLng(37.88351731808659, 127.73840129698783), // 정류장 승차
                new Tmapv2.LatLng(37.88272186686768, 127.73630466811277), // 버스
                new Tmapv2.LatLng(37.88120241648185, 127.7343628729),
                new Tmapv2.LatLng(37.883011714705226, 127.72881667000327),
                new Tmapv2.LatLng(37.880486725964644, 127.72774605353496),
                new Tmapv2.LatLng(37.87671646540651, 127.72260558521566),
                new Tmapv2.LatLng(37.87450737985166, 127.71552587534023),
                new Tmapv2.LatLng(37.87411101342056, 127.71699958099465), // 정류장 하차
                new Tmapv2.LatLng(37.87443517143577, 127.71554790836063), // 도보
                new Tmapv2.LatLng(37.87384678065842, 127.7137805411852),
                new Tmapv2.LatLng(37.87353566739754, 127.71382868448559),
                new Tmapv2.LatLng(37.87337034831435, 127.71360546048625),
                new Tmapv2.LatLng(37.872772046824494, 127.71421342526094),
                new Tmapv2.LatLng(37.87255405393034, 127.71376238533314),
                new Tmapv2.LatLng(37.87274012913739, 127.71353402967831), // 조각공원
                new Tmapv2.LatLng(37.87270548048705, 127.71404798321694),
                new Tmapv2.LatLng(37.87409064389781, 127.71293615048799),
                new Tmapv2.LatLng(37.87421972253032, 127.71319312293802),
                new Tmapv2.LatLng(37.87458172611178, 127.71292383479054), // 정류장 승차
                new Tmapv2.LatLng(37.877153595621664, 127.71148238867266), // 버스
                new Tmapv2.LatLng(37.889697151431875, 127.71846940771466),
                new Tmapv2.LatLng(37.892463753055765, 127.72129294837544),
                new Tmapv2.LatLng(37.89326022093459, 127.72509784184162), // 정류장 하차
                new Tmapv2.LatLng(37.8935758435142, 127.72651065358178), // 도보
                new Tmapv2.LatLng(37.893792509129014, 127.72643888640032),
                new Tmapv2.LatLng(37.893209605132434, 127.72380700694275),
                new Tmapv2.LatLng(37.89455965955911, 127.72365822050989) // 스카이워크
            ],
            strokeColor: "#0000ff",
            strokeWeight: 5,
            strokeStyle:'solid',
            map: map
        });

        // 중심 좌표 구하기
        let x = (37.887287176034405 + 37.87274012913739 + 37.89455965955911) / 3.0;
        let y = (127.73812633211374 + 127.71353402967831 + 127.72365822050989) / 3.0;

        map.setCenter(new Tmapv2.LatLng(x,y));
        map.setZoom(14);
    });
});