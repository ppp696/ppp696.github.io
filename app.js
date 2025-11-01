$(function() {
  // 1) 待辦清單互動
  $('#new-task').on('keypress', function(e) {
    if (e.which === 13) {
      const text = $(this).val().trim();
      if (!text) return;
      const $li = $('<li>').text(text);
      const $del = $('<button>').text('刪除').on('click', function(){ $li.remove(); });
      $li.append($('<span>').css('margin-left','10px')).append($del);
      $('#task-list').append($li);
      $(this).val('');
    }
  });

  // 2) AJAX 範例
  $('#load-data').on('click', function() {
    const sample = [
      {id:1, name:'蘋果', price:30},
      {id:2, name:'香蕉', price:15},
      {id:3, name:'橘子', price:20}
    ];
    renderData(sample);
  });

  function renderData(items){
    const $out = $('#data-output').empty();
    const $table = $('<table>').css({borderCollapse:'collapse', width:'100%'});
    items.forEach(it=>{
      const $tr = $('<tr>').append($('<td>').text(it.name)).append($('<td>').text('NT$ ' + it.price));
      $table.append($tr);
    });
    $out.append($table);
  }
});
