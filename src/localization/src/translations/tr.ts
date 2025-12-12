// SPDX-License-Identifier: MIT
// Copyright contributors to the kepler.gl project

import {LOCALES} from '../locales';

export default {
  property: {
    weight: 'ağırlık',
    label: 'etiket',
    fillColor: 'dolgu rengi',
    color: 'renk',
    coverage: 'kaplama',
    strokeColor: 'çizgi rengi',
    radius: 'yarıçap',
    outline: 'kontur',
    stroke: 'çizgi',
    density: 'yoğunluk',
    height: 'yükseklik',
    sum: 'toplam',
    pointCount: 'Nokta sayısı'
  },

  placeholder: {
    search: 'Ara',
    selectField: 'Alan seç',
    yAxis: 'Y Ekseni',
    selectType: 'Tür seç',
    selectValue: 'Değer seç',
    enterValue: 'Değer gir',
    empty: 'boş',
    selectLayer: 'Katman seç'
  },

  misc: {
    by: '',
    valuesIn: 'Değer birimi',
    valueEquals: 'Değer eşittir',
    dataSource: 'Veri kaynağı',
    brushRadius: 'Fırça yarıçapı (km)',
    empty: ' '
  },

  mapLayers: {
    title: 'Harita katmanları',
    label: 'Etiket',
    road: 'Yollar',
    border: 'Sınırlar',
    building: 'Binalar',
    water: 'Su',
    land: 'Arazi',
    '3dBuilding': '3B binalar',
    background: 'Arka plan'
  },

  panel: {
    text: {
      label: 'Etiket',
      labelWithId: 'Etiket {labelId}',
      fontSize: 'Yazı boyutu',
      fontColor: 'Yazı rengi',
      backgroundColor: 'Arka plan rengi',
      textAnchor: 'Metin referans noktası',
      alignment: 'Hizalama',
      addMoreLabel: 'Daha fazla etiket ekle',
      outlineWidth: 'Kontur kalınlığı',
      outlineColor: 'Kontur rengi'
    }
  },

  sidebar: {
    panels: {
      layer: 'Katmanlar',
      filter: 'Filtreler',
      interaction: 'Etkileşimler',
      basemap: 'Taban harita'
    },
    panelViewToggle: {
      list: 'Liste görünümü',
      byDataset: 'Veri kümesine göre'
    }
  },

  layer: {
    required: 'Zorunlu*',
    columnModesSeparator: 'Veya',
    radius: 'Yarıçap',
    color: 'Renk',
    fillColor: 'Dolgu rengi',
    outline: 'Kontur',
    weight: 'Ağırlık',
    propertyBasedOn: '{property} için alan',
    coverage: 'Kaplama',
    stroke: 'Çizgi',
    strokeWidth: 'Çizgi kalınlığı',
    strokeColor: 'Çizgi rengi',
    basic: 'Temel',
    trailLength: 'İz uzunluğu',
    trailLengthDescription: 'Yolun tamamen kaybolması için gereken saniye',
    newLayer: 'yeni katman',
    elevationByDescription:
      'Kapalıyken yükseklik, nokta sayısına göre hesaplanır',
    colorByDescription:
      'Kapalıyken renk, nokta sayısına göre hesaplanır',
    aggregateBy: '{field} alanını şu şekilde grupla',
    '3DModel': '3B Model',
    '3DModelOptions': '3B Model seçenekleri',
    service: 'Servis',
    layer: 'Katman',
    appearance: 'Görünüm',
    uniqueIdField: 'Benzersiz ID alanı',
    type: {
      point: 'nokta',
      arc: 'yay',
      line: 'çizgi',
      grid: 'ızgara',
      hexbin: 'hexbin',
      polygon: 'poligon',
      geojson: 'geojson',
      cluster: 'küme',
      icon: 'ikon',
      heatmap: 'ısı haritası',
      hexagon: 'altıgen',
      hexagonid: 'H3',
      trip: 'rota',
      s2: 'S2',
      '3d': '3B',
      vectortile: 'vektör karo',
      rastertile: 'raster karo',
      wms: 'WMS'
    },
    wms: {
      hover: 'Değer:'
    },
    layerUpdateError:
      'Katman güncellenirken hata oluştu: {errorMessage}. Lütfen giriş verisinin formatını kontrol edin.',
    interaction: 'Etkileşim'
  },

  layerVisConfigs: {
    angle: 'Açı',
    strokeWidth: 'Çizgi kalınlığı (piksel)',
    strokeWidthRange: 'Çizgi kalınlığı aralığı',
    radius: 'Yarıçap',
    fixedRadius: 'Sabit yarıçap (metre)',
    fixedRadiusDescription:
      'Harita yarıçapını mutlak metre cinsinden kullan (örn. 5 → 5 metre)',
    radiusRange: 'Yarıçap aralığı',
    clusterRadius: 'Küme yarıçapı (piksel)',
    radiusRangePixels: 'Yarıçap aralığı (piksel)',
    billboard: 'Billboard',
    billboardDescription: 'Geometriyi kameraya doğru döndür',
    fadeTrail: 'İzi solgunlaştır',
    opacity: 'Opaklık',
    coverage: 'Kaplama',
    outline: 'Kontur',
    colorRange: 'Renk skalası',
    stroke: 'Çizgi',
    strokeColor: 'Çizgi rengi',
    strokeColorRange: 'Çizgi renk skalası',
    targetColor: 'Hedef rengi',
    colorAggregation: 'Renk toplama',
    heightAggregation: 'Yükseklik toplama',
    resolutionRange: 'Çözünürlük aralığı',
    sizeScale: 'Boyut ölçeği',
    worldUnitSize: 'Dünya birimi boyutu',
    elevationScale: 'Yükselti ölçeği',
    enableElevationZoomFactor: 'Zoom’a göre yükseltiyi ayarla',
    enableElevationZoomFactorDescription:
      'Zoom seviyesine göre yükseklik / yükseltiyi ayarla',
    enableHeightZoomFactor: 'Zoom’a göre yükseklik faktörü',
    heightScale: 'Yükseklik ölçeği',
    coverageRange: 'Kaplama aralığı',
    highPrecisionRendering: 'Yüksek hassasiyetli çizim',
    highPrecisionRenderingDescription:
      'Yüksek hassasiyet performansı yavaşlatabilir',
    height: 'Yükseklik',
    heightDescription:
      '3B görünüme geçmek için haritanın sağ üstündeki butona tıkla',
    fill: 'Dolgu',
    enablePolygonHeight: 'Poligon yüksekliğini etkinleştir',
    showWireframe: 'Tel kafesi göster',
    weightIntensity: 'Ağırlık yoğunluğu',
    zoomScale: 'Yakınlaştırma ölçeği',
    heightRange: 'Yükseklik aralığı',
    heightMultiplier: 'Yükseklik çarpanı',
    fixedHeight: 'Sabit yükseklik',
    fixedHeightDescription: 'Yüksekliği olduğu gibi kullan',
    allowHover: 'Üzerine gelme bilgisini göster',
    showNeighborOnHover: 'Komşuları vurgula',
    showHighlightColor: 'Vurgu rengini göster',
    darkModeEnabled: 'Koyu taban harita',
    transparentBackground: 'Şeffaf arka plan'
  },

  layerManager: {
    addData: 'Veri ekle',
    addLayer: 'Katman ekle',
    layerBlending: 'Katman karışımı',
    overlayBlending: 'Örtüşme karışımı'
  },

  mapManager: {
    mapStyle: 'Harita stili',
    addMapStyle: 'Harita stili ekle',
    '3dBuildingColor': '3B bina rengi',
    backgroundColor: 'Arka plan rengi'
  },

  effectManager: {
    effects: 'Efektler',
    addEffect: 'Efekt ekle',
    pickDateTime: 'Tarih / saat seç',
    currentTime: 'Şu anki zaman',
    pickCurrrentTime: 'Şu anki zamanı kullan',
    date: 'Tarih',
    time: 'Saat',
    timezone: 'Zaman dilimi'
  },

  layerConfiguration: {
    defaultDescription:
      'Seçili alana göre {property} değerini hesapla',
    howTo: 'Nasıl yapılır',
    showColorChart: 'Renk grafiğini göster',
    hideColorChart: 'Renk grafiğini gizle'
  },

  filterManager: {
    addFilter: 'Filtre ekle',
    timeFilterSync: 'Senkronize veri kümeleri',
    timeLayerSync: 'Katman zaman çizelgesi ile bağla',
    timeLayerUnsync: 'Katman zaman çizelgesinden ayır',
    column: 'Sütun'
  },

  datasetTitle: {
    showDataTable: 'Veri tablosunu göster',
    removeDataset: 'Veri kümesini kaldır'
  },

  datasetInfo: {
    rowCount: '{rowCount} satır',
    vectorTile: 'Vektör karo',
    rasterTile: 'Raster karo',
    wmsTile: 'WMS karo'
  },

  tooltip: {
    hideLayer: 'Katmanı gizle',
    showLayer: 'Katmanı göster',
    hideFeature: 'Özelliği gizle',
    showFeature: 'Özelliği göster',
    hide: 'gizle',
    show: 'göster',
    removeLayer: 'Katmanı sil',
    duplicateLayer: 'Katmanı çoğalt',
    zoomToLayer: 'Katmana yakınlaş',
    resetAfterError:
      'Hata sonrası katmanı tekrar etkinleştirmeyi dene',
    layerSettings: 'Katman ayarları',
    closePanel: 'Paneli kapat',
    switchToDualView: 'Çift harita görünümüne geç',
    showLegend: 'Göstergeyi göster',
    disable3DMap: '3B haritayı kapat',
    DrawOnMap: 'Harita üzerinde çiz',
    selectLocale: 'Dil seç',
    showAiAssistantPanel: 'Yapay zekâ asistanını göster',
    hideAiAssistantPanel: 'Yapay zekâ asistanını gizle',
    hideLayerPanel: 'Katman panelini gizle',
    showLayerPanel: 'Katman panelini göster',
    moveToTop: 'Katmanı en üste taşı',
    selectBaseMapStyle: 'Taban harita stili seç',
    removeBaseMapStyle: 'Taban harita stilini kaldır',
    delete: 'Sil',
    timePlayback: 'Zaman oynatma',
    timeFilterSync: 'Başka veri kümesindeki sütunla senkronize et',
    cloudStorage: 'Bulut depolama',
    '3DMap': '3B Harita',
    animationByWindow: 'Kaydırmalı zaman aralığı',
    animationByIncremental: 'Artan zaman aralığı',
    speed: 'hız',
    play: 'oynat',
    pause: 'duraklat',
    reset: 'sıfırla',
    export: 'dışa aktar',
    timeLayerSync: 'Katman zaman çizelgesi ile bağla',
    timeLayerUnsync: 'Katman zaman çizelgesinden ayır',
    syncTimelineStart: 'Filtre aralığının başlangıcı',
    syncTimelineEnd: 'Filtre aralığının bitişi',
    showEffectPanel: 'Efekt panelini göster',
    hideEffectPanel: 'Efekt panelini gizle',
    removeEffect: 'Efekti kaldır',
    disableEffect: 'Efekti devre dışı bırak',
    effectSettings: 'Efekt ayarları'
  },

  toolbar: {
    exportImage: 'Görüntü dışa aktar',
    exportData: 'Veri dışa aktar',
    exportMap: 'Haritayı dışa aktar',
    shareMapURL: 'Harita bağlantısını paylaş',
    saveMap: 'Haritayı kaydet',
    select: 'Seç',
    polygon: 'Poligon',
    rectangle: 'Dikdörtgen',
    hide: 'Gizle',
    show: 'Göster',
    ...LOCALES // здесь появится и 'Türkçe'
  },

  editor: {
    filterLayer: 'Katmanları filtrele',
    filterLayerDisabled:
      'Poligon olmayan geometriler filtre için kullanılamaz',
    copyGeometry: 'Geometriyi kopyala',
    noLayersToFilter: 'Filtrelenecek katman yok'
  },

  modal: {
    title: {
      deleteDataset: 'Veri kümesini sil',
      addDataToMap: 'Haritaya veri ekle',
      exportImage: 'Görüntü dışa aktar',
      exportData: 'Veri dışa aktar',
      exportMap: 'Haritayı dışa aktar',
      addCustomMapboxStyle: 'Özel harita stili ekle',
      saveMap: 'Haritayı kaydet',
      shareURL: 'Bağlantıyı paylaş'
    },
    button: {
      delete: 'Sil',
      download: 'İndir',
      export: 'Dışa aktar',
      addStyle: 'Stil ekle',
      save: 'Kaydet',
      defaultCancel: 'Vazgeç',
      defaultConfirm: 'Onayla'
    },
    exportImage: {
      ratioTitle: 'En/Boy oranı',
      ratioDescription: 'Kullanıma uygun oranı seç.',
      ratioOriginalScreen: 'Orijinal ekran',
      ratioCustom: 'Özel',
      ratio4_3: '4:3',
      ratio16_9: '16:9',
      resolutionTitle: 'Çözünürlük',
      resolutionDescription: 'Yüksek çözünürlük baskılar için daha iyidir.',
      mapLegendTitle: 'Harita göstergesi',
      mapLegendAdd: 'Göstergeyi haritaya ekle'
    },
    exportData: {
      datasetTitle: 'Veri kümesi',
      datasetSubtitle: 'Dışa aktarılacak veri kümelerini seç',
      allDatasets: 'Tümü',
      dataTypeTitle: 'Veri türü',
      dataTypeSubtitle: 'Dışa aktarılacak veri türünü seç',
      filterDataTitle: 'Veriyi filtrele',
      filterDataSubtitle:
        'Orijinal veriyi veya filtrelenmiş veriyi dışa aktarabilirsin',
      filteredData: 'Filtrelenmiş veri',
      unfilteredData: 'Filtrelenmemiş veri',
      fileCount: '{fileCount} dosya',
      rowCount: '{rowCount} satır',
      tiledDatasetWarning:
        "* Döşeme veri kümeleri için veri dışa aktarımı desteklenmiyor"
    },
    deleteData: {
      warning:
        'Bu veri kümesini silmek üzeresin. Bu işlem {length} katmanı etkileyecek.'
    },
    loadingDialog: {
      loading: 'Yükleniyor...'
    },
    loadData: {
      upload: 'Dosya yükle',
      tileset: 'Tileset',
      storage: 'Depolamadan yükle'
    }
  },

  header: {
    visibleLayers: 'Görünür katmanlar',
    layerLegend: 'Gösterge'
  },

  interactions: {
    tooltip: 'Açıklama (tooltip)',
    brush: 'Fırça',
    coordinate: 'Koordinatlar',
    geocoder: 'Adres arama'
  },

  layerBlending: {
    title: 'Katman karışımı',
    additive: 'eklemeli',
    normal: 'normal',
    subtractive: 'çıkarımsal'
  },

  overlayBlending: {
    title: 'Harita üstü karışımı',
    description:
      'Katmanları taban harita ile karıştırarak ikisini de görünür yap.',
    screen: 'koyu taban harita',
    normal: 'normal',
    darken: 'açık taban harita'
  },

  columns: {
    title: 'Sütunlar',
    lat: 'enlem',
    lng: 'boylam',
    altitude: 'irtifa',
    alt: 'irtifa',
    id: 'id',
    timestamp: 'zaman',
    icon: 'ikon',
    geojson: 'geojson',
    geoarrow: 'geoarrow',
    geoarrow0: 'geoarrow kaynak',
    geoarrow1: 'geoarrow hedef',
    token: 'token',
    sortBy: 'sıralama',
    neighbors: 'komşular',
    arc: {
      lat0: 'kaynak enlem veya hex id',
      lng0: 'kaynak boylam veya hex id',
      lat1: 'hedef enlem veya hex id',
      lng1: 'hedef boylam veya hex id'
    },
    line: {
      alt0: 'kaynak irtifa',
      alt1: 'hedef irtifa'
    },
    grid: {
      worldUnitSize: 'Izgara boyutu (km)'
    },
    hexagon: {
      worldUnitSize: 'Altıgen yarıçapı (km)'
    },
    hex_id: 'hex id'
  },

  color: {
    customPalette: 'Özel palet',
    steps: 'Adım sayısı',
    type: 'Tür',
    colorBlindSafe: 'Renk körü dostu',
    reversed: 'Ters',
    disableStepReason:
      "Özel renk aralıkları kullanılırken adım sayısı değiştirilemez, adımları değiştirmek için özel palet kullan.",
    preset: 'Hazır renkler',
    picker: 'Renk seçici'
  },

  scale: {
    colorScale: 'Renk ölçeği',
    sizeScale: 'Boyut ölçeği',
    strokeScale: 'Çizgi ölçeği',
    strokeColorScale: 'Çizgi renk ölçeği',
    scale: 'Ölçek'
  },

  fileUploader: {
    message: 'Dosyalarınızı buraya sürükleyip bırakın',
    chromeMessage:
      '*Chrome kullanıcıları: Dosya boyutunu 250 MB ile sınırla, daha büyük dosyalar için Safari dene',
    disclaimer:
      '*kepler.gl tamamen istemci tarafında çalışır. Veri sadece tarayıcında kalır, sunucuya gönderilmez.',
    configUploadMessage:
      '{fileFormatNames} veya kaydedilmiş harita **Json** dosyasını yükle. [**Desteklenen formatlar**] hakkında daha fazla bilgi al.',
    browseFiles: 'dosyalarına göz at',
    uploading: 'Yükleniyor',
    fileNotSupported: '{errorFiles} dosyası desteklenmiyor.',
    or: 'veya'
  },

  geocoder: {
    title:
      'Adres veya koordinat gir, örn: 37.79,-122.40'
  },

  fieldSelector: {
    clearAll: 'Hepsini temizle',
    formatting: 'Biçimlendirme'
  },

  compare: {
    modeLabel: 'Karşılaştırma modu',
    typeLabel: 'Karşılaştırma türü',
    types: {
      absolute: 'Mutlak',
      relative: 'Göreli'
    }
  },

  mapPopover: {
    primary: 'Birincil'
  },

  density: 'yoğunluk',
  'Bug Report': 'Hata bildir',
  'User Guide': 'Kullanım kılavuzu',
  Save: 'Kaydet',
  Share: 'Paylaş',

  mapLegend: {
    layers: {
      line: {
        singleColor: {
          sourceColor: 'Kaynak',
          targetColor: 'Hedef'
        }
      },
      arc: {
        singleColor: {
          sourceColor: 'Kaynak',
          targetColor: 'Hedef'
        }
      },
      default: {
        singleColor: {
          color: 'Dolgu rengi',
          strokeColor: 'Kontur'
        }
      }
    }
  }
};
