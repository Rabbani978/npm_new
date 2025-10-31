// $(document).ready(function(){
	
// 	$('ul.tabs li').click(function(){
// 		var tab_id = $(this).attr('data-tab');

// 		$('ul.tabs li').removeClass('current');
// 		$('.tab-content').removeClass('current');

// 		$(this).addClass('current');
// 		$("#"+tab_id).addClass('current');
// 	})

// })



const triggerTabList = document.querySelectorAll('#myTab')
triggerTabList.forEach(triggerEl => {
  const tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', event => {
    event.preventDefault()
    tabTrigger.show()
  })
})


