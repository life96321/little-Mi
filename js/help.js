$(function(){
	var bol= true;
	$(".help_center_group_one").on("click",function(){
		$(".help_center_group_two:eq("+$(this).index(".help_center_group_one")+")").slideToggle();
		if(bol){
			$(".help_center_group_one:eq("+$(this).index(".help_center_group_one")+")").css({
				backgroundColor:"#f3f3f3"
			});
			$(".help_center_group_a:eq("+$(this).index(".help_center_group_one")+")").css({
				color:"#00adee"
			});
			$(".help_center_group_img:eq("+$(this).index(".help_center_group_one")+")").css({
				background:"url('img/new_version_icon.png') no-repeat -3px -1px",
				width: "21px",
				height: "21px"
			});
			bol=false;
		}else{
			$(".help_center_group_one:eq("+$(this).index(".help_center_group_one")+")").css({
				backgroundColor:"white"
			});
			$(".help_center_group_a:eq("+$(this).index(".help_center_group_one")+")").css({
				color:""
			});
			$(".help_center_group_img:eq("+$(this).index(".help_center_group_one")+")").css({
				background:"",
				width:"",
				height:""
			});
			bol=true;
		}
	})
})
//$(function(){
//	$(".help_center_group_two").hide()
//	$(".help_center_group_one").click(function(){
//		$(this).parent().find(".help_center_group_two").removeClass("a");
//		$(".a").slideUp();
//		$(this).parent().find(".help_center_group_two").slideToggle();
//		$(this).parent().find(".help_center_group_two").addClass("a");
//	})
//})