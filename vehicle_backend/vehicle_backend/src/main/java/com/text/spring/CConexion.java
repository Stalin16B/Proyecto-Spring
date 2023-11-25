package com.text.spring;

import java.beans.Statement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;

import javax.swing.JOptionPane;

public class CConexion {
	
	Connection conn = null;
	
	String usuario = "postgres";
	String contrasenia = "root";
	String bd = "postgres";
	String ip = "localhost";
	String puerto = "5432";
	String cadena = "jdbc:postgresql://"+ip+":"+puerto+"/"+bd;
	
	public Connection establecerConexion() {
		
		try {
			Class.forName("org.postgresql.Driver");
			conn = DriverManager.getConnection(cadena,usuario,contrasenia);
			JOptionPane.showMessageDialog(null, "Se conecto a la bd");
			
			java.sql.Statement stmt = conn.createStatement();
			
			String insertData = "INSERT INTO vehiculos("
			         + "placa, model, year, observation, price) VALUES "
			         + "('PER-1234', 'Chevrolet', '2023', 'Bueno', '15000')";

			int i = stmt.executeUpdate(insertData);
			
			ResultSet rs = stmt.executeQuery("SELECT * FROM vehiculos");
				while (rs.next()) {
					String placa = rs.getString("placa");
					String model = rs.getString("model"); 
					String year = rs.getString("year"); 
					System.out.println("Vehiculo: " +placa+ " "+ model+" "+year);
				}
			
			
			
		} catch (Exception e) {
			JOptionPane.showMessageDialog(null, "No se conecto a la bd" + e.toString());
		}
		return conn;
	}
	
}
