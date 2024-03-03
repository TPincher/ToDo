package toDoListProject.ToDoList.common;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@MappedSuperclass
public abstract class BaseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(nullable = false, updatable = false)
	private Date createdAt;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column
	private Date updatedAt;
	
	@PrePersist
	public void onCreate() {
		Date timestamp = new Date();
		createdAt = timestamp;
		updatedAt = timestamp;
	}
}
