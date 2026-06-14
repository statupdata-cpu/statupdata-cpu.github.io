// fix_ids.js — Run after statnet.html loads to assign unique IDs to unit mocks
// This fixes the duplicate ID issue where Full Mocks and Unit Mocks shared the same IDs

(function() {
  const unitBase = {u1:100, u2:200, u3:300, u4:400, u5:500, u6:600, u7:700, u8:800, u9:900, u10:1000};
  
  MOCK_DEFS.forEach(function(def) {
    if (def.type === 'unit') {
      def.id = unitBase[def.unit] + def.mockNum;
    }
  });
  
  console.log('IDs fixed: unit mocks now have unique IDs (101-140, 201-240, etc.)');
})();
