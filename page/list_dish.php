<?php
	require_once( "sparqllib.php" );
	
	$data = sparql_get(
						"http://www.linkedfood.org:8890/sparql/",
						"select distinct ?name_Dish ?dish ?classes
							where {?dish rdf:type gr:Offering . ?dish rdfs:label ?name_Dish . ?dish a ?classes }
							order by(?name_Dish)
						");
	
	if(!isset($data)){ 
		print sparql_errno() . ": " . sparql_error(). "\n"; 
		exit; 
	}
	foreach($data as $row){		
		$data_sparql[] = array( $data->fields()[0]=>$row[$data->fields()[0]],
								$data->fields()[1]=>$row[$data->fields()[1]],
								$data->fields()[2]=>$row[$data->fields()[2]]
						);
	}
	$json['results']=$data_sparql;
	$information=json_encode($json);
	echo $information;
?>