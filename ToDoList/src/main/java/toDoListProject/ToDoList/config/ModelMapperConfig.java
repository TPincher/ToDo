package toDoListProject.ToDoList.config;

import org.modelmapper.Converter;
import org.modelmapper.ModelMapper;
import org.modelmapper.spi.MappingContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import toDoListProject.ToDoList.tasks.Task;
import toDoListProject.ToDoList.tasks.UpdateTaskDTO;
import toDoListProject.ToDoList.tasks.CreateTaskDTO;

@Configuration
public class ModelMapperConfig {

	@Bean
	public ModelMapper modelMapper() {
		ModelMapper mapper = new ModelMapper();
		mapper.typeMap(String.class, String.class).setConverter(new StringTrimConverter());
		mapper.getConfiguration().setSkipNullEnabled(true);
		mapper.typeMap(CreateTaskDTO.class, Task.class).addMappings(
				m -> m.using(new LowerCaseConverter()).map(CreateTaskDTO::getCategory, Task::setCategory));
		mapper.typeMap(UpdateTaskDTO.class, Task.class).addMappings(
				m -> m.using(new LowerCaseConverter()).map(UpdateTaskDTO::getCategory, Task::setCategory));
		return mapper;
	}
	
	private class StringTrimConverter implements Converter<String, String> {

		@Override
		public String convert(MappingContext<String, String> context) {
			if (context.getSource() == null) {
				return null;
			}
			return context.getSource().trim();
		}
		
	}
	private class LowerCaseConverter implements Converter<String, String> {
		
		@Override
		public String convert(MappingContext<String, String> context) {
			if (context.getSource() == null) {
				return null;
			}
			return context.getSource().toLowerCase();
		}
		
	}
}
