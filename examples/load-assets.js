const loadAsset = os => {

    import('../src/sass/'+ os +'/index.scss');
    if(os == 'windows'){
        import('jquery');
        import('metro-dist/js/metro');
    }
}

export default loadAsset;
