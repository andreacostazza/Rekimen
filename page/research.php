<?php
	require_once( "sparqllib.php" );
	$select="?restaurant ?name_Dish ?dish ?classes";
	if(isset($_GET['form_restaurant'])){	
		 $filter="filter(regex(?restaurant,\"". $_GET['form_restaurant'] . "\",\"i\"))";
		 $results='restaurants';
		 $select="?restaurant";
	}else 
	if(isset($_GET['form_dish'])){
		$filter="filter(regex(?name_Dish,\"". $_GET['form_dish'] . "\",\"i\"))";
		$results='dish';
	}
	
		$data = sparql_get(
						"http://www.linkedfood.org:8890/sparql/",
						"prefix lgdo: <http://linkedgeodata.org/ontology/>
						prefix gr: <http://purl.org/goodrelations/v1#>
						select distinct ". $select ."
						where {?link a lgdo:Restaurant . ?link rdfs:label ?restaurant . ?link gr:offers ?dish . 
						?dish rdfs:label ?name_Dish . ?dish a ?classes " . $filter . "}
						");
		if(!isset($data)){ 
			print sparql_errno() . ": " . sparql_error(). "\n"; 
			exit; 
		}		
		foreach($data as $row){
			if($select=='?restaurant'){
				$data_sparql[] = array( $data->fields()[0]=>$row[$data->fields()[0]]
										);
			}else{
					$data_sparql[] = array( $data->fields()[0]=>$row[$data->fields()[0]],
											$data->fields()[1]=>$row[$data->fields()[1]],
											$data->fields()[2]=>$row[$data->fields()[2]],
											$data->fields()[3]=>$row[$data->fields()[3]]
										);
				}
		}
		if(isset($data_sparql)){
			$json[$results]=$data_sparql;
			$information=json_encode($json);
			echo $information;
		}else{
			echo "-1";
		}
?>	