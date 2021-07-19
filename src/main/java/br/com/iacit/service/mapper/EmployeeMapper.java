package br.com.iacit.service.mapper;

import br.com.iacit.domain.*;
import br.com.iacit.service.dto.EmployeeDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Employee} and its DTO {@link EmployeeDTO}.
 */
@Mapper(componentModel = "spring", uses = { CompanyMapper.class })
public interface EmployeeMapper extends EntityMapper<EmployeeDTO, Employee> {
    @Mapping(target = "company", source = "company", qualifiedByName = "id")
    EmployeeDTO toDto(Employee s);
}
